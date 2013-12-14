var moment = require('moment');

var args = arguments[0] || {};
$.forms = args.forms;

function setupView(){
	// hack to set the color of the title 
	var titleLabel = Ti.UI.createLabel({
		text:'History',
		color:'#fff'
	});	
	$.winHistory.titleControl = titleLabel;
	
	for (var i=0; i < $.forms.length; i++){
		var row = historyTableRowFactory($.forms[i]);
		$.tvHistory.appendRow(row);
	}
}

function tvHistory_onClick(e){
	var form = $.forms[e.index];
	var historyDetailController = Alloy.createController('HistoryDetail',{
		form: form
	}); 
    Alloy.Globals.tabMain.open(historyDetailController.getView());	
}

function historyTableRowFactory(form){
	var row = Ti.UI.createTableViewRow({
		height: '60dp'
    });
    var lblStreet = Ti.UI.createLabel({
        text: form.Street,
    	color: 'white',
		top: '10dp',
		font:{
			fontSize: '13dp'
		},
		left: '10dp'
    });
    var lblDate = Ti.UI.createLabel({
        text: moment(form.CreatedDate).format('LLL'),
    	color: 'white',
		top: '28dp',
		font:{
			fontSize: '13dp'
		},
		left: '10dp'
    });
    row.add(lblStreet);
    row.add(lblDate);
    return row;
}

setupView();
