function Controller() {
    function btnCaptureVin_onClick() {}
    function btnCaptureDl_onClick() {
        var cameraOptions = getCameraOptions();
        cameraOptions.success = function(e) {
            var resizedImage = e.media.imageAsResized(e.media.width / $.imageScaleFactor, e.media.height / $.imageScaleFactor);
            $.actor.dlBarcode = Ti.Utils.base64encode(resizedImage).toString();
        };
        Ti.Media.isCameraSupported ? Ti.Media.showCamera(cameraOptions) : Ti.Media.openPhotoGallery(cameraOptions);
    }
    function btnCaptureDlOwner_onClick() {
        var cameraOptions = getCameraOptions();
        cameraOptions.success = function(e) {
            $.actor.dlBarcodeOwner = Ti.Utils.base64encode(e.media).toString();
        };
        Ti.Media.isCameraSupported ? Ti.Media.showCamera(cameraOptions) : Ti.Media.openPhotoGallery(cameraOptions);
    }
    function getCameraOptions() {
        var cameraOptions = {
            cancel: function() {},
            error: function(error) {
                var a = Ti.UI.createAlertDialog({
                    title: "Camera Error"
                });
                error.code == Ti.Media.NO_CAMERA ? a.setMessage("MISSING CAMERA") : a.setMessage("Unexpected error: " + error.code);
                a.show();
            },
            saveToPhotoGallery: true,
            allowEditing: true,
            mediaTypes: [ Ti.Media.MEDIA_TYPE_PHOTO ]
        };
        return cameraOptions;
    }
    function txtActorType_onClick() {
        $.vActorType.setHeight("275dp");
    }
    function btnClosePicker_onClick() {
        $.vActorType.setHeight(0);
    }
    function pActorType_onChange(e) {
        $.txtActorType.setValue(e.selectedValue[0]);
    }
    function btnDeleteActor_onClick() {
        $.mode = "Delete";
        $.winActorDetail.close();
    }
    function winActorDetail_onClose() {
        $.actor.actorType = $.txtActorType.getValue();
        $.actor.plateNum = $.txtPlateNum.getValue();
        $.actor.plateState = $.txtPlateState.getValue();
        $.onCloseCb($.mode);
    }
    function tbOwnerDriver_onClick(e) {
        if (1 == e.index) {
            $.btnCaptureDlOwner.setHeight("40dp");
            $.btnCaptureDlOwner.setVisible(true);
        } else {
            $.btnCaptureDlOwner.setHeight(0);
            $.btnCaptureDlOwner.setVisible(false);
        }
    }
    function setupView() {
        $.txtActorType.setValue($.actor.actorType);
        switch ($.actor.actorType) {
          case "Driver":
            $.pActorType.setSelectedRow(0, 0, true);
            break;

          case "Pedestrian":
            $.pActorType.setSelectedRow(0, 1, true);
            break;

          case "Parked Vehicles":
            $.pActorType.setSelectedRow(0, 2, true);
            break;

          case "Pedal Cyclist":
            $.pActorType.setSelectedRow(0, 3, true);
            break;

          case "Other":
            $.pActorType.setSelectedRow(0, 4, true);
        }
        $.txtPlateNum.setValue($.actor.plateNum);
        $.txtPlateState.setValue($.actor.plateState);
        "Add" == $.mode && $.btnDeleteActor.setVisible(false);
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
        barColor: "#111",
        id: "winActorDetail",
        title: "Actor Detail"
    });
    $.__views.winActorDetail && $.addTopLevelView($.__views.winActorDetail);
    winActorDetail_onClose ? $.__views.winActorDetail.addEventListener("close", winActorDetail_onClose) : __defers["$.__views.winActorDetail!close!winActorDetail_onClose"] = true;
    $.__views.__alloyId0 = Ti.UI.createScrollView({
        backgroundImage: "images/dark_fish_skin.png",
        backgroundRepeat: "true",
        layout: "vertical",
        id: "__alloyId0"
    });
    $.__views.winActorDetail.add($.__views.__alloyId0);
    $.__views.__alloyId1 = Ti.UI.createLabel({
        top: "20dp",
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
        top: "15dp",
        id: "pActorType",
        selectionIndicator: "true",
        useSpinner: "true"
    });
    $.__views.vActorType.add($.__views.pActorType);
    $.__views.__alloyId3 = Ti.UI.createPickerColumn({
        id: "__alloyId3"
    });
    $.__views.pActorType.add($.__views.__alloyId3);
    $.__views.__alloyId4 = Ti.UI.createPickerRow({
        title: "Driver",
        id: "__alloyId4"
    });
    $.__views.__alloyId3.addRow($.__views.__alloyId4);
    $.__views.__alloyId5 = Ti.UI.createPickerRow({
        title: "Pedestrian",
        id: "__alloyId5"
    });
    $.__views.__alloyId3.addRow($.__views.__alloyId5);
    $.__views.__alloyId6 = Ti.UI.createPickerRow({
        title: "Parked Vehicles",
        id: "__alloyId6"
    });
    $.__views.__alloyId3.addRow($.__views.__alloyId6);
    $.__views.__alloyId7 = Ti.UI.createPickerRow({
        title: "Pedal Cyclist",
        id: "__alloyId7"
    });
    $.__views.__alloyId3.addRow($.__views.__alloyId7);
    $.__views.__alloyId8 = Ti.UI.createPickerRow({
        title: "Other",
        id: "__alloyId8"
    });
    $.__views.__alloyId3.addRow($.__views.__alloyId8);
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
        top: "15dp",
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
    $.__views.__alloyId9 = Ti.UI.createLabel({
        top: "20dp",
        left: "15dp",
        color: "#acacac",
        font: {
            fontSize: "16dp"
        },
        text: "Plate #",
        id: "__alloyId9"
    });
    $.__views.__alloyId0.add($.__views.__alloyId9);
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
    $.__views.__alloyId10 = Ti.UI.createLabel({
        top: "20dp",
        left: "15dp",
        color: "#acacac",
        font: {
            fontSize: "16dp"
        },
        text: "Plate State",
        id: "__alloyId10"
    });
    $.__views.__alloyId0.add($.__views.__alloyId10);
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
    $.__views.__alloyId11 = Ti.UI.createLabel({
        top: "20dp",
        left: "15dp",
        color: "#acacac",
        font: {
            fontSize: "16dp"
        },
        text: "Owner same as driver?",
        id: "__alloyId11"
    });
    $.__views.__alloyId0.add($.__views.__alloyId11);
    var __alloyId13 = [];
    var __alloyId16 = {
        title: "YES",
        ns: "Alloy.Abstract"
    };
    __alloyId13.push(__alloyId16);
    var __alloyId17 = {
        title: "NO",
        ns: "Alloy.Abstract"
    };
    __alloyId13.push(__alloyId17);
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
        labels: __alloyId13,
        id: "tbOwnerDriver"
    });
    $.__views.__alloyId0.add($.__views.tbOwnerDriver);
    tbOwnerDriver_onClick ? $.__views.tbOwnerDriver.addEventListener("click", tbOwnerDriver_onClick) : __defers["$.__views.tbOwnerDriver!click!tbOwnerDriver_onClick"] = true;
    $.__views.btnCaptureDlOwner = Ti.UI.createButton({
        width: "290dp",
        height: 0,
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
        top: "20dp",
        visible: false,
        id: "btnCaptureDlOwner",
        title: "CAPTURE DL - OWNER"
    });
    $.__views.__alloyId0.add($.__views.btnCaptureDlOwner);
    btnCaptureDlOwner_onClick ? $.__views.btnCaptureDlOwner.addEventListener("click", btnCaptureDlOwner_onClick) : __defers["$.__views.btnCaptureDlOwner!click!btnCaptureDlOwner_onClick"] = true;
    $.__views.btnDeleteActor = Ti.UI.createButton({
        width: "280dp",
        height: "40dp",
        backgroundImage: "none",
        color: "white",
        font: {
            fontWeight: "bold"
        },
        backgroundGradient: {
            type: "linear",
            colors: [ {
                color: "#d01211",
                position: 0
            }, {
                color: "#b31111",
                position: 1
            } ]
        },
        top: "15dp",
        id: "btnDeleteActor",
        title: "DELETE ACTOR"
    });
    $.__views.__alloyId0.add($.__views.btnDeleteActor);
    btnDeleteActor_onClick ? $.__views.btnDeleteActor.addEventListener("click", btnDeleteActor_onClick) : __defers["$.__views.btnDeleteActor!click!btnDeleteActor_onClick"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    var args = arguments[0] || {};
    $.actor = args.actor;
    $.onCloseCb = args.onCloseCb;
    $.mode = args.mode;
    $.imageScaleFactor = 8;
    setupView();
    __defers["$.__views.winActorDetail!close!winActorDetail_onClose"] && $.__views.winActorDetail.addEventListener("close", winActorDetail_onClose);
    __defers["$.__views.txtActorType!click!txtActorType_onClick"] && $.__views.txtActorType.addEventListener("click", txtActorType_onClick);
    __defers["$.__views.pActorType!change!pActorType_onChange"] && $.__views.pActorType.addEventListener("change", pActorType_onChange);
    __defers["$.__views.btnClosePicker!click!btnClosePicker_onClick"] && $.__views.btnClosePicker.addEventListener("click", btnClosePicker_onClick);
    __defers["$.__views.btnCaptureVin!click!btnCaptureVin_onClick"] && $.__views.btnCaptureVin.addEventListener("click", btnCaptureVin_onClick);
    __defers["$.__views.btnCaptureDl!click!btnCaptureDl_onClick"] && $.__views.btnCaptureDl.addEventListener("click", btnCaptureDl_onClick);
    __defers["$.__views.tbOwnerDriver!click!tbOwnerDriver_onClick"] && $.__views.tbOwnerDriver.addEventListener("click", tbOwnerDriver_onClick);
    __defers["$.__views.btnCaptureDlOwner!click!btnCaptureDlOwner_onClick"] && $.__views.btnCaptureDlOwner.addEventListener("click", btnCaptureDlOwner_onClick);
    __defers["$.__views.btnDeleteActor!click!btnDeleteActor_onClick"] && $.__views.btnDeleteActor.addEventListener("click", btnDeleteActor_onClick);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;