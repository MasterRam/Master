controllers.controller('menuCtrl', function($scope,$state,localStorageService,chessStorage,dataService,apiService) {
	$scope.logOut=function(){
		localStorageService.set(chessStorage.user)
	}
	$scope.menu={};
	$scope.menu.isOnline=false;
	var user=dataService.getUserDetails();
	$scope.menu.isOnline=user.online;
})
  