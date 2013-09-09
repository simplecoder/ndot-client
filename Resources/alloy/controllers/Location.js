function Controller() {
    function setRegion() {}
    function btnNext_onClick() {
        var actorsController = Alloy.createController("Actors");
        Alloy.Globals.tabMain.open(actorsController.getView());
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "Location";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.winLocation = Ti.UI.createWindow({
        backgroundColor: "#282828",
        layout: "vertical",
        navBarHidden: "false",
        barColor: "#000",
        id: "winLocation",
        title: "Location"
    });
    $.__views.winLocation && $.addTopLevelView($.__views.winLocation);
    $.__views.__alloyId22 = Ti.UI.createScrollView({
        layout: "vertical",
        id: "__alloyId22"
    });
    $.__views.winLocation.add($.__views.__alloyId22);
    var __alloyId23 = [];
    $.__views.mapview = Ti.Map.createView({
        annotations: __alloyId23,
        id: "mapview",
        ns: Ti.Map,
        width: "290dp",
        height: "250dp",
        top: "10dp",
        animate: "true",
        regionFit: "true",
        userLocation: "true",
        mapType: Ti.Map.STANDARD_TYPE
    });
    $.__views.__alloyId22.add($.__views.mapview);
    setRegion ? $.__views.mapview.addEventListener("complete", setRegion) : __defers["$.__views.mapview!complete!setRegion"] = true;
    $.__views.__alloyId24 = Ti.UI.createLabel({
        color: "#acacac",
        font: {
            fontSize: "16dp"
        },
        top: "15dp",
        left: "15dp",
        text: "Street",
        id: "__alloyId24"
    });
    $.__views.__alloyId22.add($.__views.__alloyId24);
    $.__views.txtStreet = Ti.UI.createTextField({
        top: "-25dp",
        right: "15dp",
        backgroundColor: "#acacac",
        color: "#282828",
        borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
        borderRadius: "5dp",
        backgroundImage: "none",
        width: "220dp",
        height: "30dp",
        id: "txtStreet"
    });
    $.__views.__alloyId22.add($.__views.txtStreet);
    $.__views.__alloyId25 = Ti.UI.createLabel({
        color: "#acacac",
        font: {
            fontSize: "16dp"
        },
        top: "15dp",
        left: "15dp",
        text: "City",
        id: "__alloyId25"
    });
    $.__views.__alloyId22.add($.__views.__alloyId25);
    $.__views.txtCity = Ti.UI.createTextField({
        top: "-25dp",
        right: "15dp",
        backgroundColor: "#acacac",
        color: "#282828",
        borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
        borderRadius: "5dp",
        backgroundImage: "none",
        width: "220dp",
        height: "30dp",
        id: "txtCity"
    });
    $.__views.__alloyId22.add($.__views.txtCity);
    $.__views.__alloyId26 = Ti.UI.createLabel({
        color: "#acacac",
        font: {
            fontSize: "16dp"
        },
        top: "15dp",
        left: "15dp",
        text: "County",
        id: "__alloyId26"
    });
    $.__views.__alloyId22.add($.__views.__alloyId26);
    $.__views.txtCounty = Ti.UI.createTextField({
        top: "-25dp",
        right: "15dp",
        backgroundColor: "#acacac",
        color: "#282828",
        borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
        borderRadius: "5dp",
        backgroundImage: "none",
        width: "220dp",
        height: "30dp",
        id: "txtCounty"
    });
    $.__views.__alloyId22.add($.__views.txtCounty);
    $.__views.btnNext = Ti.UI.createLabel({
        color: "#acacac",
        font: {
            fontSize: "16dp"
        },
        top: "20dp",
        right: "15dp",
        id: "btnNext",
        text: "Next >>"
    });
    $.__views.__alloyId22.add($.__views.btnNext);
    btnNext_onClick ? $.__views.btnNext.addEventListener("click", btnNext_onClick) : __defers["$.__views.btnNext!click!btnNext_onClick"] = true;
    $.__views.__alloyId27 = Ti.UI.createLabel({
        color: "#acacac",
        font: {
            fontSize: "16dp"
        },
        height: "20dp",
        id: "__alloyId27"
    });
    $.__views.__alloyId22.add($.__views.__alloyId27);
    exports.destroy = function() {};
    _.extend($, $.__views);
    __defers["$.__views.mapview!complete!setRegion"] && $.__views.mapview.addEventListener("complete", setRegion);
    __defers["$.__views.btnNext!click!btnNext_onClick"] && $.__views.btnNext.addEventListener("click", btnNext_onClick);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;