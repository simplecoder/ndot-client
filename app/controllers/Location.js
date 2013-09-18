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
        		$.txtStreet.setValue(res.results[0].address_components[0].long_name + ' ' + res.results[0].address_components[1].short_name);
        		$.txtCity.setValue(res.results[0].address_components[2].long_name);
        		$.txtCounty.setValue(res.results[0].address_components[3].long_name);	
        	}
		});
	});	
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
