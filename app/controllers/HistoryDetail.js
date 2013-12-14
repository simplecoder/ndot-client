var moment = require('moment');

var args = arguments[0] || {};
$.form = args.form;

function getLabel(left){
	return Ti.UI.createLabel({
		left: left,
		top: '10dp',
		color: '#acacac',
		font:{
			fontSize: '16dp'
		},
	});
}

function addLabel(left, text){
	var lbl = getLabel(left);
	lbl.setText(text);
	$.svMain.add(lbl);
}

function setupView(){
	// hack to set the color of the title 
	var titleLabel = Ti.UI.createLabel({
		text:'History Detail',
		color:'#fff'
	});	
	$.winHistoryDetail.titleControl = titleLabel;
	
	
	$.lblStreet.setText('Street: ' + $.form.Street);
	$.lblCity.setText('City: ' + $.form.City);
	$.lblCounty.setText('County: ' + $.form.County);
	$.lblDate.setText('Date: ' + moment($.form.CreatedDate).format('L'));
	
	if ($.form.Actors == null)
		return;
		
	for(var i = 0; i< $.form.Actors.length; i++){
		var actor = $.form.Actors[i];
		addLabel('10dp','Actor ' + i);
		addLabel('20dp','Actor Type: ' + actor.Type);
		addLabel('30dp','Driver Info');
		addLabel('40dp','First Name: ' + actor.Driver.FirstName);
		addLabel('40dp','Middle Name: ' + actor.Driver.MiddleName);
		addLabel('40dp','Last Name: ' + actor.Driver.LastName);
		addLabel('40dp','Street: ' + actor.Driver.Street);
		addLabel('40dp','City: ' + actor.Driver.City);
		addLabel('40dp','State: ' + actor.Driver.State);
		addLabel('40dp','Zip: ' + actor.Driver.Zip);
		addLabel('40dp','DL #: ' + actor.Driver.DriverLicenseNumber);
		addLabel('40dp','DL State: ' + actor.Driver.DriverLicenseState);
		addLabel('40dp','DOB: ' + moment(actor.Driver.Dob).format('L'));
		if (actor.Type == 'Driver' || actor.Type == 'Parked Vehicles'){
			addLabel('40dp','License #: ' + actor.Driver.LicensePlateNumber);
			addLabel('40dp','License State: ' + actor.Driver.LicensePlateState);
			addLabel('40dp','Make: ' + actor.Driver.Make);
			addLabel('40dp','Year: ' + actor.Driver.Year);
			addLabel('40dp','VIN: ' + actor.Driver.Vin);	
		}
		if (actor.OwnerSameAsDriver == false){
			addLabel('30dp','Owner Info');
			addLabel('40dp','First Name: ' + actor.Owner.FirstName);
			addLabel('40dp','Middle Name: ' + actor.Owner.MiddleName);
			addLabel('40dp','Last Name: ' + actor.Owner.LastName);
			addLabel('40dp','Street: ' + actor.Owner.Street);
			addLabel('40dp','City: ' + actor.Owner.City);
			addLabel('40dp','State: ' + actor.Owner.State);
			addLabel('40dp','Zip: ' + actor.Owner.Zip);
			addLabel('40dp','DL #: ' + actor.Owner.DriverLicenseNumber);
			addLabel('40dp','DL State: ' + actor.Owner.DriverLicenseState);
			addLabel('40dp','Dob: ' + moment(actor.Owner.Dob).format('L'));
		}
	}
}

setupView();
