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
    }
    function plusBtn_onClick() {
        var actor = {
            actorType: "",
            vinImage: "",
            dlBarcode: "",
            plateNum: "",
            plateState: ""
        };
        var actorDetailController = Alloy.createController("ActorDetail", {
            actor: actor
        });
        Alloy.Globals.tabMain.open(actorDetailController.getView());
    }
    function tvActors_onClick(e) {
        $.timeEntryRowBeingModifiedIndex = e.index;
        getCurrentActor();
    }
    function btnSubmitSr1_onClick() {}
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "Actors";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.winActors = Ti.UI.createWindow({
        barColor: "#000",
        id: "winActors",
        title: "Actors"
    });
    $.__views.winActors && $.addTopLevelView($.__views.winActors);
    $.__views.__alloyId17 = Ti.UI.createScrollView({
        id: "__alloyId17"
    });
    $.__views.winActors.add($.__views.__alloyId17);
    $.__views.tvActors = Ti.UI.createTableView({
        top: "0dp",
        backgroundColor: "#282828",
        separatorColor: "#363636",
        id: "tvActors"
    });
    $.__views.__alloyId17.add($.__views.tvActors);
    tvActors_onClick ? $.__views.tvActors.addEventListener("click", tvActors_onClick) : __defers["$.__views.tvActors!click!tvActors_onClick"] = true;
    $.__views.__alloyId18 = Ti.UI.createButton({
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
        id: "__alloyId18"
    });
    $.__views.__alloyId17.add($.__views.__alloyId18);
    btnSubmitSr1_onClick ? $.__views.__alloyId18.addEventListener("click", btnSubmitSr1_onClick) : __defers["$.__views.__alloyId18!click!btnSubmitSr1_onClick"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    setupView();
    __defers["$.__views.tvActors!click!tvActors_onClick"] && $.__views.tvActors.addEventListener("click", tvActors_onClick);
    __defers["$.__views.__alloyId18!click!btnSubmitSr1_onClick"] && $.__views.__alloyId18.addEventListener("click", btnSubmitSr1_onClick);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;