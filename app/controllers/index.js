Alloy.Globals.tgMain = $.tgMain;
Alloy.Globals.tabMain = $.tabMain;

var serviceAgent = require('serviceAgent');


function btnBeginSr1_onClick(e){
	var locationController = Alloy.createController('Location');    
    $.tabMain.open(locationController.getView());
}

function btnHistory_onClick(e){
	serviceAgent.getSr1Form(loadHistoryCb);
}

function loadHistoryCb(res, status){
	var historyController = Alloy.createController('History',{
		forms: res
	});    
    $.tabMain.open(historyController.getView());
}

$.tgMain.open();
