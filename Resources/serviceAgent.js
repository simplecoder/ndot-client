exports.submitSr1Form = function(form, cb) {
    var xhr = Ti.Network.createHTTPClient();
    xhr.open("POST", Alloy.CFG.ApiBaseUri + "sr1form_clientdata");
    xhr.setRequestHeader("Content-Type", "application/json");
    var payload = JSON.stringify(form);
    console.log(payload);
    xhr.onload = function() {
        return cb(JSON.parse(this.responseText), this.status);
    };
    xhr.onerror = function(e) {
        console.log("Error in submitSr1Form. Status Code: " + this.status + ", " + e.code + e.error);
        cb(null, this.status);
    };
    xhr.send(payload);
};

exports.getCounty = function(lat, lng, cb) {
    var xhr = Ti.Network.createHTTPClient();
    xhr.open("GET", "http://maps.googleapis.com/maps/api/geocode/json?sensor=true&latlng=" + lat + "," + lng);
    xhr.onload = function() {
        var res = JSON.parse(this.responseText);
        res.results.length > 0 && cb(res.results[0].address_components[3].long_name);
    };
    xhr.onerror = function() {
        cb("");
    };
    xhr.send();
};