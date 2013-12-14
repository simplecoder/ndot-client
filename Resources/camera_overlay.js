function cam_overlay() {
    container = {};
    container.win = Titanium.UI.createWindow();
    container.scanner = Titanium.UI.createView({
        width: 260,
        height: 200,
        borderColor: "red",
        borderWidth: 5,
        borderRadius: 15
    });
    container.button = Titanium.UI.createButton({
        color: "#fff",
        backgroundColor: "green",
        bottom: 10,
        width: 301,
        height: 57,
        font: {
            fontSize: 20,
            fontWeight: "bold",
            fontFamily: "Helvetica Neue"
        },
        title: "Take Picture"
    });
    container.closebutton = Titanium.UI.createButton({
        color: "#fff",
        backgroundColor: "red",
        top: 10,
        width: 301,
        height: 57,
        font: {
            fontSize: 20,
            fontWeight: "bold",
            fontFamily: "Helvetica Neue"
        },
        title: "Close Camera"
    });
    container.messageView = Titanium.UI.createView({
        height: 30,
        width: 250,
        visible: false
    });
    container.indView = Titanium.UI.createView({
        height: 30,
        width: 250,
        backgroundColor: "#000",
        borderRadius: 10,
        opacity: .7
    });
    container.messageView.add(container.indView);
    container.message = Titanium.UI.createLabel({
        text: "Picture Taken",
        color: "#fff",
        font: {
            fontSize: 20,
            fontWeight: "bold",
            fontFamily: "Helvetica Neue"
        },
        width: "auto",
        height: "auto"
    });
    container.messageView.add(container.message);
    container.overlay = Titanium.UI.createView();
    container.overlay.add(container.scanner);
    container.overlay.add(container.button);
    container.overlay.add(container.messageView);
    container.overlay.add(container.closebutton);
    container.button.addEventListener("click", function() {
        container.scanner.borderColor = "blue";
        Ti.Media.takePicture();
        container.messageView.animate({
            visible: true
        });
        setTimeout(function() {
            container.scanner.borderColor = "red";
            container.messageView.animate({
                visible: false
            });
        }, 500);
    });
    container.closebutton.addEventListener("click", function() {
        alert("Camera closed");
        Ti.Media.hideCamera();
        container.win.close();
    });
    var imgTmp;
    Titanium.Media.showCamera({
        success: function(event) {
            debugger;
            imgTmp = event.media;
            Ti.App.fireEvent("gotImage", {
                dl: imgTmp
            });
            Ti.API.debug("picture was taken");
            var imageView = Ti.UI.createImageView({
                image: event.media,
                width: container.win.width,
                height: container.win.height
            });
            container.win.add(imageView);
            Ti.Media.hideCamera();
        },
        cancel: function() {},
        error: function(error) {
            var a = Titanium.UI.createAlertDialog({
                title: "Camera"
            });
            error.code == Titanium.Media.NO_CAMERA ? a.setMessage("Please run this test on device") : a.setMessage("Unexpected error: " + error.code);
            a.show();
        },
        saveToPhotoGallery: true,
        overlay: container.overlay,
        showControls: false,
        mediaTypes: Ti.Media.MEDIA_TYPE_PHOTO,
        autohide: false
    });
    container.open = function() {
        container.win.open();
    };
    return container.win;
}

module.exports = cam_overlay;