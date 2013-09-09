Alloy.Globals.tgMain = $.tgMain;
Alloy.Globals.tabMain = $.tabMain;

function btnBeginSr1_onClick(e){
	var locationController = Alloy.createController('Location');    
    $.tabMain.open(locationController.getView());
}

$.tgMain.open();
