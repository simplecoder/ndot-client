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
	var actorsController = Alloy.createController('Actors');    
    Alloy.Globals.tabMain.open(actorsController.getView());
}
