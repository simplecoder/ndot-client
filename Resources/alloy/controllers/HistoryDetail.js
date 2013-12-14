function Controller() {
    function getLabel(left) {
        return Ti.UI.createLabel({
            left: left,
            top: "10dp",
            color: "#acacac",
            font: {
                fontSize: "16dp"
            }
        });
    }
    function addLabel(left, text) {
        var lbl = getLabel(left);
        lbl.setText(text);
        $.svMain.add(lbl);
    }
    function setupView() {
        var titleLabel = Ti.UI.createLabel({
            text: "History Detail",
            color: "#fff"
        });
        $.winHistoryDetail.titleControl = titleLabel;
        $.lblStreet.setText("Street: " + $.form.Street);
        $.lblCity.setText("City: " + $.form.City);
        $.lblCounty.setText("County: " + $.form.County);
        $.lblDate.setText("Date: " + moment($.form.CreatedDate).format("L"));
        if (null == $.form.Actors) return;
        for (var i = 0; $.form.Actors.length > i; i++) {
            var actor = $.form.Actors[i];
            addLabel("10dp", "Actor " + i);
            addLabel("20dp", "Actor Type: " + actor.Type);
            addLabel("30dp", "Driver Info");
            addLabel("40dp", "First Name: " + actor.Driver.FirstName);
            addLabel("40dp", "Middle Name: " + actor.Driver.MiddleName);
            addLabel("40dp", "Last Name: " + actor.Driver.LastName);
            addLabel("40dp", "Street: " + actor.Driver.Street);
            addLabel("40dp", "City: " + actor.Driver.City);
            addLabel("40dp", "State: " + actor.Driver.State);
            addLabel("40dp", "Zip: " + actor.Driver.Zip);
            addLabel("40dp", "DL #: " + actor.Driver.DriverLicenseNumber);
            addLabel("40dp", "DL State: " + actor.Driver.DriverLicenseState);
            addLabel("40dp", "DOB: " + moment(actor.Driver.Dob).format("L"));
            if ("Driver" == actor.Type || "Parked Vehicles" == actor.Type) {
                addLabel("40dp", "License #: " + actor.Driver.LicensePlateNumber);
                addLabel("40dp", "License State: " + actor.Driver.LicensePlateState);
                addLabel("40dp", "Make: " + actor.Driver.Make);
                addLabel("40dp", "Year: " + actor.Driver.Year);
                addLabel("40dp", "VIN: " + actor.Driver.Vin);
            }
            if (false == actor.OwnerSameAsDriver) {
                addLabel("30dp", "Owner Info");
                addLabel("40dp", "First Name: " + actor.Owner.FirstName);
                addLabel("40dp", "Middle Name: " + actor.Owner.MiddleName);
                addLabel("40dp", "Last Name: " + actor.Owner.LastName);
                addLabel("40dp", "Street: " + actor.Owner.Street);
                addLabel("40dp", "City: " + actor.Owner.City);
                addLabel("40dp", "State: " + actor.Owner.State);
                addLabel("40dp", "Zip: " + actor.Owner.Zip);
                addLabel("40dp", "DL #: " + actor.Owner.DriverLicenseNumber);
                addLabel("40dp", "DL State: " + actor.Owner.DriverLicenseState);
                addLabel("40dp", "Dob: " + moment(actor.Owner.Dob).format("L"));
            }
        }
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "HistoryDetail";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.winHistoryDetail = Ti.UI.createWindow({
        statusBarStyle: Titanium.UI.iPhone.StatusBar.LIGHT_CONTENT,
        navBarHidden: "false",
        barColor: "#111",
        id: "winHistoryDetail",
        title: "History Detail"
    });
    $.__views.winHistoryDetail && $.addTopLevelView($.__views.winHistoryDetail);
    $.__views.svMain = Ti.UI.createScrollView({
        backgroundImage: "images/dark_fish_skin.png",
        backgroundRepeat: "true",
        layout: "vertical",
        id: "svMain"
    });
    $.__views.winHistoryDetail.add($.__views.svMain);
    $.__views.lblStreet = Ti.UI.createLabel({
        left: "10dp",
        top: "10dp",
        color: "#acacac",
        font: {
            fontSize: "16dp"
        },
        id: "lblStreet"
    });
    $.__views.svMain.add($.__views.lblStreet);
    $.__views.lblCity = Ti.UI.createLabel({
        left: "10dp",
        top: "10dp",
        color: "#acacac",
        font: {
            fontSize: "16dp"
        },
        id: "lblCity"
    });
    $.__views.svMain.add($.__views.lblCity);
    $.__views.lblCounty = Ti.UI.createLabel({
        left: "10dp",
        top: "10dp",
        color: "#acacac",
        font: {
            fontSize: "16dp"
        },
        id: "lblCounty"
    });
    $.__views.svMain.add($.__views.lblCounty);
    $.__views.lblDate = Ti.UI.createLabel({
        left: "10dp",
        top: "10dp",
        color: "#acacac",
        font: {
            fontSize: "16dp"
        },
        id: "lblDate"
    });
    $.__views.svMain.add($.__views.lblDate);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var moment = require("moment");
    var args = arguments[0] || {};
    $.form = args.form;
    setupView();
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;