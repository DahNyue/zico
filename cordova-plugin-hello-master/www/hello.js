/*global cordova, module*/

module.exports = {
    greet: function (name, successCallback, errorCallback) {
        cordova.exec(successCallback, errorCallback, "Hello", "greet", [name]);
    },
	
	echo: function (str, callback) {
		cordova.exec(callback, function(err) {
			callback('Nothing to echo.');
		}, "Hello", "echo", [str]);
	}
};
