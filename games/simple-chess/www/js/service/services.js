    angular.module('starter.services', [])
    .factory('dataService', function() {

  var userDetail={};
  var chessBoard={
		currentUser:'User',
		board:[[
				{id:'',data:{coin:'img/chessImage/whiteEle.ico',kingdom:'b',position:'e'},isPath:false,land:'b', x:0,y:0},
				{id:'',data:{coin:'img/chessImage/whiteHor.ico',kingdom:'b',position:'h'},isPath:false,land:'g', x:0,y:1},
				{id:'',data:{coin:'img/chessImage/whiteBis.ico',kingdom:'b',position:'b'},isPath:false,land:'b', x:0,y:2},
				{id:'',data:{coin:'img/chessImage/whiteQue.ico',kingdom:'b',position:'q'},isPath:false,land:'g', x:0,y:3},
				{id:'',data:{coin:'img/chessImage/whiteKin.ico',kingdom:'b',position:'k'},isPath:false,land:'b', x:0,y:4},
				{id:'',data:{coin:'img/chessImage/whiteBis.ico',kingdom:'b',position:'b'},isPath:false,land:'g', x:0,y:5},
				{id:'',data:{coin:'img/chessImage/whiteHor.ico',kingdom:'b',position:'h'},isPath:false,land:'b', x:0,y:6},
				{id:'',data:{coin:'img/chessImage/whiteEle.ico',kingdom:'b',position:'e'},isPath:false,land:'g', x:0,y:7} 
			],[
				{id:'',data:{coin:'img/chessImage/whiteSol.ico',kingdom:'b',position:'s'},isPath:false,land:'g', x:1,y:0},
				{id:'',data:{coin:'img/chessImage/whiteSol.ico',kingdom:'b',position:'s'},isPath:false,land:'b', x:1,y:1},
				{id:'',data:{coin:'img/chessImage/whiteSol.ico',kingdom:'b',position:'s'},isPath:false,land:'g', x:1,y:2},
				{id:'',data:{coin:'img/chessImage/whiteSol.ico',kingdom:'b',position:'s'},isPath:false,land:'b', x:1,y:3},
				{id:'',data:{coin:'img/chessImage/whiteSol.ico',kingdom:'b',position:'s'},isPath:false,land:'g', x:1,y:4},
				{id:'',data:{coin:'img/chessImage/whiteSol.ico',kingdom:'b',position:'s'},isPath:false,land:'b', x:1,y:5},
				{id:'',data:{coin:'img/chessImage/whiteSol.ico',kingdom:'b',position:'s'},isPath:false,land:'g', x:1,y:6},
				{id:'',data:{coin:'img/chessImage/whiteSol.ico',kingdom:'b',position:'s'},isPath:false,land:'b', x:1,y:7}
				
			],[
				{id:'',data:{coin:'img/chessImage/blue.jpg',kingdom:'e',position:''},isPath:false,land:'b', x:2,y:0},
				{id:'',data:{coin:'img/chessImage/gold.png',kingdom:'e',position:''},isPath:false,land:'g', x:2,y:1},
				{id:'',data:{coin:'img/chessImage/blue.jpg',kingdom:'e',position:''},isPath:false,land:'b', x:2,y:2},
				{id:'',data:{coin:'img/chessImage/gold.png',kingdom:'e',position:''},isPath:false,land:'g', x:2,y:3},
				{id:'',data:{coin:'img/chessImage/blue.jpg',kingdom:'e',position:''},isPath:false,land:'b', x:2,y:4},
				{id:'',data:{coin:'img/chessImage/gold.png',kingdom:'e',position:''},isPath:false,land:'g', x:2,y:5},
				{id:'',data:{coin:'img/chessImage/blue.jpg',kingdom:'e',position:''},isPath:false,land:'b', x:2,y:6},
				{id:'',data:{coin:'img/chessImage/gold.png',kingdom:'e',position:''},isPath:false,land:'g', x:2,y:7}
			],[
				{id:'',data:{coin:'img/chessImage/gold.png',kingdom:'e',position:''},isPath:false,land:'g', x:3,y:0},
				{id:'',data:{coin:'img/chessImage/blue.jpg',kingdom:'e',position:''},isPath:false,land:'b', x:3,y:1},
				{id:'',data:{coin:'img/chessImage/gold.png',kingdom:'e',position:''},isPath:false,land:'g', x:3,y:2},
				{id:'',data:{coin:'img/chessImage/blue.jpg',kingdom:'e',position:''},isPath:false,land:'b', x:3,y:3},
				{id:'',data:{coin:'img/chessImage/gold.png',kingdom:'e',position:''},isPath:false,land:'g', x:3,y:4},
				{id:'',data:{coin:'img/chessImage/blue.jpg',kingdom:'e',position:''},isPath:false,land:'b', x:3,y:5},
				{id:'',data:{coin:'img/chessImage/gold.png',kingdom:'e',position:''},isPath:false,land:'g', x:3,y:6},
				{id:'',data:{coin:'img/chessImage/blue.jpg',kingdom:'e',position:''},isPath:false,land:'b', x:3,y:7}
			],[
				{id:'',data:{coin:'img/chessImage/blue.jpg',kingdom:'e',position:''},isPath:false,land:'b', x:4,y:0},
				{id:'',data:{coin:'img/chessImage/gold.png',kingdom:'e',position:''},isPath:false,land:'g', x:4,y:1},
				{id:'',data:{coin:'img/chessImage/blue.jpg',kingdom:'e',position:''},isPath:false,land:'b', x:4,y:2},
				{id:'',data:{coin:'img/chessImage/gold.png',kingdom:'e',position:''},isPath:false,land:'g', x:4,y:3},
				{id:'',data:{coin:'img/chessImage/blue.jpg',kingdom:'e',position:''},isPath:false,land:'b', x:4,y:4},
				{id:'',data:{coin:'img/chessImage/gold.png',kingdom:'e',position:''},isPath:false,land:'g', x:4,y:5},
				{id:'',data:{coin:'img/chessImage/blue.jpg',kingdom:'e',position:''},isPath:false,land:'b', x:4,y:6},
				{id:'',data:{coin:'img/chessImage/gold.png',kingdom:'e',position:''},isPath:false,land:'g', x:4,y:7}
			],[
				{id:'',data:{coin:'img/chessImage/gold.png',kingdom:'e',position:''},isPath:false,land:'g', x:5,y:0},
				{id:'',data:{coin:'img/chessImage/blue.jpg',kingdom:'e',position:''},isPath:false,land:'b', x:5,y:1},
				{id:'',data:{coin:'img/chessImage/gold.png',kingdom:'e',position:''},isPath:false,land:'g', x:5,y:2},
				{id:'',data:{coin:'img/chessImage/blue.jpg',kingdom:'e',position:''},isPath:false,land:'b', x:5,y:3},
				{id:'',data:{coin:'img/chessImage/gold.png',kingdom:'e',position:''},isPath:false,land:'g', x:5,y:4},
				{id:'',data:{coin:'img/chessImage/blue.jpg',kingdom:'e',position:''},isPath:false,land:'b', x:5,y:5},
				{id:'',data:{coin:'img/chessImage/gold.png',kingdom:'e',position:''},isPath:false,land:'g', x:5,y:6},
				{id:'',data:{coin:'img/chessImage/blue.jpg',kingdom:'e',position:''},isPath:false,land:'b', x:5,y:7}
			],[
				{id:'',data:{coin:'img/chessImage/blackSol.ico',kingdom:'g',position:'s'},isPath:false,land:'b', x:6,y:0},
				{id:'',data:{coin:'img/chessImage/blackSol.ico',kingdom:'g',position:'s'},isPath:false,land:'g', x:6,y:1},
				{id:'',data:{coin:'img/chessImage/blackSol.ico',kingdom:'g',position:'s'},isPath:false,land:'b', x:6,y:2},
				{id:'',data:{coin:'img/chessImage/blackSol.ico',kingdom:'g',position:'s'},isPath:false,land:'g', x:6,y:3},
				{id:'',data:{coin:'img/chessImage/blackSol.ico',kingdom:'g',position:'s'},isPath:false,land:'b', x:6,y:4},
				{id:'',data:{coin:'img/chessImage/blackSol.ico',kingdom:'g',position:'s'},isPath:false,land:'g', x:6,y:5},
				{id:'',data:{coin:'img/chessImage/blackSol.ico',kingdom:'g',position:'s'},isPath:false,land:'b', x:6,y:6},
				{id:'',data:{coin:'img/chessImage/blackSol.ico',kingdom:'g',position:'s'},isPath:false,land:'g', x:6,y:7}
			],[
				{id:'',data:{coin:'img/chessImage/blackEle.ico',kingdom:'g',position:'e'},isPath:false,land:'g', x:7,y:0},
				{id:'',data:{coin:'img/chessImage/blackHor.ico',kingdom:'g',position:'h'},isPath:false,land:'b', x:7,y:1},
				{id:'',data:{coin:'img/chessImage/blackBis.ico',kingdom:'g',position:'b'},isPath:false,land:'g', x:7,y:2},
				{id:'',data:{coin:'img/chessImage/blackQue.ico',kingdom:'g',position:'q'},isPath:false,land:'b', x:7,y:3},
				{id:'',data:{coin:'img/chessImage/BlackKin.ico',kingdom:'g',position:'k'},isPath:false,land:'g', x:7,y:4},
				{id:'',data:{coin:'img/chessImage/blackBis.ico',kingdom:'g',position:'b'},isPath:false,land:'b', x:7,y:5},
				{id:'',data:{coin:'img/chessImage/blackHor.ico',kingdom:'g',position:'h'},isPath:false,land:'g', x:7,y:6},
				{id:'',data:{coin:'img/chessImage/blackEle.ico',kingdom:'g',position:'e'},isPath:false,land:'b', x:7,y:7}
			]]
	};

var getChessBoard=function(){
	return chessBoard;
}

var getUserDetails=function(){
	return userDetail;
}
var updateChessBoard=function(boardParam){
	chessBoard=boardParam;
	return chessBoard;
}

var updateUserDetails=function(userParam){
	userDetail=userParam;
	return userDetail;
}
  return {
	getUserDetails:getUserDetails,
    updateUserDetails:updateUserDetails,
	getChessBoard:getChessBoard,
	updateChessBoard:updateChessBoard
  };
})
    .factory('apiService',function ($http, $q) {
        // Define the functions and properties to reveal.
        var service = {
            registerUser: registerUser,
            loginUser: loginUser,
            getValues: getValues,
			setUserReady:setUserReady,
			requestNextMove:requestNextMove
        };
        //var serverBaseUrl = "http://localhost:55659";
		var serverBaseUrl = "http://localhost:61305"

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
    
});