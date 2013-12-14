var RedLaser = require("ti.redlaser");
var serviceAgent = require('serviceAgent');
var cam = require('camera_overlay');
    

var args = arguments[0] || {};
$.actor = args.actor;
$.onCloseCb = args.onCloseCb;
$.mode = args.mode;
$.imageScaleFactor = 2;

var cameraPreview = RedLaser.createCameraPreview({
    width: '100%', 
    height: '100%',
    orientationModes: [Ti.UI.PORTRAIT]
});

var torchButton = Ti.UI.createButton({
    width: '30%', height: '10%', bottom: '3%', left: '34%',
    title: 'Toggle torch'
});

torchButton.addEventListener('click', function() {
    RedLaser.torchState = !RedLaser.torchState;
});

var overlayView = Ti.UI.createView({
    borderColor: 'blue', borderWidth: 3
});

var btnCancelVinCapture = Ti.UI.createButton({
    width: '30%', height: '10%', bottom: '3%', left: '2%',
    title: 'Cancel'
});

btnCancelVinCapture.addEventListener('click', function() {
	RedLaser.removeEventListener('scannerStatusUpdated', scannerStatusUpdatedHandler);
    RedLaser.doneScanning();
    if (Ti.Platform.osname === 'iphone' || Ti.Platform.osname === 'ipad') {
        $.winActorDetail.remove(cameraPreview);
    }
});

overlayView.add(btnCancelVinCapture);
overlayView.add(torchButton);

RedLaser.addEventListener('scannerStatusUpdated', scannerStatusUpdatedHandler);


function scannerStatusUpdatedHandler(data){
	if (data.newFoundBarcodes.length) {
        Ti.Media.vibrate([0, 250]);
        overlayView.animate({ backgroundColor: '#009848', duration: 250}, function() {
            overlayView.backgroundColor = 'transparent';
        });
        data.newFoundBarcodes.forEach(barcodeResultHandler);
    }
}

function barcodeResultHandler(barcode){
	$.imgVinCheck.setVisible(true);
	if (barcode.barcodeString.charAt(0) == 'I' || barcode.barcodeString.charAt(0) == 'i'){ // hack around a buggy scan
		$.actor.vin = barcode.barcodeString.substring(1);
	}else{
		$.actor.vin = barcode.barcodeString;
	}
	alert ($.actor.vin);
	RedLaser.removeEventListener('scannerStatusUpdated', scannerStatusUpdatedHandler);
	RedLaser.doneScanning();
    if (Ti.Platform.osname === 'iphone' || Ti.Platform.osname === 'ipad') {
        $.winActorDetail.remove(cameraPreview);
    }
}

RedLaser.addEventListener('scannerActivated', function() {
    if (RedLaser.isFlashAvailable) {
        torchButton.enabled = true;
        torchButton.title = 'Toggle torch';
    } else {
        torchButton.enabled = false;
        torchButton.title = 'No torch';
    }
    
    RedLaser.scanSticky = false;
    RedLaser.scanCodabar = false;
    // RedLaser.scanCode39 = false;
    // RedLaser.scanCode93 = false;
    RedLaser.scanDataMatrix = false;
    RedLaser.scanEan2 = false;
    RedLaser.scanEan5 = false;
    RedLaser.scanEan8 = false;
    RedLaser.scanITF = false;
    RedLaser.scanRSS14 = false;
    // RedLaser.scanSticky = false;
});

function btnCaptureVin_onClick(){
	if (Ti.Platform.osname === 'iphone' || Ti.Platform.osname === 'ipad') {
        $.winActorDetail.add(cameraPreview);
    }
    RedLaser.startScanning({
        overlay: overlayView,
        orientation: RedLaser.PREF_ORIENTATION_PORTRAIT,
        cameraPreview: cameraPreview,
        cameraIndex: undefined
    });
}

function showNotif(msg){
    $.lblNotif.text = msg;
    $.lblNotif.height = '30dp',
    $.lblNotif.visible = true;
}

function hideNotif(){
	$.lblNotif.height = '0dp',
    $.lblNotif.visible = false;
}

function btnCaptureDl_onClick(){
    var cameraOptions = getCameraOptions();
    cameraOptions.success = function(e) {
        var resizedImage = e.media.imageAsResized(e.media.width / $.imageScaleFactor, e.media.height / $.imageScaleFactor);
        $.actor.dlBarcode = Ti.Utils.base64encode(resizedImage).toString();
        $.actor.dlOverride = false;
        //$.actor.dlBarcode = Ti.Utils.base64encode(e.media).toString();
        showNotif('VALIDATING DRIVER LICENSE');
        serviceAgent.checkDlImageValid($.actor.dlBarcode, function(res, status){
            $.actor.dlBarCodeValid = res;
            setDlStatusImage();
            hideNotif();
        });
   };
    if (Ti.Media.isCameraSupported) {
        var dialog = Ti.UI.createOptionDialog({
            cancel: 2,
            options: ['Camera', 'Photo Gallery', 'Cancel'],
            selectedIndex: 2,
            title: 'Use camera or photo gallery?'
        });
        dialog.addEventListener('click', function(e){
            if (e.index == 0){
                Ti.Media.showCamera(cameraOptions);       
            }else if (e.index == 1){
            	cameraOptions.saveToPhotoGallery = false;
                Ti.Media.openPhotoGallery(cameraOptions);       
            }
        });
        dialog.show();
        
    } else {
        Ti.Media.openPhotoGallery(cameraOptions);
    }   
}

