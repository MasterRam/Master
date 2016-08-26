controllers.controller('signupCtrl', function($scope,$state,apiService,dataService,localStorageService,chessStorage) {
$scope.signUP = this;
        // Bindable properties and functions are placed on $scope.signUP.
       
        $scope.signUP.isRegistered = false;
        $scope.signUP.isLoggedIn = false;
        $scope.userData = {
            userName: "",
            Password: "",
            ConfirmPassword: "",
        };
        $scope.signUP.registerUser = registerUser;
        $scope.signUP.loginUser = loginUser;
        $scope.signUP.getValues = getValues;
        
        if(localStorageService.isSupported) {
            console.log('local storage supported');
          var tempObj=localStorageService.get(chessStorage.user);
          console.log(tempObj);
          if(tempObj!=null)
          $scope.signUP=tempObj;
          console.log(tempObj);
            dataService.updateUserDetails(angular.copy($scope.signUP));
            if(angular.isDefined($scope.signUP.isLoggedIn))
                if($scope.signUP.isLoggedIn)
                    $state.go('menu.iG-Battle');
        }
        
        function registerUser() {
            $scope.userData.Email = $scope.userData.userName;
        //     apiService.registerUser(angular.copy($scope.userData)).then(function (data) {
        //         $scope.signUP.isRegistered = true;
	// 			console.log('***********registered*************');
	// 			$state.go('login');
        //     }, function (error, status) {
        //         $scope.signUP.isRegistered = false;
        //         console.log(status);
        //     });
                //Comment
                {
                $scope.signUP.isRegistered = true;
				console.log('***********registered*************');
				//$state.go('login');
                }
        }
        function loginUser() {
        //     apiService.loginUser($scope.userData).then(function (data) {
        //         $scope.signUP.isLoggedIn = true;
        //         $scope.signUP.userName = data.userName;
        //         $scope.signUP.bearerToken = data.access_token;
        //         
        //         dataService.updateUserDetails(angular.copy($scope.signUP));
        //         
        //         localStorageService.set(chessStorage.user, angular.copy($scope.signUP));
        //         
        //         apiService.setUserReady('ram212kumar@gmail.com');
        //         $state.go('menu.iG-Battle',data.userName);
        //     }, function (error, status) {
        //         $scope.signUP.isLoggedIn = false;
        //         console.log(status);
        //     });
        
        
        //Comment
          $scope.signUP.isLoggedIn = true;
                $scope.signUP.userName = data.userName;
                $scope.signUP.bearerToken = data.access_token;
                
                dataService.updateUserDetails(angular.copy($scope.signUP));
                
                localStorageService.set(chessStorage.user, angular.copy($scope.signUP));
                
               
        }
        function getValues() {
        //     apiService.getValues().then(function (data) {
        //         $scope.signUP.values = data;
        //         console.log(data);
        //         console.log('back... with success');
        //     });
        }
})
   

 