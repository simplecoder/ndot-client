function Controller() {
    function scannerStatusUpdatedHandler(data) {
        if (data.newFoundBarcodes.length) {
            Ti.Media.vibrate([ 0, 250 ]);
            overlayView.animate({
                backgroundColor: "#009848",
                duration: 250
            }, function() {
                overlayView.backgroundColor = "transparent";
            });
            data.newFoundBarcodes.forEach(barcodeResultHandler);
        }
    }
    function barcodeResultHandler(barcode) {
        $.imgVinCheck.setVisible(true);
        $.actor.vin = barcode.barcodeString;
        RedLaser.doneScanning();
        ("iphone" === Ti.Platform.osname || "ipad" === Ti.Platform.osname) && $.winActorDetail.remove(cameraPreview);
    }
    function btnCaptureVin_onClick() {
        ("iphone" === Ti.Platform.osname || "ipad" === Ti.Platform.osname) && $.winActorDetail.add(cameraPreview);
        RedLaser.startScanning({
            overlay: overlayView,
            orientation: RedLaser.PREF_ORIENTATION_PORTRAIT,
            cameraPreview: cameraPreview,
            cameraIndex: void 0
        });
    }
    function btnCaptureDl_onClick() {
        var cameraOptions = getCameraOptions();
        cameraOptions.success = function(e) {
            $.imgDlCheck.setVisible(true);
            $.actor.dlBarcode = Ti.Utils.base64encode(e.media).toString();
        };
        if (Ti.Media.isCameraSupported) {
            var dialog = Ti.UI.createOptionDialog({
                cancel: 2,
                options: [ "Camera", "Photo Gallery", "Cancel" ],
                selectedIndex: 2,
                title: "Use camera or photo gallery?"
            });
            dialog.addEventListener("click", function(e) {
                0 == e.index ? Ti.Media.showCamera(cameraOptions) : 1 == e.index && Ti.Media.openPhotoGallery(cameraOptions);
            });
            dialog.show();
        } else Ti.Media.openPhotoGallery(cameraOptions);
    }
    function btnCaptureDlOwner_onClick() {
        var cameraOptions = getCameraOptions();
        cameraOptions.success = function(e) {
            $.imgDlOwnerCheck.setVisible(true);
            $.actor.dlBarcodeOwner = Ti.Utils.base64encode(e.media).toString();
        };
        if (Ti.Media.isCameraSupported) {
            var dialog = Ti.UI.createOptionDialog({
                cancel: 2,
                options: [ "Camera", "Photo Gallery", "Cancel" ],
                selectedIndex: 2,
                destructive: 0,
                title: "Use camera or photo gallery?"
            });
            dialog.addEventListener("click", function(e) {
                0 == e.index ? Ti.Media.showCamera(cameraOptions) : 1 == e.index && Ti.Media.openPhotoGallery(cameraOptions);
            });
            dialog.show();
        } else Ti.Media.openPhotoGallery(cameraOptions);
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
        var actorType = e.selectedValue[0];
        $.txtActorType.setValue(actorType);
        "Pedestrian" == actorType || "Pedal Cyclist" == actorType || "Other" == actorType ? toggleVehicleData(false) : ("Driver" == actorType || "Parked Vehicles" == actorType) && toggleVehicleData(true);
    }
    function toggleVehicleData(show) {
        if (show) {
            $.btnCaptureVin.height = "40dp";
            $.btnCaptureVin.setVisible(true);
            $.vVehicleData.setVisible(true);
        } else {
            $.btnCaptureVin.height = 0;
            $.btnCaptureVin.setVisible(false);
            $.vVehicleData.setVisible(false);
            $.txtPlateNum.setValue("");
            $.txtPlateState.setValue("");
            $.actor.dlBarcode = "";
            $.actor.dlBarcodeOwner = "";
        }
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
            $.actor.ownerSameAsDriver = false;
        } else {
            $.btnCaptureDlOwner.setHeight(0);
            $.btnCaptureDlOwner.setVisible(false);
            $.actor.ownerSameAsDriver = true;
        }
    }
    function setupView() {
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
        "Add" == $.mode ? $.btnDeleteActor.setVisible(false) : $.btnDeleteActor.setVisible(true);
        "" != $.actor.vin && $.imgVinCheck.setVisible(true);
        "" != $.actor.dlBarcode && $.imgDlCheck.setVisible(true);
        "" != $.actor.dlBarcodeOwner && $.imgDlOwnerCheck.setVisible(true);
        if (false == $.actor.ownerSameAsDriver) {
            $.btnCaptureDlOwner.setHeight("40dp");
            $.btnCaptureDlOwner.setVisible(true);
            $.tbOwnerDriver.setIndex(1);
        }
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
        top: "0dp",
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
        id: "btnClosePicker",
        title: "DONE"
    });
    $.__views.vActorType.add($.__views.btnClosePicker);
    btnClosePicker_onClick ? $.__views.btnClosePicker.addEventListener("click", btnClosePicker_onClick) : __defers["$.__views.btnClosePicker!click!btnClosePicker_onClick"] = true;
    $.__views.btnCaptureDl = Ti.UI.createButton({
        width: "250dp",
        height: "40dp",
        top: "15dp",
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
        id: "btnCaptureDl",
        title: "CAPTURE DL"
    });
    $.__views.__alloyId0.add($.__views.btnCaptureDl);
    btnCaptureDl_onClick ? $.__views.btnCaptureDl.addEventListener("click", btnCaptureDl_onClick) : __defers["$.__views.btnCaptureDl!click!btnCaptureDl_onClick"] = true;
    $.__views.imgDlCheck = Ti.UI.createImageView({
        top: "-35dp",
        right: "45dp",
        visible: false,
        id: "imgDlCheck",
        image: "/images/check.png"
    });
    $.__views.__alloyId0.add($.__views.imgDlCheck);
    $.__views.vVehicleData = Ti.UI.createView({
        layout: "vertical",
        height: "240dp",
        id: "vVehicleData"
    });
    $.__views.__alloyId0.add($.__views.vVehicleData);
    $.__views.btnCaptureVin = Ti.UI.createButton({
        width: "250dp",
        height: "40dp",
        top: "15dp",
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
        id: "btnCaptureVin",
        title: "CAPTURE VIN"
    });
    $.__views.vVehicleData.add($.__views.btnCaptureVin);
    btnCaptureVin_onClick ? $.__views.btnCaptureVin.addEventListener("click", btnCaptureVin_onClick) : __defers["$.__views.btnCaptureVin!click!btnCaptureVin_onClick"] = true;
    $.__views.imgVinCheck = Ti.UI.createImageView({
        top: "-35dp",
        right: "45dp",
        visible: false,
        id: "imgVinCheck",
        image: "/images/check.png"
    });
    $.__views.vVehicleData.add($.__views.imgVinCheck);
    $.__views.lblPlateNum = Ti.UI.createLabel({
        top: "20dp",
        left: "15dp",
        color: "#acacac",
        font: {
            fontSize: "16dp"
        },
        id: "lblPlateNum",
        text: "Plate #"
    });
    $.__views.vVehicleData.add($.__views.lblPlateNum);
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
        autocapitalization: Ti.UI.TEXT_AUTOCAPITALIZATION_ALL,
        id: "txtPlateNum"
    });
    $.__views.vVehicleData.add($.__views.txtPlateNum);
    $.__views.lblPlateState = Ti.UI.createLabel({
        top: "20dp",
        left: "15dp",
        color: "#acacac",
        font: {
            fontSize: "16dp"
        },
        id: "lblPlateState",
        text: "Plate State"
    });
    $.__views.vVehicleData.add($.__views.lblPlateState);
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
    $.__views.vVehicleData.add($.__views.txtPlateState);
    $.__views.lblOwnerDriver = Ti.UI.createLabel({
        top: "20dp",
        left: "15dp",
        color: "#acacac",
        font: {
            fontSize: "16dp"
        },
        id: "lblOwnerDriver",
        text: "Owner same as driver?"
    });
    $.__views.vVehicleData.add($.__views.lblOwnerDriver);
    var __alloyId10 = [];
    var __alloyId13 = {
        title: "YES",
        ns: "Alloy.Abstract"
    };
    __alloyId10.push(__alloyId13);
    var __alloyId14 = {
        title: "NO",
        ns: "Alloy.Abstract"
    };
    __alloyId10.push(__alloyId14);
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
        labels: __alloyId10,
        id: "tbOwnerDriver"
    });
    $.__views.vVehicleData.add($.__views.tbOwnerDriver);
    tbOwnerDriver_onClick ? $.__views.tbOwnerDriver.addEventListener("click", tbOwnerDriver_onClick) : __defers["$.__views.tbOwnerDriver!click!tbOwnerDriver_onClick"] = true;
    $.__views.btnCaptureDlOwner = Ti.UI.createButton({
        width: "250dp",
        height: 0,
        top: "20dp",
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
        visible: false,
        id: "btnCaptureDlOwner",
        title: "CAPTURE OWNER DL"
    });
    $.__views.vVehicleData.add($.__views.btnCaptureDlOwner);
    btnCaptureDlOwner_onClick ? $.__views.btnCaptureDlOwner.addEventListener("click", btnCaptureDlOwner_onClick) : __defers["$.__views.btnCaptureDlOwner!click!btnCaptureDlOwner_onClick"] = true;
    $.__views.imgDlOwnerCheck = Ti.UI.createImageView({
        top: "-35dp",
        right: "45dp",
        visible: false,
        id: "imgDlOwnerCheck",
        image: "/images/check.png"
    });
    $.__views.vVehicleData.add($.__views.imgDlOwnerCheck);
    $.__views.btnDeleteActor = Ti.UI.createButton({
        width: "250dp",
        height: "40dp",
        top: "15dp",
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
        bottom: "20dp",
        id: "btnDeleteActor",
        title: "DELETE ACTOR"
    });
    $.__views.__alloyId0.add($.__views.btnDeleteActor);
    btnDeleteActor_onClick ? $.__views.btnDeleteActor.addEventListener("click", btnDeleteActor_onClick) : __defers["$.__views.btnDeleteActor!click!btnDeleteActor_onClick"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    var RedLaser = require("ti.redlaser");
    var args = arguments[0] || {};
    $.actor = args.actor;
    $.onCloseCb = args.onCloseCb;
    $.mode = args.mode;
    $.imageScaleFactor = 4;
    var cameraPreview = RedLaser.createCameraPreview({
        width: "100%",
        height: "100%",
        orientationModes: [ Ti.UI.PORTRAIT ]
    });
    var torchButton = Ti.UI.createButton({
        width: "30%",
        height: "10%",
        bottom: "3%",
        left: "34%",
        title: "Toggle torch"
    });
    torchButton.addEventListener("click", function() {
        RedLaser.torchState = !RedLaser.torchState;
    });
    var overlayView = Ti.UI.createView({
        borderColor: "blue",
        borderWidth: 3
    });
    var btnCancelVinCapture = Ti.UI.createButton({
        width: "30%",
        height: "10%",
        bottom: "3%",
        left: "2%",
        title: "Cancel"
    });
    btnCancelVinCapture.addEventListener("click", function() {
        RedLaser.doneScanning();
        ("iphone" === Ti.Platform.osname || "ipad" === Ti.Platform.osname) && $.winActorDetail.remove(cameraPreview);
    });
    overlayView.add(btnCancelVinCapture);
    overlayView.add(torchButton);
    RedLaser.addEventListener("scannerStatusUpdated", scannerStatusUpdatedHandler);
    RedLaser.addEventListener("scannerReturnedResults", function(e) {
        Ti.API.info("Received scannerReturnedResults event.");
        e.foundBarcodes.forEach(barcodeResultHandler);
    });
    RedLaser.addEventListener("scannerActivated", function() {
        if (RedLaser.isFlashAvailable) {
            torchButton.enabled = true;
            torchButton.title = "Toggle torch";
        } else {
            torchButton.enabled = false;
            torchButton.title = "No torch";
        }
        RedLaser.scanSticky = false;
        RedLaser.scanCodabar = false;
        RedLaser.scanDataMatrix = false;
        RedLaser.scanEan2 = false;
        RedLaser.scanEan5 = false;
        RedLaser.scanEan8 = false;
        RedLaser.scanITF = false;
        RedLaser.scanRSS14 = false;
    });
    setupView();
    __defers["$.__views.winActorDetail!close!winActorDetail_onClose"] && $.__views.winActorDetail.addEventListener("close", winActorDetail_onClose);
    __defers["$.__views.txtActorType!click!txtActorType_onClick"] && $.__views.txtActorType.addEventListener("click", txtActorType_onClick);
    __defers["$.__views.pActorType!change!pActorType_onChange"] && $.__views.pActorType.addEventListener("change", pActorType_onChange);
    __defers["$.__views.btnClosePicker!click!btnClosePicker_onClick"] && $.__views.btnClosePicker.addEventListener("click", btnClosePicker_onClick);
    __defers["$.__views.btnCaptureDl!click!btnCaptureDl_onClick"] && $.__views.btnCaptureDl.addEventListener("click", btnCaptureDl_onClick);
    __defers["$.__views.btnCaptureVin!click!btnCaptureVin_onClick"] && $.__views.btnCaptureVin.addEventListener("click", btnCaptureVin_onClick);
    __defers["$.__views.tbOwnerDriver!click!tbOwnerDriver_onClick"] && $.__views.tbOwnerDriver.addEventListener("click", tbOwnerDriver_onClick);
    __defers["$.__views.btnCaptureDlOwner!click!btnCaptureDlOwner_onClick"] && $.__views.btnCaptureDlOwner.addEventListener("click", btnCaptureDlOwner_onClick);
    __defers["$.__views.btnDeleteActor!click!btnDeleteActor_onClick"] && $.__views.btnDeleteActor.addEventListener("click", btnDeleteActor_onClick);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;