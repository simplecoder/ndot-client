function Controller() {
    function setRegion() {
        Titanium.Geolocation.getCurrentPosition(function(e) {
            $.mapview.region = {
                latitude: e.coords.latitude,
                longitude: e.coords.longitude,
                latitudeDelta: .01,
                longitudeDelta: .01
            };
            serviceAgent.getGoogleReverseGeo(e.coords.latitude, e.coords.longitude, function(res) {
                if (res.results.length > 0) {
                    $.txtStreet.setValue(getStreetNumber(res.results[0].address_components) + " " + getStreet(res.results[0].address_components));
                    $.txtCity.setValue(getCity(res.results[0].address_components));
                    $.txtCounty.setValue(getCounty(res.results[0].address_components));
                }
            });
        });
    }
    function getCounty(addrComponents) {
        for (var i = 0; addrComponents.length > i; i++) for (var j = 0; addrComponents[i].types.length > j; j++) if ("administrative_area_level_2" == addrComponents[i].types[j]) return addrComponents[i].long_name;
    }
    function getCity(addrComponents) {
        for (var i = 0; addrComponents.length > i; i++) for (var j = 0; addrComponents[i].types.length > j; j++) if ("locality" == addrComponents[i].types[j]) return addrComponents[i].long_name;
    }
    function getStreetNumber(addrComponents) {
        for (var i = 0; addrComponents.length > i; i++) for (var j = 0; addrComponents[i].types.length > j; j++) if ("street_number" == addrComponents[i].types[j]) return addrComponents[i].long_name;
    }
    function getStreet(addrComponents) {
        for (var i = 0; addrComponents.length > i; i++) for (var j = 0; addrComponents[i].types.length > j; j++) if ("route" == addrComponents[i].types[j]) return addrComponents[i].long_name;
    }
    function btnNext_onClick() {
        sr1Form.street = $.txtStreet.getValue();
        sr1Form.city = $.txtCity.getValue();
        sr1Form.county = $.txtCounty.getValue();
        var actorsController = Alloy.createController("Actors", {
            sr1Form: sr1Form
        });
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
        backgroundImage: "images/dark_fish_skin.png",
        backgroundRepeat: "true",
        layout: "vertical",
        navBarHidden: "false",
        barColor: "#111",
        id: "winLocation",
        title: "Location"
    });
    $.__views.winLocation && $.addTopLevelView($.__views.winLocation);
    $.__views.__alloyId20 = Ti.UI.createScrollView({
        layout: "vertical",
        id: "__alloyId20"
    });
    $.__views.winLocation.add($.__views.__alloyId20);
    var __alloyId21 = [];
    $.__views.mapview = Ti.Map.createView({
        annotations: __alloyId21,
        id: "mapview",
        ns: Ti.Map,
        width: "320dp",
        height: "260dp",
        top: "0dp",
        animate: "true",
        regionFit: "true",
        userLocation: "true",
        mapType: Ti.Map.STANDARD_TYPE
    });
    $.__views.__alloyId20.add($.__views.mapview);
    setRegion ? $.__views.mapview.addEventListener("complete", setRegion) : __defers["$.__views.mapview!complete!setRegion"] = true;
    $.__views.__alloyId22 = Ti.UI.createLabel({
        color: "#acacac",
        font: {
            fontSize: "16dp"
        },
        top: "15dp",
        left: "15dp",
        text: "Street",
        id: "__alloyId22"
    });
    $.__views.__alloyId20.add($.__views.__alloyId22);
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
    $.__views.__alloyId20.add($.__views.txtStreet);
    $.__views.__alloyId23 = Ti.UI.createLabel({
        color: "#acacac",
        font: {
            fontSize: "16dp"
        },
        top: "15dp",
        left: "15dp",
        text: "City",
        id: "__alloyId23"
    });
    $.__views.__alloyId20.add($.__views.__alloyId23);
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
    $.__views.__alloyId20.add($.__views.txtCity);
    $.__views.__alloyId24 = Ti.UI.createLabel({
        color: "#acacac",
        font: {
            fontSize: "16dp"
        },
        top: "15dp",
        left: "15dp",
        text: "County",
        id: "__alloyId24"
    });
    $.__views.__alloyId20.add($.__views.__alloyId24);
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
    $.__views.__alloyId20.add($.__views.txtCounty);
    $.__views.btnNext = Ti.UI.createLabel({
        color: "#acacac",
        font: {
            fontSize: "16dp"
        },
        top: "15dp",
        right: "15dp",
        id: "btnNext",
        text: "Next >>"
    });
    $.__views.__alloyId20.add($.__views.btnNext);
    btnNext_onClick ? $.__views.btnNext.addEventListener("click", btnNext_onClick) : __defers["$.__views.btnNext!click!btnNext_onClick"] = true;
    $.__views.__alloyId25 = Ti.UI.createLabel({
        color: "#acacac",
        font: {
            fontSize: "16dp"
        },
        height: "20dp",
        id: "__alloyId25"
    });
    $.__views.__alloyId20.add($.__views.__alloyId25);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var serviceAgent = require("serviceAgent");
    var sr1Form = {
        actors: []
    };
    __defers["$.__views.mapview!complete!setRegion"] && $.__views.mapview.addEventListener("complete", setRegion);
    __defers["$.__views.btnNext!click!btnNext_onClick"] && $.__views.btnNext.addEventListener("click", btnNext_onClick);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;