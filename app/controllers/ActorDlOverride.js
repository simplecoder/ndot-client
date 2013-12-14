
var args = arguments[0] || {};
$.actor = args.actor;

function winActorDlOverride_onClose(){
	$.actor.dlOverride = true;
	$.actor.firstName = $.txtFirstName.getValue();
	$.actor.middleName = $.txtMiddleName.getValue();
	$.actor.lastName = $.txtLastName.getValue();
	$.actor.street = $.txtStreet.getValue();
	$.actor.city = $.txtCity.getValue();
	$.actor.state = $.txtState.getValue();
	$.actor.zip = $.txtState.getValue();
	$.actor.dob = $.txtDob.getValue();
}

function setupView(){
	// hack to set the color of the title 
	var titleLabel = Ti.UI.createLabel({
		text:'Override',
		color:'#fff'
	});	
	$.winActorDlOverride.titleControl = titleLabel;
}

setupView();
