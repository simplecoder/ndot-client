function Controller() {
    function btnCaptureVin_onClick() {}
    function btnCaptureDl_onClick() {}
    function txtActorType_onClick() {
        $.vActorType.setHeight("275dp");
    }
    function btnClosePicker_onClick() {
        $.vActorType.setHeight(0);
    }
    function pActorType_onChange(e) {
        $.txtActorType.setValue(e.selectedValue[0]);
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "ActorDetail";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.winActorDetail = Ti.UI.createWindow({
        barColor: "#000",
        id: "winActorDetail",
        title: "Actor Detail"
    });
    $.__views.winActorDetail && $.addTopLevelView($.__views.winActorDetail);
    $.__views.__alloyId0 = Ti.UI.createScrollView({
        backgroundColor: "#282828",
        layout: "vertical",
        id: "__alloyId0"
    });
    $.__views.winActorDetail.add($.__views.__alloyId0);
    $.__views.__alloyId1 = Ti.UI.createLabel({
        top: "15dp",
        left: "15dp",
        color: "#acacac",
        font: {
            fontSize: "16dp"
        },
        text: "Actor Type",
        id: "__alloyId1"
    });
    $.__views.__alloyId0.add($.__views.__alloyId1);
    $.__views.txtActorType = Ti.UI.createTextField({
        top: "-25dp",
        right: "15dp",
        backgroundColor: "#acacac",
        color: "#282828",
        borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
        borderRadius: "5dp",
        backgroundImage: "none",
        width: "200dp",
        height: "30dp",
        enabled: "false",
        id: "txtActorType"
    });
    $.__views.__alloyId0.add($.__views.txtActorType);
    txtActorType_onClick ? $.__views.txtActorType.addEventListener("click", txtActorType_onClick) : __defers["$.__views.txtActorType!click!txtActorType_onClick"] = true;
    $.__views.vActorType = Ti.UI.createView({
        top: "0dp",
        layout: "vertical",
        height: "0dp",
        id: "vActorType"
    });
    $.__views.__alloyId0.add($.__views.vActorType);
    $.__views.pActorType = Ti.UI.createPicker({
        top: "10dp",
        id: "pActorType",
        selectionIndicator: "true",
        useSpinner: "true"
    });
    $.__views.vActorType.add($.__views.pActorType);
    $.__views.column1 = Ti.UI.createPickerColumn({
        id: "column1"
    });
    $.__views.pActorType.add($.__views.column1);
    $.__views.__alloyId3 = Ti.UI.createPickerRow({
        title: "Driver",
        id: "__alloyId3"
    });
    $.__views.column1.addRow($.__views.__alloyId3);
    $.__views.__alloyId4 = Ti.UI.createPickerRow({
        title: "Pedestrian",
        id: "__alloyId4"
    });
    $.__views.column1.addRow($.__views.__alloyId4);
    $.__views.__alloyId5 = Ti.UI.createPickerRow({
        title: "Parked Vehicles",
        id: "__alloyId5"
    });
    $.__views.column1.addRow($.__views.__alloyId5);
    $.__views.__alloyId6 = Ti.UI.createPickerRow({
        title: "Pedal Cyclist",
        id: "__alloyId6"
    });
    $.__views.column1.addRow($.__views.__alloyId6);
    $.__views.__alloyId7 = Ti.UI.createPickerRow({
        title: "Other",
        id: "__alloyId7"
    });
    $.__views.column1.addRow($.__views.__alloyId7);
    pActorType_onChange ? $.__views.pActorType.addEventListener("change", pActorType_onChange) : __defers["$.__views.pActorType!change!pActorType_onChange"] = true;
    $.__views.btnClosePicker = Ti.UI.createButton({
        width: "320dp",
        height: "50dp",
        backgroundImage: "none",
        color: "white",
        font: {
            fontWeight: "bold"
        },
        backgroundGradient: {
            type: "linear",
            colors: [ {
                color: "#232432",
                position: 0
            }, {
                color: "#121212",
                position: 1
            } ]
        },
        top: "0dp",
        id: "btnClosePicker",
        title: "DONE"
    });
    $.__views.vActorType.add($.__views.btnClosePicker);
    btnClosePicker_onClick ? $.__views.btnClosePicker.addEventListener("click", btnClosePicker_onClick) : __defers["$.__views.btnClosePicker!click!btnClosePicker_onClick"] = true;
    $.__views.btnCaptureVin = Ti.UI.createButton({
        width: "140dp",
        height: "40dp",
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
        left: "15dp",
        top: "10dp",
        id: "btnCaptureVin",
        title: "CAPTURE VIN"
    });
    $.__views.__alloyId0.add($.__views.btnCaptureVin);
    btnCaptureVin_onClick ? $.__views.btnCaptureVin.addEventListener("click", btnCaptureVin_onClick) : __defers["$.__views.btnCaptureVin!click!btnCaptureVin_onClick"] = true;
    $.__views.btnCaptureDl = Ti.UI.createButton({
        width: "140dp",
        height: "40dp",
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
        right: "15dp",
        top: "-40dp",
        id: "btnCaptureDl",
        title: "CAPTURE DL"
    });
    $.__views.__alloyId0.add($.__views.btnCaptureDl);
    btnCaptureDl_onClick ? $.__views.btnCaptureDl.addEventListener("click", btnCaptureDl_onClick) : __defers["$.__views.btnCaptureDl!click!btnCaptureDl_onClick"] = true;
    $.__views.__alloyId8 = Ti.UI.createLabel({
        top: "15dp",
        left: "15dp",
        color: "#acacac",
        font: {
            fontSize: "16dp"
        },
        text: "Plate #",
        id: "__alloyId8"
    });
    $.__views.__alloyId0.add($.__views.__alloyId8);
    $.__views.txtPlateNum = Ti.UI.createTextField({
        top: "-25dp",
        right: "15dp",
        backgroundColor: "#acacac",
        color: "#282828",
        borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
        borderRadius: "5dp",
        backgroundImage: "none",
        width: "200dp",
        height: "30dp",
        id: "txtPlateNum"
    });
    $.__views.__alloyId0.add($.__views.txtPlateNum);
    $.__views.__alloyId9 = Ti.UI.createLabel({
        top: "15dp",
        left: "15dp",
        color: "#acacac",
        font: {
            fontSize: "16dp"
        },
        text: "Plate State",
        id: "__alloyId9"
    });
    $.__views.__alloyId0.add($.__views.__alloyId9);
    $.__views.txtPlateState = Ti.UI.createTextField({
        top: "-25dp",
        right: "15dp",
        backgroundColor: "#acacac",
        color: "#282828",
        borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
        borderRadius: "5dp",
        backgroundImage: "none",
        width: "200dp",
        height: "30dp",
        id: "txtPlateState",
        value: "NV"
    });
    $.__views.__alloyId0.add($.__views.txtPlateState);
    $.__views.__alloyId10 = Ti.UI.createLabel({
        top: "15dp",
        left: "15dp",
        color: "#acacac",
        font: {
            fontSize: "16dp"
        },
        text: "Owner same as driver?",
        id: "__alloyId10"
    });
    $.__views.__alloyId0.add($.__views.__alloyId10);
    var __alloyId12 = [];
    var __alloyId15 = {
        title: "YES",
        ns: "Alloy.Abstract"
    };
    __alloyId12.push(__alloyId15);
    var __alloyId16 = {
        title: "NO",
        ns: "Alloy.Abstract"
    };
    __alloyId12.push(__alloyId16);
    $.__views.tbOwnerDriver = Ti.UI.iOS.createTabbedBar({
        index: 0,
        backgroundColor: "#363636",
        top: "-24dp",
        right: "20dp",
        height: "25dp",
        style: Titanium.UI.iPhone.SystemButtonStyle.BAR,
        font: {
            fontSize: "14dp"
        },
        labels: __alloyId12,
        id: "tbOwnerDriver"
    });
    $.__views.__alloyId0.add($.__views.tbOwnerDriver);
    exports.destroy = function() {};
    _.extend($, $.__views);
    __defers["$.__views.txtActorType!click!txtActorType_onClick"] && $.__views.txtActorType.addEventListener("click", txtActorType_onClick);
    __defers["$.__views.pActorType!change!pActorType_onChange"] && $.__views.pActorType.addEventListener("change", pActorType_onChange);
    __defers["$.__views.btnClosePicker!click!btnClosePicker_onClick"] && $.__views.btnClosePicker.addEventListener("click", btnClosePicker_onClick);
    __defers["$.__views.btnCaptureVin!click!btnCaptureVin_onClick"] && $.__views.btnCaptureVin.addEventListener("click", btnCaptureVin_onClick);
    __defers["$.__views.btnCaptureDl!click!btnCaptureDl_onClick"] && $.__views.btnCaptureDl.addEventListener("click", btnCaptureDl_onClick);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;