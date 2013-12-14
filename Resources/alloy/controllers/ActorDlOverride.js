function Controller() {
    function winActorDlOverride_onClose() {
        $.actor.dlOverride = true;
        $.actor.firstName = $.txtFirstName.getValue();
        $.actor.middleName = $.txtMiddleName.getValue();
        $.actor.lastName = $.txtLastName.getValue();
        $.actor.street = $.txtStreet.getValue();
        $.actor.city = $.txtCity.getValue();
        $.actor.state = $.txtState.getValue();
        $.actor.zip = $.txtState.getValue();
        $.actor.dob = $.txtDob.getValue();
    }
    function setupView() {
        var titleLabel = Ti.UI.createLabel({
            text: "Override",
            color: "#fff"
        });
        $.winActorDlOverride.titleControl = titleLabel;
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "ActorDlOverride";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.winActorDlOverride = Ti.UI.createWindow({
        statusBarStyle: Titanium.UI.iPhone.StatusBar.LIGHT_CONTENT,
        navBarHidden: "false",
        barColor: "#111",
        id: "winActorDlOverride",
        title: "Override"
    });
    $.__views.winActorDlOverride && $.addTopLevelView($.__views.winActorDlOverride);
    winActorDlOverride_onClose ? $.__views.winActorDlOverride.addEventListener("close", winActorDlOverride_onClose) : __defers["$.__views.winActorDlOverride!close!winActorDlOverride_onClose"] = true;
    $.__views.__alloyId15 = Ti.UI.createScrollView({
        backgroundImage: "images/dark_fish_skin.png",
        backgroundRepeat: "true",
        layout: "vertical",
        id: "__alloyId15"
    });
    $.__views.winActorDlOverride.add($.__views.__alloyId15);
    $.__views.__alloyId16 = Ti.UI.createLabel({
        top: "15dp",
        left: "15dp",
        color: "#acacac",
        font: {
            fontSize: "16dp"
        },
        text: "First Name",
        id: "__alloyId16"
    });
    $.__views.__alloyId15.add($.__views.__alloyId16);
    $.__views.txtFirstName = Ti.UI.createTextField({
        top: "-25dp",
        right: "15dp",
        backgroundColor: "#acacac",
        color: "#282828",
        borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
        borderRadius: "5dp",
        backgroundImage: "none",
        width: "190dp",
        height: "30dp",
        id: "txtFirstName"
    });
    $.__views.__alloyId15.add($.__views.txtFirstName);
    $.__views.__alloyId17 = Ti.UI.createLabel({
        top: "15dp",
        left: "15dp",
        color: "#acacac",
        font: {
            fontSize: "16dp"
        },
        text: "Middle Name",
        id: "__alloyId17"
    });
    $.__views.__alloyId15.add($.__views.__alloyId17);
    $.__views.txtMiddleName = Ti.UI.createTextField({
        top: "-25dp",
        right: "15dp",
        backgroundColor: "#acacac",
        color: "#282828",
        borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
        borderRadius: "5dp",
        backgroundImage: "none",
        width: "190dp",
        height: "30dp",
        id: "txtMiddleName"
    });
    $.__views.__alloyId15.add($.__views.txtMiddleName);
    $.__views.__alloyId18 = Ti.UI.createLabel({
        top: "15dp",
        left: "15dp",
        color: "#acacac",
        font: {
            fontSize: "16dp"
        },
        text: "Last Name",
        id: "__alloyId18"
    });
    $.__views.__alloyId15.add($.__views.__alloyId18);
    $.__views.txtLastName = Ti.UI.createTextField({
        top: "-25dp",
        right: "15dp",
        backgroundColor: "#acacac",
        color: "#282828",
        borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
        borderRadius: "5dp",
        backgroundImage: "none",
        width: "190dp",
        height: "30dp",
        id: "txtLastName"
    });
    $.__views.__alloyId15.add($.__views.txtLastName);
    $.__views.__alloyId19 = Ti.UI.createLabel({
        top: "15dp",
        left: "15dp",
        color: "#acacac",
        font: {
            fontSize: "16dp"
        },
        text: "Street",
        id: "__alloyId19"
    });
    $.__views.__alloyId15.add($.__views.__alloyId19);
    $.__views.txtStreet = Ti.UI.createTextField({
        top: "-25dp",
        right: "15dp",
        backgroundColor: "#acacac",
        color: "#282828",
        borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
        borderRadius: "5dp",
        backgroundImage: "none",
        width: "190dp",
        height: "30dp",
        id: "txtStreet"
    });
    $.__views.__alloyId15.add($.__views.txtStreet);
    $.__views.__alloyId20 = Ti.UI.createLabel({
        top: "15dp",
        left: "15dp",
        color: "#acacac",
        font: {
            fontSize: "16dp"
        },
        text: "City",
        id: "__alloyId20"
    });
    $.__views.__alloyId15.add($.__views.__alloyId20);
    $.__views.txtCity = Ti.UI.createTextField({
        top: "-25dp",
        right: "15dp",
        backgroundColor: "#acacac",
        color: "#282828",
        borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
        borderRadius: "5dp",
        backgroundImage: "none",
        width: "190dp",
        height: "30dp",
        id: "txtCity"
    });
    $.__views.__alloyId15.add($.__views.txtCity);
    $.__views.__alloyId21 = Ti.UI.createLabel({
        top: "15dp",
        left: "15dp",
        color: "#acacac",
        font: {
            fontSize: "16dp"
        },
        text: "State",
        id: "__alloyId21"
    });
    $.__views.__alloyId15.add($.__views.__alloyId21);
    $.__views.txtState = Ti.UI.createTextField({
        top: "-25dp",
        right: "15dp",
        backgroundColor: "#acacac",
        color: "#282828",
        borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
        borderRadius: "5dp",
        backgroundImage: "none",
        width: "190dp",
        height: "30dp",
        id: "txtState"
    });
    $.__views.__alloyId15.add($.__views.txtState);
    $.__views.__alloyId22 = Ti.UI.createLabel({
        top: "15dp",
        left: "15dp",
        color: "#acacac",
        font: {
            fontSize: "16dp"
        },
        text: "Zip",
        id: "__alloyId22"
    });
    $.__views.__alloyId15.add($.__views.__alloyId22);
    $.__views.txtZip = Ti.UI.createTextField({
        top: "-25dp",
        right: "15dp",
        backgroundColor: "#acacac",
        color: "#282828",
        borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
        borderRadius: "5dp",
        backgroundImage: "none",
        width: "190dp",
        height: "30dp",
        id: "txtZip"
    });
    $.__views.__alloyId15.add($.__views.txtZip);
    $.__views.__alloyId23 = Ti.UI.createLabel({
        top: "15dp",
        left: "15dp",
        color: "#acacac",
        font: {
            fontSize: "16dp"
        },
        text: "DOB",
        id: "__alloyId23"
    });
    $.__views.__alloyId15.add($.__views.__alloyId23);
    $.__views.txtDob = Ti.UI.createTextField({
        top: "-25dp",
        right: "15dp",
        backgroundColor: "#acacac",
        color: "#282828",
        borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
        borderRadius: "5dp",
        backgroundImage: "none",
        width: "190dp",
        height: "30dp",
        id: "txtDob"
    });
    $.__views.__alloyId15.add($.__views.txtDob);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var args = arguments[0] || {};
    $.actor = args.actor;
    setupView();
    __defers["$.__views.winActorDlOverride!close!winActorDlOverride_onClose"] && $.__views.winActorDlOverride.addEventListener("close", winActorDlOverride_onClose);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;