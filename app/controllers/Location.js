var serviceAgent = require('serviceAgent');

var sr1Form = {
	actors: []
};

function setRegion(evt) {
    //for the iOS platform, wait for the complete event to ensure the region is set
    Titanium.Geolocation.getCurrentPosition(function(e){
    	$.mapview.region = {
            latitude:e.coords.latitude, 
            longitude:e.coords.longitude,
            latitudeDelta:0.01,
             longitudeDelta:0.01
        };
        
        serviceAgent.getGoogleReverseGeo(e.coords.latitude, e.coords.longitude, function(res){
        	if (res.results.length > 0){
        		$.txtStreet.setValue(getStreetNumber(res.results[0].address_components) + ' ' + getStreet(res.results[0].address_components));
        		$.txtCity.setValue(getCity(res.results[0].address_components));
        		$.txtCounty.setValue(getCounty(res.results[0].address_components));	
        	}
		});
	});	
}

function getCounty(addrComponents){
	for (var i=0;i<addrComponents.length;i++){
		for (var j=0; j<addrComponents[i].types.length;j++){
			if (addrComponents[i].types[j] == 'administrative_area_level_2'){
				return addrComponents[i].long_name;
			}
		}
	}
}

function getCity(addrComponents){
	for (var i=0;i<addrComponents.length;i++){
		for (var j=0; j<addrComponents[i].types.length;j++){
			if (addrComponents[i].types[j] == 'locality'){
				return addrComponents[i].long_name;
			}
		}
	}
}

function getStreetNumber(addrComponents){
	for (var i=0;i<addrComponents.length;i++){
		for (var j=0; j<addrComponents[i].types.length;j++){
			if (addrComponents[i].types[j] == 'street_number'){
				return addrComponents[i].long_name;
			}
		}
	}
}

function getStreet(addrComponents){
	for (var i=0;i<addrComponents.length;i++){
		for (var j=0; j<addrComponents[i].types.length;j++){
			if (addrComponents[i].types[j] == 'route'){
				return addrComponents[i].long_name;
			}
		}
	}
}

function btnNext_onClick(){
	sr1Form.street = $.txtStreet.getValue();
	sr1Form.city = $.txtCity.getValue();
	sr1Form.county = $.txtCounty.getValue();
	var actorsController = Alloy.createController('Actors',{
		sr1Form: sr1Form
	});    
    Alloy.Globals.tabMain.open(actorsController.getView());
}