function btnCaptureDlOwner_onClick(){
	var cameraOptions = getCameraOptions();
	cameraOptions.success = function(e) {
		$.imgDlOwnerCheck.setVisible(true);
        $.actor.dlBarcodeOwner = Ti.Utils.base64encode(e.media).toString();
   };
    if (Ti.Media.isCameraSupported) {
    	var dialog = Ti.UI.createOptionDialog({
			cancel: 2,
			options: ['Camera', 'Photo Gallery', 'Cancel'],
			selectedIndex: 2,
			destructive: 0,
			title: 'Use camera or photo gallery?'
		});
		dialog.addEventListener('click', function(e){
			if (e.index == 0){
				Ti.Media.showCamera(cameraOptions);		
			}else if (e.index == 1){
				Ti.Media.openPhotoGallery(cameraOptions);		
			}
		});
    	dialog.show();
        
    } else {
        Ti.Media.openPhotoGallery(cameraOptions);
    }	
}

function getCameraOptions(){
	var cameraOptions = {
        cancel : function() {
            // cancel and close window
        },
        error : function(error) {
            var a = Ti.UI.createAlertDialog({
                title : "Camera Error"
            });
            if (error.code == Ti.Media.NO_CAMERA) {
                a.setMessage("MISSING CAMERA");
            } else {
                a.setMessage('Unexpected error: ' + error.code);
            }
            a.show();
        },
        saveToPhotoGallery : true,
        allowEditing : true,
        mediaTypes : [Ti.Media.MEDIA_TYPE_PHOTO],
    };
    return cameraOptions;
}

function txtActorType_onClick(){
	$.vActorType.setHeight('275dp');
}

function btnClosePicker_onClick(){
	$.vActorType.setHeight(0);
}

function pActorType_onChange(e){
	var actorType = e.selectedValue[0];
	$.txtActorType.setValue(actorType);
	if (actorType == 'Pedestrian' || actorType == 'Pedal Cyclist' || actorType=='Other'){
		toggleVehicleData(false);
	}else if (actorType == 'Driver' || actorType == 'Parked Vehicles'){
		toggleVehicleData(true);
	}
}

function toggleVehicleData(show){
	if(show){
		$.btnCaptureVin.height = '40dp';
		$.btnCaptureVin.setVisible(true);
		$.vVehicleData.setVisible(true);	
	}else{
		$.btnCaptureVin.height = 0;
		$.btnCaptureVin.setVisible(false);
		$.vVehicleData.setVisible(false);
		$.txtPlateNum.setValue('');
		$.txtPlateState.setValue('');
		$.actor.dlBarcode = '';
		$.actor.dlBarcodeOwner = '';
	}
}

function btnDeleteActor_onClick(){
	$.mode = 'Delete';
	$.winActorDetail.close();
}

function winActorDetail_onClose(){
	$.actor.actorType = $.txtActorType.getValue();
	$.actor.plateNum = $.txtPlateNum.getValue();
	$.actor.plateState = $.txtPlateState.getValue();
	$.onCloseCb($.mode);
}

function tbOwnerDriver_onClick(e){
	if (e.index == 1){ // driver and owner not the same
		$.btnCaptureDlOwner.setHeight('40dp');
		$.btnCaptureDlOwner.setVisible(true);
		$.actor.ownerSameAsDriver = false;
	}else{
		$.btnCaptureDlOwner.setHeight(0);
		$.btnCaptureDlOwner.setVisible(false);
		$.actor.ownerSameAsDriver = true;
	}
}

function setDlStatusImage(){
	if ($.actor.dlBarCodeValid){
		$.imgDlStatus.image = image = "/images/check.png";
	}else{
		$.imgDlStatus.image = image = "/images/warn.png";
	}
	$.imgDlStatus.setVisible(true);
}

function imgOverride_onClick(){
	var actorDlOverrideController = Alloy.createController('ActorDlOverride',{
		actor: $.actor,
	}); 
    Alloy.Globals.tabMain.open(actorDlOverrideController.getView());
}

function setupView(){
	
	// hack to set the color of the title 
	var titleLabel = Ti.UI.createLabel({
		text:'Actor Detail',
		color:'#fff'
	});	
	$.winActorDetail.titleControl = titleLabel;
	
	switch ($.actor.actorType){
		case 'Driver':
			$.pActorType.setSelectedRow(0,0,true);
			break;
		case 'Pedestrian':
			$.pActorType.setSelectedRow(0,1,true);
			break;
		case 'Parked Vehicles':
			$.pActorType.setSelectedRow(0,2,true);
			break;
		case 'Pedal Cyclist':
			$.pActorType.setSelectedRow(0,3,true);
			break;
		case 'Other':
			$.pActorType.setSelectedRow(0,4,true);
			break;
	}
	$.txtPlateNum.setValue($.actor.plateNum);
	$.txtPlateState.setValue($.actor.plateState);
	if ($.mode == 'Add'){
		$.btnDeleteActor.setVisible(false);
	}else{
		$.btnDeleteActor.setVisible(true);
	}
	
	if ($.actor.vin != '')
		$.imgVinCheck.setVisible(true);
	if ($.actor.dlBarcode != '')
		setDlStatusImage();
	if ($.actor.dlBarcodeOwner != '')
		$.imgDlOwnerCheck.setVisible(true);
	if ($.actor.ownerSameAsDriver == false){
		$.btnCaptureDlOwner.setHeight('40dp');
		$.btnCaptureDlOwner.setVisible(true);
		$.tbOwnerDriver.setIndex(1);	
	}
}

setupView();
