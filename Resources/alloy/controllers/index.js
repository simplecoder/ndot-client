function Controller() {
    function btnBeginSr1_onClick() {
        var locationController = Alloy.createController("Location");
        $.tabMain.open(locationController.getView());
    }
    function btnHistory_onClick() {
        serviceAgent.getSr1Form(loadHistoryCb);
    }
    function loadHistoryCb(res) {
        var historyController = Alloy.createController("History", {
            forms: res
        });
        $.tabMain.open(historyController.getView());
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "index";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.tgMain = Ti.UI.createTabGroup({
        id: "tgMain"
    });
    $.__views.winHome = Ti.UI.createWindow({
        statusBarStyle: Titanium.UI.iPhone.StatusBar.LIGHT_CONTENT,
        backgroundImage: "images/dark_fish_skin.png",
        backgroundRepeat: "true",
        id: "winHome",
        tabBarHidden: "true",
        navBarHidden: "true"
    });
    $.__views.__alloyId26 = Ti.UI.createView({
        id: "__alloyId26"
    });
    $.__views.winHome.add($.__views.__alloyId26);
    $.__views.__alloyId27 = Ti.UI.createImageView({
        image: "/images/ndot-logo.png",
        width: "170dp",
        height: "79dp",
        left: "75dp",
        top: "60dp",
        id: "__alloyId27"
    });
    $.__views.__alloyId26.add($.__views.__alloyId27);
    $.__views.__alloyId28 = Ti.UI.createButton({
        width: "250dp",
        height: "45dp",
        left: "35dp",
        top: "180dp",
        backgroundImage: "none",
        color: "white",
        font: {
            fontWeight: "bold"
        },
        backgroundGradient: {
            type: "linear",
            colors: [ {
                color: "#009848",
                position: 0
            }, {
                color: "#00853f",
                position: 1
            } ]
        },
        title: "BEGIN NEW SR1 FORM",
        id: "__alloyId28"
    });
    $.__views.__alloyId26.add($.__views.__alloyId28);
    btnBeginSr1_onClick ? $.__views.__alloyId28.addEventListener("click", btnBeginSr1_onClick) : __defers["$.__views.__alloyId28!click!btnBeginSr1_onClick"] = true;
    $.__views.btnHistory = Ti.UI.createButton({
        width: "250dp",
        height: "45dp",
        left: "35dp",
        top: "240dp",
        backgroundImage: "none",
        color: "white",
        font: {
            fontWeight: "bold"
        },
        backgroundGradient: {
            type: "linear",
            colors: [ {
                color: "#009848",
                position: 0
            }, {
                color: "#00853f",
                position: 1
            } ]
        },
        id: "btnHistory",
        title: "HISTORY"
    });
    $.__views.__alloyId26.add($.__views.btnHistory);
    btnHistory_onClick ? $.__views.btnHistory.addEventListener("click", btnHistory_onClick) : __defers["$.__views.btnHistory!click!btnHistory_onClick"] = true;
    $.__views.tabMain = Ti.UI.createTab({
        window: $.__views.winHome,
        id: "tabMain"
    });
    $.__views.tgMain.addTab($.__views.tabMain);
    $.__views.tgMain && $.addTopLevelView($.__views.tgMain);
    exports.destroy = function() {};
    _.extend($, $.__views);
    Alloy.Globals.tgMain = $.tgMain;
    Alloy.Globals.tabMain = $.tabMain;
    var serviceAgent = require("serviceAgent");
    $.tgMain.open();
    __defers["$.__views.__alloyId28!click!btnBeginSr1_onClick"] && $.__views.__alloyId28.addEventListener("click", btnBeginSr1_onClick);
    __defers["$.__views.btnHistory!click!btnHistory_onClick"] && $.__views.btnHistory.addEventListener("click", btnHistory_onClick);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;