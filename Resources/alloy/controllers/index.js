function Controller() {
    function btnBeginSr1_onClick() {
        var locationController = Alloy.createController("Location");
        $.tabMain.open(locationController.getView());
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
        backgroundColor: "#282828",
        id: "winHome",
        tabBarHidden: "true",
        navBarHidden: "true"
    });
    $.__views.__alloyId19 = Ti.UI.createView({
        id: "__alloyId19"
    });
    $.__views.winHome.add($.__views.__alloyId19);
    $.__views.__alloyId20 = Ti.UI.createImageView({
        image: "/images/ndot-logo.png",
        width: "170dp",
        height: "79dp",
        left: "75dp",
        top: "60dp",
        id: "__alloyId20"
    });
    $.__views.__alloyId19.add($.__views.__alloyId20);
    $.__views.__alloyId21 = Ti.UI.createButton({
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
        id: "__alloyId21"
    });
    $.__views.__alloyId19.add($.__views.__alloyId21);
    btnBeginSr1_onClick ? $.__views.__alloyId21.addEventListener("click", btnBeginSr1_onClick) : __defers["$.__views.__alloyId21!click!btnBeginSr1_onClick"] = true;
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
    $.tgMain.open();
    __defers["$.__views.__alloyId21!click!btnBeginSr1_onClick"] && $.__views.__alloyId21.addEventListener("click", btnBeginSr1_onClick);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;