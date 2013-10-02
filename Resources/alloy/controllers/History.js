function Controller() {
    function setupView() {
        for (var i = 0; $.forms.length > i; i++) {
            var row = historyTableRowFactory($.forms[i]);
            $.tvHistory.appendRow(row);
        }
    }
    function tvHistory_onClick(e) {
        var form = $.forms[e.index];
        var historyDetailController = Alloy.createController("HistoryDetail", {
            form: form
        });
        Alloy.Globals.tabMain.open(historyDetailController.getView());
    }
    function historyTableRowFactory(form) {
        var row = Ti.UI.createTableViewRow({
            height: "60dp"
        });
        var lblStreet = Ti.UI.createLabel({
            text: form.Street,
            color: "white",
            top: "10dp",
            font: {
                fontSize: "13dp"
            },
            left: "10dp"
        });
        var lblDate = Ti.UI.createLabel({
            text: moment($.form.CreatedDate).format("L"),
            color: "white",
            top: "28dp",
            font: {
                fontSize: "13dp"
            },
            left: "10dp"
        });
        row.add(lblStreet);
        row.add(lblDate);
        return row;
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "History";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.winHistory = Ti.UI.createWindow({
        backgroundImage: "images/dark_fish_skin.png",
        backgroundRepeat: "true",
        navBarHidden: "false",
        barColor: "#111",
        id: "winHistory",
        title: "History"
    });
    $.__views.winHistory && $.addTopLevelView($.__views.winHistory);
    $.__views.tvHistory = Ti.UI.createTableView({
        top: "0dp",
        backgroundColor: "#282828",
        separatorColor: "#363636",
        id: "tvHistory"
    });
    $.__views.winHistory.add($.__views.tvHistory);
    tvHistory_onClick ? $.__views.tvHistory.addEventListener("click", tvHistory_onClick) : __defers["$.__views.tvHistory!click!tvHistory_onClick"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    var moment = require("moment");
    var args = arguments[0] || {};
    $.forms = args.forms;
    setupView();
    __defers["$.__views.tvHistory!click!tvHistory_onClick"] && $.__views.tvHistory.addEventListener("click", tvHistory_onClick);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;