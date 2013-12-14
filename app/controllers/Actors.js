var serviceAgent = require('serviceAgent');

var args = arguments[0] || {};
$.sr1Form = args.sr1Form;

function setupView(){
	// hack to set the color of the title 
	var titleLabel = Ti.UI.createLabel({
		text:'Actor Detail',
		color:'#fff'
	});	
	$.winActors.titleControl = titleLabel;
	
	var plusBtn = Titanium.UI.createButton({
		top: 0,
		width: '30dp',
		height: '30dp',
		right: '30dp',
		backgroundColor: 'transparent',
		backgroundImage: 'images/plus.png'
	});
	plusBtn.addEventListener('click', plusBtn_onClick);
	$.winActors.rightNavButton = plusBtn;
	
	for (var i=0; i < $.sr1Form.actors.length; i++){
		var row = actorTableRowFactory($.sr1Form.actors[i]);
		$.tvActors.appendRow(row);
	}
	$.tvActors.height = 60 * $.sr1Form.actors.length + 'dp';
}

function plusBtn_onClick(){
	var actor = {
		actorType: 'Driver',
		vin: '',
		dlBarcode: '',
		plateNum: '',
		plateState:'NV',
		dlBarcodeOwner: '',
		ownerSameAsDriver: true
	};
	$.sr1Form.actors.push(actor);
	var actorDetailController = Alloy.createController('ActorDetail',{
		actor: actor,
		onCloseCb: ActorDetail_onClose,
		mode: 'Add'
	}); 
    Alloy.Globals.tabMain.open(actorDetailController.getView());
}

function ActorDetail_onClose(actorDetailResult){
	if (actorDetailResult == 'Delete'){
		$.sr1Form.actors.splice($.actorRowBeingModified, 1);
		$.tvActors.deleteRow($.actorRowBeingModified);
		$.tvActors.height = 60 * $.tvActors.data[0].rowCount + 'dp';
	}
	else if (actorDetailResult == 'Add'){
		var row = actorTableRowFactory($.sr1Form.actors[$.sr1Form.actors.length - 1]);
		$.tvActors.appendRow(row);
		$.tvActors.height = 60 * $.tvActors.data[0].rowCount + 'dp';
	}
	else{
		var actor = $.sr1Form.actors[$.actorRowBeingModified];
		var tvrActor = $.tvActors.data[0].rows[$.actorRowBeingModified];
		var rowChildren = tvrActor.getChildren();
		rowChildren[0].text = getSymbolCharForActorType(actor);
		rowChildren[1].text = actor.actorType;
		rowChildren[2].text = actor.plateNum + ' - ' + actor.plateState;
	}
}

function getSymbolCharForActorType(actor){
	var lblActorTypeChar = '';
	switch (actor.actorType){
    	case 'Driver':
    		lblActorTypeChar = 'D';
    		break;
		case 'Pedestrian':
			lblActorTypeChar = 'P';
			break;
		case 'Parked Vehicles':
			lblActorTypeChar = 'V';
			break;
		case 'Pedal Cyclist':
			lblActorTypeChar = 'C';
			break;
		case 'Other':
			lblActorTypeChar = 'O';
			break;
    }
    return lblActorTypeChar;
}

function actorTableRowFactory(actor){
	var row = Ti.UI.createTableViewRow({
		height: '60dp'
    });
    
    var lblActorTypeSymbol = Ti.UI.createLabel({
        text: getSymbolCharForActorType(actor),
    	color: 'white',
		borderRadius:'5dp',
		borderWidth:'2dp',
		borderColor: 'white',
		textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
		top: '10dp',
		left: '10dp',
		width: '40dp',
		height: '40dp',
		font:{
			fontSize: '15dp'
		}
    });
    var lblActorType = Ti.UI.createLabel({
        text: actor.actorType,
    	color: 'white',
		top: '10dp',
		font:{
			fontSize: '13dp'
		},
		left: '60dp'
    });
    var lblPlate = Ti.UI.createLabel({
        text: actor.plateNum + ' - ' + actor.plateState,
    	color: 'white',
		top: '28dp',
		font:{
			fontSize: '13dp'
		},
		left: '60dp'
    });
    row.add(lblActorTypeSymbol);
    row.add(lblActorType);
    row.add(lblPlate);
    return row;
}

function tvActors_onClick(e){
	$.actorRowBeingModified = e.index;
	var actor = $.sr1Form.actors[e.index];
	var actorDetailController = Alloy.createController('ActorDetail',{
		actor: actor,
		onCloseCb: ActorDetail_onClose,
		mode: 'Edit'
	}); 
    Alloy.Globals.tabMain.open(actorDetailController.getView());
}

function btnSubmitSr1_onClick(){
	serviceAgent.submitSr1Form($.sr1Form, function(res, status){
		var dialog = Ti.UI.createAlertDialog({
		    message: 'Done submit. status: ' + status + ' res: ' + res,
		    title: 'Submit SR1 Form'
	  	});
	  	dialog.show();
	});
}

setupView();
