function Controller() {
    function setupView() {
        var plusBtn = Titanium.UI.createButton({
            top: 0,
            width: "30dp",
            height: "30dp",
            right: "30dp",
            backgroundColor: "transparent",
            backgroundImage: "images/plus.png"
        });
        plusBtn.addEventListener("click", plusBtn_onClick);
        $.winActors.rightNavButton = plusBtn;
        for (var i = 0; $.sr1Form.actors.length > i; i++) {
            var row = actorTableRowFactory($.sr1Form.actors[i]);
            $.tvActors.appendRow(row);
        }
        $.tvActors.height = 60 * $.sr1Form.actors.length + "dp";
    }
    function plusBtn_onClick() {
        var actor = {
            actorType: "Driver",
            vin: "",
            dlBarcode: "",
            plateNum: "",
            plateState: "NV",
            dlBarcodeOwner: ""
        };
        $.sr1Form.actors.push(actor);
        var actorDetailController = Alloy.createController("ActorDetail", {
            actor: actor,
            onCloseCb: ActorDetail_onClose,
            mode: "Add"
        });
        Alloy.Globals.tabMain.open(actorDetailController.getView());
    }
    function ActorDetail_onClose(actorDetailResult) {
        if ("Delete" == actorDetailResult) {
            $.sr1Form.actors.splice($.actorRowBeingModified, 1);
            $.tvActors.deleteRow($.actorRowBeingModified);
            $.tvActors.height = 60 * $.tvActors.data[0].rowCount + "dp";
        } else if ("Add" == actorDetailResult) {
            var row = actorTableRowFactory($.sr1Form.actors[$.sr1Form.actors.length - 1]);
            $.tvActors.appendRow(row);
            $.tvActors.height = 60 * $.tvActors.data[0].rowCount + "dp";
        } else {
            var actor = $.sr1Form.actors[$.actorRowBeingModified];
            var tvrActor = $.tvActors.data[0].rows[$.actorRowBeingModified];
            var rowChildren = tvrActor.getChildren();
            rowChildren[0].text = getSymbolCharForActorType(actor);
            rowChildren[1].text = actor.actorType;
            rowChildren[2].text = actor.plateNum + " - " + actor.plateState;
        }
    }
    function getSymbolCharForActorType(actor) {
        var lblActorTypeChar = "";
        switch (actor.actorType) {
          case "Driver":
            lblActorTypeChar = "D";
            break;

          case "Pedestrian":
            lblActorTypeChar = "P";
            break;

          case "Parked Vehicles":
            lblActorTypeChar = "V";
            break;

          case "Pedal Cyclist":
            lblActorTypeChar = "C";
            break;

          case "Other":
            lblActorTypeChar = "O";
        }
        return lblActorTypeChar;
    }
    function actorTableRowFactory(actor) {
        var row = Ti.UI.createTableViewRow({
            height: "60dp"
        });
        var lblActorTypeSymbol = Ti.UI.createLabel({
            text: getSymbolCharForActorType(actor),
            color: "white",
            borderRadius: "5dp",
            borderWidth: "2dp",
            borderColor: "white",
            textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
            top: "10dp",
            left: "10dp",
            width: "40dp",
            height: "40dp",
            font: {
                fontSize: "15dp"
            }
        });
        var lblActorType = Ti.UI.createLabel({
            text: actor.actorType,
            color: "white",
            top: "10dp",
            font: {
                fontSize: "13dp"
            },
            left: "60dp"
        });
        var lblPlate = Ti.UI.createLabel({
            text: actor.plateNum + " - " + actor.plateState,
            color: "white",
            top: "28dp",
            font: {
                fontSize: "13dp"
            },
            left: "60dp"
        });
        row.add(lblActorTypeSymbol);
        row.add(lblActorType);
        row.add(lblPlate);
        return row;
    }
    function tvActors_onClick(e) {
        $.actorRowBeingModified = e.index;
        var actor = $.sr1Form.actors[e.index];
        var actorDetailController = Alloy.createController("ActorDetail", {
            actor: actor,
            onCloseCb: ActorDetail_onClose,
            mode: "Edit"
        });
        Alloy.Globals.tabMain.open(actorDetailController.getView());
    }
    function btnSubmitSr1_onClick() {
        var dialog = Ti.UI.createAlertDialog({
            message: "before submit",
            title: "Submit SR1 Form"
        });
        dialog.show();
        serviceAgent.submitSr1Form($.sr1Form, function(res, status) {
            var dialog = Ti.UI.createAlertDialog({
                message: "Done submit. status: " + status + " res: " + res,
                title: "Submit SR1 Form"
            });
            dialog.show();
        });
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "Actors";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.winActors = Ti.UI.createWindow({
        backgroundImage: "images/dark_fish_skin.png",
        backgroundRepeat: "true",
        barColor: "#111",
        id: "winActors",
        title: "Actors"
    });
    $.__views.winActors && $.addTopLevelView($.__views.winActors);
    $.__views.__alloyId15 = Ti.UI.createScrollView({
        layout: "vertical",
        id: "__alloyId15"
    });
    $.__views.winActors.add($.__views.__alloyId15);
    $.__views.tvActors = Ti.UI.createTableView({
        top: "0dp",
        backgroundColor: "#282828",
        separatorColor: "#363636",
        height: 0,
        id: "tvActors"
    });
    $.__views.__alloyId15.add($.__views.tvActors);
    tvActors_onClick ? $.__views.tvActors.addEventListener("click", tvActors_onClick) : __defers["$.__views.tvActors!click!tvActors_onClick"] = true;
    $.__views.__alloyId16 = Ti.UI.createButton({
        top: "10dp",
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
                color: "#009848",
                position: 0
            }, {
                color: "#00853f",
                position: 1
            } ]
        },
        title: "SUBMIT SR1 FORM",
        id: "__alloyId16"
    });
    $.__views.__alloyId15.add($.__views.__alloyId16);
    btnSubmitSr1_onClick ? $.__views.__alloyId16.addEventListener("click", btnSubmitSr1_onClick) : __defers["$.__views.__alloyId16!click!btnSubmitSr1_onClick"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    var serviceAgent = require("serviceAgent");
    var args = arguments[0] || {};
    $.sr1Form = args.sr1Form;
    setupView();
    __defers["$.__views.tvActors!click!tvActors_onClick"] && $.__views.tvActors.addEventListener("click", tvActors_onClick);
    __defers["$.__views.__alloyId16!click!btnSubmitSr1_onClick"] && $.__views.__alloyId16.addEventListener("click", btnSubmitSr1_onClick);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;