var sr1Form = {
	actors: []
};

function setRegion(evt) {
    // For the iOS platform, wait for the complete event to ensure the region is set
    // if (OS_IOS) {
        // $.mapview.region = {
            // latitude:37.390749, longitude:-122.081651,
            // latitudeDelta:0.01, longitudeDelta:0.01
        // };
    // }
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
