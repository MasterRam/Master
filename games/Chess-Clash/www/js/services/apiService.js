services.factory('apiService', ['$http', '$q','chessConfig',function ($http, $q,chessConfig) {
        // Define the functions and properties to reveal.
        var service = {
            registerUser: registerUser,
            loginUser: loginUser,
            getValues: getValues,
			setUserReady:setUserReady,
			requestNextMove:requestNextMove
        };
        //var serverBaseUrl = "http://localhost:55659";
		var serverBaseUrl = chessConfig.url+':'+chessConfig.port;//"http://localhost:61305"

        return service;
        var accessToken = "";
        function registerUser(userData) {
            var accountUrl = serverBaseUrl + "/api/Account/Register";
            var deferred = $q.defer();
            $http({
                method: 'POST',
                url: accountUrl,
                data: userData,
            }).success(function (data, status, headers, cfg) {
                console.log(data);
                deferred.resolve(data);
            }).error(function (err, status) {
                console.log(err);
                deferred.reject(status);
            });
            return deferred.promise;
        }
        function loginUser(userData) {
            var tokenUrl = serverBaseUrl + "/Token";
            if (!userData.grant_type) {
                userData.grant_type = "password";
            }
            var deferred = $q.defer();
            $http({
                method: 'POST',
                url: tokenUrl,
                data: userData,
            }).success(function (data, status, headers, cfg) {
                // save the access_token as this is required for each API call. 
                accessToken = data.access_token;
                // check the log screen to know currently back from the server when a user log in successfully.
                console.log(data);
                deferred.resolve(data);
            }).error(function (err, status) {
                console.log(err);
                deferred.reject(status);
            });
            return deferred.promise;
        }
        function setUserReady(userName){
			var url = serverBaseUrl + "/api/Move/SetUserLevel?userName="+userName;
            var deferred = $q.defer();
            $http({
                method: 'POST',
                url: url,
                headers: getHeaders(),
            }).success(function (data, status, headers, cfg) {
                console.log(data);
                deferred.resolve(data);
            }).error(function (err, status) {
                console.log(err);
                deferred.reject(status);
            });
            return deferred.promise;
		}
		function requestNextMove(positionParam){
			var url = serverBaseUrl + "/api/Move/SaveLasteMove";
            var deferred = $q.defer();
            $http({
                method: 'POST',
                url: url,
				data: positionParam,
                headers: getHeaders(),
            }).success(function (data, status, headers, cfg) {
                console.log(data);
                deferred.resolve(data);
            }).error(function (err, status) {
                console.log(err);
                deferred.reject(status);
            });
            return deferred.promise;
		}
        function getValues(userName) {
            var url = serverBaseUrl + "/api/Move/GetLastMove?requestFor="+userName;
            //  var url = serverBaseUrl + "/api/Values";
            var deferred = $q.defer();
            $http({
                method: 'GET',
                url: url,
                headers: getHeaders(),
            }).success(function (data, status, headers, cfg) {
                console.log(data);
                deferred.resolve(data);
            }).error(function (err, status) {
                console.log(err);
                deferred.reject(status);
            });
            return deferred.promise;
        }
        // we have to include the Bearer token with each call to the Web API controllers. 
        function getHeaders() {
            if (accessToken) {
                console.log("Header--> Authorization : Bearer " + accessToken);
                return { "Authorization": "Bearer " + accessToken };
            }
        }
    
}]);