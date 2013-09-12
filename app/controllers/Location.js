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
        Titanium.Geolocation.reverseGeocoder(e.coords.latitude,e.coords.longitude,function(e2){
        	if (e2.places.length > 0){
        		$.txtCity.setValue(e2.places[0].city);
        		$.txtStreet.setValue(e2.places[0].street);
        		serviceAgent.getCounty(e.coords.latitude, e.coords.longitude, function(res){
        			$.txtCounty.setValue(res);
        		});
        	}
        })
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
