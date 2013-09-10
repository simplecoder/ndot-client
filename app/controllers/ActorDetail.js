var args = arguments[0] || {};
$.actor = args.actor;
$.onCloseCb = args.onCloseCb;
$.mode = args.mode;

function btnCaptureVin_onClick(){
  
}

function btnCaptureDl_onClick(){
	
}

function txtActorType_onClick(){
	$.vActorType.setHeight('275dp');
}

function btnClosePicker_onClick(){
	$.vActorType.setHeight(0);
}

function pActorType_onChange(e){
	$.txtActorType.setValue(e.selectedValue[0]);
}

function btnDeleteActor_onClick(){
	$.mode = 'Delete';
	$.winActorDetail.close();
}

function winActorDetail_onClose(){
	$.actor.actorType = $.txtActorType.getValue();
	$.actor.plateNum = $.txtPlateNum.getValue();
	$.actor.plateState = $.txtPlateState.getValue();
	$.onCloseCb($.mode);
}

function tbOwnerDriver_onClick(e){
	if (e.index == 1){ // driver and owner not the same
		$.btnCaptureDlOwner.setHeight('40dp');
		$.btnCaptureDlOwner.setVisible(true);
	}else{
		$.btnCaptureDlOwner.setHeight(0);
		$.btnCaptureDlOwner.setVisible(false);
	}
}
 		                
function setupView(){
	$.txtActorType.setValue($.actor.actorType);
	switch ($.actor.actorType){
		case 'Driver':
			$.pActorType.setSelectedRow(0,0,true);
			break;
		case 'Pedestrian':
			$.pActorType.setSelectedRow(0,1,true);
			break;
		case 'Parked Vehicles':
			$.pActorType.setSelectedRow(0,2,true);
			break;
		case 'Pedal Cyclist':
			$.pActorType.setSelectedRow(0,3,true);
			break;
		case 'Other':
			$.pActorType.setSelectedRow(0,4,true);
			break;
	}
	$.txtPlateNum.setValue($.actor.plateNum);
	$.txtPlateState.setValue($.actor.plateState);
	if ($.mode == 'Add'){
		$.btnDeleteActor.setVisible(false);
	}
}

function btnCaptureDlOwner_onClick(){
	
}

setupView();

