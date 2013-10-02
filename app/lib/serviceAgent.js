function getAuthHeader(){
	var credentials = 'foo:foofoo';
	var authHeaderValue = 'Basic ' + Ti.Utils.base64encode(credentials);
	return authHeaderValue;
}

exports.getSr1Form = function(cb){
	var xhr = Ti.Network.createHTTPClient();
	xhr.open('GET', Alloy.CFG.ApiBaseUri + 'sr1form');
	xhr.setRequestHeader('Authorization', getAuthHeader());
	xhr.onload = function(){
		return cb(JSON.parse(this.responseText), this.status);
	};
	xhr.onerror = function(e){
		console.log('Error in getSr1Form. Status Code: ' + this.status + ', ' + e.code + e.error)
		cb(null, this.status);
		return;
	}
	xhr.send();
}

exports.submitSr1Form = function(form, cb){
	var xhr = Ti.Network.createHTTPClient();
	xhr.open('POST', Alloy.CFG.ApiBaseUri + 'sr1form');
	xhr.setRequestHeader('Content-Type', 'application/json');
	xhr.timeout = 45000; // 45 seconds
	var payload = JSON.stringify(form);
	xhr.onload = function(){
		return cb(JSON.parse(this.responseText), this.status);
	};
	xhr.onerror = function(e){
		console.log('Error in submitSr1Form. Status Code: ' + this.status + ', ' + e.code + e.error)
		cb(null,this.status);
	}
	xhr.send(payload);
}

exports.getCounty = function (lat, lng, cb){
	var xhr = Ti.Network.createHTTPClient();
	xhr.open('GET', 'http://maps.googleapis.com/maps/api/geocode/json?sensor=true&latlng=' + lat + ',' + lng);
	xhr.onload = function(){
		var res = JSON.parse(this.responseText);
		if (res.results.length > 0){
			cb(res.results[0].address_components[3].long_name);
		}
	}
	xhr.onerror = function(e){
		cb('');
	}
	xhr.send();
}

exports.getGoogleReverseGeo = function (lat, lng, cb){
	var xhr = Ti.Network.createHTTPClient();
	xhr.open('GET', 'http://maps.googleapis.com/maps/api/geocode/json?sensor=true&latlng=' + lat + ',' + lng);
	xhr.onload = function(){
		var res = JSON.parse(this.responseText);
		cb(res);
	}
	xhr.onerror = function(e){
		cb('');
	}
	xhr.send();
}

