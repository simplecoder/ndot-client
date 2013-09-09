
var actors = [];

function setupView(){
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
}

function plusBtn_onClick(){
	var actor = {
		actorType: '',
		vinImage: '',
		dlBarcode: '',
		plateNum: '',
		plateState:''
	}
	var actorDetailController = Alloy.createController('ActorDetail',{
		actor: actor			
	}); 
	   
    Alloy.Globals.tabMain.open(actorDetailController.getView());
}

function tvActors_onClick(e){
	$.timeEntryRowBeingModifiedIndex = e.index;
	var currentTimeCard = getCurrentActor();
}

function btnSubmitSr1_onClick(){
	
}

setupView();
