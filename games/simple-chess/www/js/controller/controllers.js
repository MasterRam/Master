angular.module('starter.controllers',[])

.controller('boardCtrl',function($scope,$stateParams,dataService,apiService) {
    var user=$stateParams.user;
    var lastCoin=null;
    var newGoldLand ={
            coin:"img/chessImage/gold.png",
            kingdom:'e',
            position:''
        };
    var newIceLand ={
        coin:'img/chessImage/blue.jpg',
        kingdom:'e',
        position:''
        };
    
$scope.chess={};
$scope.chess['gameOn'] = 'Ramkumar';
	$scope.chess['user1']={
		id:'',
		name:'',
		arrested:{
			count:0,
			coins:[{}]
		},
		dead:{
			count:0,
			coins:[{}]
		},
		lastMove:{
			
		}
	};
	$scope.chess['user2']={
		id:'',
		name:'',
		arrested:{
			count:0,
			coins:[{}]
		},
		dead:{
			count:0,
			coins:[{}]
		},
		lastMove:{
			
		}
	},
	$scope.chess['data']={};
    
  

$scope.generate=function(){};
$scope.setPath=function(lockedBut){setReleaseBut(lockedBut);};

function setChessBoard(){
    var tempChessBoard=dataService.getChessBoard();
    $scope.chess['data']=angular.copy(tempChessBoard);
}
function updateChessBoard(){
     $scope.chess['data']=dataService.updateChessBoard(angular.copy($scope.chess['data']));
}
function setboardPosition(oldPos,newPos)
{
    var position={
        oldPosition:oldPos,
        newPosition:newPos
    }
    apiService.requestNextMove(position);
}
function setReleaseBut(lockedbut)
{
    var temp=angular.copy(lockedbut);
    var rowvar = lockedbut.x;
    var colvar = lockedbut.y;
    var row = rowvar;//parseInt(rowvar)-1;
    var col = colvar;//letterid.indexOf(colvar);
     if ($scope.chess['data'].board[row][col].data.kingdom == 'e'||lastCoin!=null) 
     {
           if(!lockedbut.isPath)
                return;
            $scope.chess['data'].board[lockedbut.x][lockedbut.y].data=angular.copy(lastCoin.data);
               if(lastCoin.land=='g')
                    $scope.chess['data'].board[lastCoin.x][lastCoin.y].data=angular.copy(newGoldLand);
                 else if(lastCoin.land=='b')
                    $scope.chess['data'].board[lastCoin.x][lastCoin.y].data=angular.copy(newIceLand);
            
            resetPath();
            return;
     }	
    else
        lastCoin=lockedbut;
        
        var kingdom = lockedbut.data.kingdom;
        var position = lockedbut.data.position;
        switch (position) {
            case 's':
                if (kingdom == 'g') {
                    if ($scope.chess['data'].board[row - 1][col].data.kingdom == 'e') {
						$scope.chess['data'].board[row-1][col].isPath=true;
                        if (row == 6) 
                           $scope.chess['data'].board[row-2][col].isPath=true;
                    }
                    if ($scope.chess['data'].board[row - 1][col - 1].data.kingdom != 'e' && $scope.chess['data'].board[row - 1][col - 1].data.kingdom != 'g')
							$scope.chess['data'].board[row-1][col - 1].isPath=true;
                      
                    if ($scope.chess['data'].board[row - 1][col + 1].data.kingdom != 'e'&& $scope.chess['data'].board[row - 1][col + 1].data.kingdom != 'g') 
                            $scope.chess['data'].board[row - 1][col + 1].isPath=true;
                    
                    if(!$scope.chess['data'].board[row-1][col].isPath&&!$scope.chess['data'].board[row-1][col - 1].isPath&&!$scope.chess['data'].board[row - 1][col + 1].isPath)
                            lastCoin=null;
                }
                else if (kingdom == 'b') {
                    if ($scope.chess['data'].board[row + 1][col].data.kingdom == 'e') {
                        $scope.chess['data'].board[row + 1][col].isPath=true;
                        if (row == 1) 
                            $scope.chess['data'].board[row + 2][col].isPath=true;
                    }
                    if ($scope.chess['data'].board[row + 1][col - 1].data.kingdom != 'e' && $scope.chess['data'].board[row + 1][col - 1].data.kingdom != 'b') 
                            $scope.chess['data'].board[row + 1][col - 1].isPath=true;
                    
                    if ($scope.chess['data'].board[row + 1][col + 1].data.kingdom != 'e' && $scope.chess['data'].board[row + 1][col + 1].data.kingdom != 'b') 
                            $scope.chess['data'].board[row + 1][col + 1].isPath=true;
                           
                    if(!$scope.chess['data'].board[row + 1][col].isPath&&!$scope.chess['data'].board[row + 1][col - 1].isPath&&!$scope.chess['data'].board[row + 1][col + 1].isPath)
                        lastCoin=null;
                    
                    
                } break;
            case 'e':
                for (var j = col - 1; j >= 0; j--) {
                    var nxtpos = $scope.chess['data'].board[row][j];
                    if (nxtpos.data.kingdom != kingdom) {
                        $scope.chess['data'].board[row][j].isPath=true;
                        if (nxtpos.data.kingdom != 'e') {
                            break;
                        }

                    }
                    else {
                        break;
                    }

                }

                for (var j = col + 1; j < 8; j++) {
                    var nxtpos = $scope.chess['data'].board[row][j];
                    if (nxtpos.data.kingdom != kingdom) {
                        $scope.chess['data'].board[row][j].isPath=true;
                        if (nxtpos.data.kingdom != 'e') {
                            break;
                        }

                    }
                    else
                    { break; }
                }

                for (var i = row - 1; i >= 0; i--) {
                    var nxtpos = $scope.chess['data'].board[i][col];
                    if (nxtpos.data.kingdom != kingdom) {

                        //document.getElementById((i + 1) + letterid[col]).className = "label-box show-newer";
                        $scope.chess['data'].board[i][col].isPath=true;
                        if (nxtpos.data.kingdom != 'e') {
                            break;
                        }

                    }
                    else {
                        break;
                    }
                }
                for (var i = row + 1; i < 8; i++) {
                    var nxtpos = $scope.chess['data'].board[i][col];
                    if (nxtpos.data.kingdom != kingdom) {

                        //document.getElementById((i + 1) + letterid[col]).className = "label-box show-newer";
                        $scope.chess['data'].board[i][col].isPath=true;
                        if (nxtpos.data.kingdom != 'e') {
                            break;
                        }

                    }
                    else {
                        break;
                    }
                } break;
            case 'b':
                for (var i = row + 1, j = col - 1; i < 7 && j >= 0; i++, j--) {
                    var nxtpos = $scope.chess['data'].board[i][j];

                    if (nxtpos.data.kingdom != kingdom) {

                        //document.getElementById((i + 1) + letterid[j]).className = "label-box show-newer";
                        $scope.chess['data'].board[i][j].isPath=true;
                        if (nxtpos.data.kingdom != 'e') {
                            break;
                        }

                    }
                    else {
                        break;
                    }

                }
                for (var i = row - 1, j = col + 1; i >= 0 && j < 8; i--, j++) {
                    var nxtpos = $scope.chess['data'].board[i][j];
                    if (nxtpos.data.kingdom != kingdom) {

                        //document.getElementById((i + 1) + letterid[j]).className = "label-box show-newer";
                        $scope.chess['data'].board[i][j].isPath=true;
                        if (nxtpos.data.kingdom != 'e') {
                            break;
                        }

                    } else {
                        break;
                    }

                }
                for (var i = row - 1, j = col - 1; i >= 0 && j >= 0; i--, j--) {
                    var nxtpos = $scope.chess['data'].board[i][j];
                    if (nxtpos.data.kingdom != kingdom) {

                        //document.getElementById((i + 1) + letterid[j]).className = "label-box show-newer";
                        $scope.chess['data'].board[i][j].isPath=true;
                        if (nxtpos.data.kingdom != 'e') {
                            break;
                        }

                    } else {
                        break;
                    }

                }
                for (var i = row + 1, j = col + 1; i >= 0 && j < 8; i++, j++) {
                    var nxtpos = $scope.chess['data'].board[i][j];
                    if (nxtpos.data.kingdom != kingdom) {
						  $scope.chess['data'].board[i][j].isPath=true;
                        if (nxtpos.data.kingdom != 'e') {
                            break;
                        }

                    }
                    else {
                        break;
                    }

                }
                break;
            case 'h':
                if (col > 2 && row > 0) {
                    var nxtpos = $scope.chess['data'].board[row - 1][col - 2];
                    if (nxtpos.data.kingdom != kingdom) {
                        $scope.chess['data'].board[row - 1][col - 2].isPath=true;
                    }

                }

                if (col > 2 && row < 6) {
                    var nxtpos = $scope.chess['data'].board[row + 1][col - 2];
                    if (nxtpos.data.kingdom != kingdom) {
                        $scope.chess['data'].board[row + 1][col - 2].isPath=true;
                    }

                }

                if (col >0 && row > 1) {
                    if($scope.chess['data'].board[row - 2][col - 1].data.kingdom != kingdom) 
                        $scope.chess['data'].board[row - 2][col - 1].isPath=true;
                }
                if (col < 6 && row > 1) {
                    var nxtpos = $scope.chess['data'].board[row - 2][col + 1];
                    if (nxtpos.data.kingdom != kingdom) {
                        //document.getElementById((row - 1) + letterid[col + 1]).className = "label-box show-newer";
                        $scope.chess['data'].board[row - 2][col + 1].isPath=true;
                    }
                }
                if (row < 6 && col > 0) {
                    var nxtpos = $scope.chess['data'].board[row + 2][col - 1];
                    if (nxtpos.data.kingdom != kingdom) {

                        //document.getElementById((row + 3) + letterid[col - 1]).className = "label-box show-newer";
                        $scope.chess['data'].board[row + 2][col - 1].isPath=true;
                    }
                }
                if (row < 7 && col < 6) {
                    var nxtpos = $scope.chess['data'].board[row + 1][col + 2];
                    if (nxtpos.data.kingdom != kingdom) {
                        //document.getElementById((row + 2) + letterid[col + 2]).className = "label-box show-newer";
                        $scope.chess['data'].board[row + 1][col + 2].isPath=true;
                    }
                }
                if (row > 0 && col < 6) {
                    var nxtpos = $scope.chess['data'].board[row - 1][col + 2];
                    if (nxtpos.data.kingdom != kingdom) {

                        //document.getElementById((row) + letterid[col + 2]).className = "label-box show-newer";
                        $scope.chess['data'].board[row - 1][col + 2].isPath=true;
                    }
                }
                if (row < 6 && col < 7) {
                    var nxtpos = $scope.chess['data'].board[row + 2][col + 1];
                    if (nxtpos.data.kingdom != kingdom) {
                        //document.getElementById((row + 3) + letterid[col + 1]).className = "label-box show-newer";
                        $scope.chess['data'].board[row + 2][col + 1].isPath=true;
                    }
                }
                break;

            case 'k':
                if (col > 0) {
                    var nxtpos = $scope.chess['data'].board[row][col - 1];
                    if (nxtpos.data.kingdom != kingdom) {

                        //document.getElementById((row + 1) + letterid[col - 1]).className = "label-box show-newer";
                        $scope.chess['data'].board[row][col - 1].isPath=true;
                    }

                }

                if (col < 7) {
                    var nxtpos = $scope.chess['data'].board[row][col + 1];
                    if (nxtpos.data.kingdom != kingdom) {
                        //document.getElementById((row + 1) + letterid[col + 1]).className = "label-box show-newer";
                        $scope.chess['data'].board[row][col + 1].isPath=true;
                    }

                }

                if (row > 0) {
                    var nxtpos = $scope.chess['data'].board[row - 1][col];
                    if (nxtpos.data.kingdom != kingdom) {

                        //document.getElementById((row) + letterid[col]).className = "label-box show-newer";
                        $scope.chess['data'].board[row - 1][col].isPath=true;
                    }
                }
                if (row < 7) {
                    var nxtpos = $scope.chess['data'].board[row + 1][col];
                    if (nxtpos.data.kingdom != kingdom) {
                        //document.getElementById((row + 2) + letterid[col]).className = "label-box show-newer";
                        $scope.chess['data'].board[row + 1][col].isPath=true;
                    }
                }
                if (row < 7 && col > 0) {
                    var nxtpos = $scope.chess['data'].board[row + 1][col - 1];
                    if (nxtpos.data.kingdom != kingdom) {

                        //document.getElementById((row + 2) + letterid[col - 1]).className = "label-box show-newer";
                        $scope.chess['data'].board[row + 1][col - 1].isPath=true;
                    }
                }
                if (row > 0 && col < 7) {
                    var nxtpos = $scope.chess['data'].board[row - 1][col + 1];
                    if (nxtpos.data.kingdom != kingdom) {
                        //document.getElementById((row) + letterid[col + 1]).className = "label-box show-newer";
                        $scope.chess['data'].board[row - 1][col + 1].isPath=true;
                    }
                }
                if (row < 7 && col < 7) {
                    var nxtpos = $scope.chess['data'].board[row + 1][col + 1];
                    if (nxtpos.data.kingdom != kingdom) {

                        //document.getElementById((row + 2) + letterid[col + 1]).className = "label-box show-newer";
                        $scope.chess['data'].board[row + 1][col + 1].isPath=true;
                    }
                }
                if (row > 0 && col > 0) {
                    var nxtpos = $scope.chess['data'].board[row - 1][col - 1];
                    if (nxtpos.data.kingdom != kingdom) {
                        //document.getElementById((row) + letterid[col - 1]).className = "label-box show-newer";
                        $scope.chess['data'].board[row - 1][col - 1].isPath=true;
                    }
                }
                break;
            case 'q':
                for (var j = col - 1; j >= 0; j--) {
                    var nxtpos = $scope.chess['data'].board[row][j];
                    if (nxtpos.data.kingdom != kingdom) {

                        //document.getElementById((row + 1) + letterid[j]).className = "label-box show-newer";
                        $scope.chess['data'].board[row][j].isPath=true;
                        if (nxtpos.data.kingdom != 'e') {
                            break;
                        }

                    }
                    else  {
                        break;
                    }

                }

                for (var j = col + 1; j < 8; j++) {
                    var nxtpos = $scope.chess['data'].board[row][j];
                    if (nxtpos.data.kingdom != kingdom) {

                        //document.getElementById((row + 1) + letterid[j]).className = "label-box show-newer";
                        $scope.chess['data'].board[row][j].isPath=true;
                        if (nxtpos.data.kingdom != 'e') {
                            break;
                        }
                    }
                    else {
                        break;
                    }

                }

                for (var i = row - 1; i >= 0; i--) {
                    var nxtpos = $scope.chess['data'].board[i][col];
                    if (nxtpos.data.kingdom != kingdom) {
                        //document.getElementById((i + 1) + letterid[col]).className = "label-box show-newer";
                        $scope.chess['data'].board[i][col].isPath=true;
                        if (nxtpos.data.kingdom != 'e') {
                            break;
                        }
                    }
                    else {
                        break;
                    }
                }
                for (var i = row + 1; i < 7; i++) {
                    var nxtpos = $scope.chess['data'].board[i][col];
                    if (nxtpos.data.kingdom != kingdom) {

                        //document.getElementById((i + 1) + letterid[col]).className = "label-box show-newer";
                        $scope.chess['data'].board[i][col].isPath=true;
                        if (nxtpos.data.kingdom != 'e') {
                            break;
                        }
                    }
                    else {
                        break;
                    }

                }
                for (var i = row + 1, j = col - 1; i < 7 && j >= 0; i++, j--) {
                    var nxtpos = $scope.chess['data'].board[i][j];
                    if (nxtpos.data.kingdom != kingdom) {

                        //document.getElementById((i + 1) + letterid[j]).className = "label-box show-newer";
                        $scope.chess['data'].board[i][j].isPath=true;
                        if (nxtpos.data.kingdom != 'e') {
                            break;
                        }
                    }
                    else {
                        break;
                    }

                }
                for (var i = row - 1, j = col + 1; i >= 0 && j < 8; i--, j++) {
                    var nxtpos = $scope.chess['data'].board[i][j];
                    if (nxtpos.data.kingdom != kingdom) {
                        //document.getElementById((i + 1) + letterid[j]).className = "label-box show-newer";
                        $scope.chess['data'].board[i][j].isPath=true;
                        if (nxtpos.data.kingdom != 'e') {
                            break;
                        }
                    }
                    else {
                        break;
                    }

                }
                for (var i = row - 1, j = col - 1; i >= 0 && j >= 0; i--, j--) {
                    var nxtpos = $scope.chess['data'].board[i][j];
                    if (nxtpos.data.kingdom != kingdom) {

                        //document.getElementById((i + 1) + letterid[j]).className = "label-box show-newer";
                        $scope.chess['data'].board[i][j].isPath=true;
                        if (nxtpos.data.kingdom != 'e') {
                            break;
                        }
                    }
                    else {
                        break;
                    }
                }
                for (var i = row + 1, j = col + 1; i < 7 && j < 8; i++, j++) {
                    var nxtpos = $scope.chess['data'].board[i][j];
                    if (nxtpos.data.kingdom != kingdom) {
                        //document.getElementById((i + 1) + letterid[j]).className = "label-box show-newer";
                        $scope.chess['data'].board[i][j].isPath=true;
                        if (nxtpos.data.kingdom != 'e') {
                            break;
                        }
                    }
                    else {
                        break;
                    }

                }
                break;
        }
    

}
 
var makeMove=function(newPlace){
    
    if(!newPlace.isPath||lastCoin==null)
            return;
    
    $scope.chess['data'].board[newPlace.x][newPlace.y].data=angular.copy(lastCoin.data);
    $scope.chess['data'].board[lastCoin.x][lastCoin.y].data=angular.copy(newPlace.data);
    lastCoin=null;
    resetPath();
}
function getValues(userName,callback) {
            apiService.getValues(userName).then(function (data) {
                
             callback();
                console.log('back... with success');
            });
        }
        
 var resetPath =function(){
    for(var i=0;i<8;i++)
        for(var j=0;j<8;j++)
            $scope.chess['data'].board[i][j].isPath=false;
            
    lastCoin=null;
}
getValues('ram212kumar@gmail.com',function(data){
    var tempChessBoard=dataService.getChessBoard();
    $scope.chess['data']=angular.copy(tempChessBoard);
});

})
.controller('signUpCtrl',function($scope,$state,apiService,dataService,localStorageService) {
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
          var tempObj=localStorageService.get('chess-login');
          if(tempObj!=null)
          $scope.signUP=tempObj;
          console.log(tempObj);
            dataService.updateUserDetails(angular.copy($scope.signUP));
            if(angular.isDefined($scope.signUP.isLoggedIn))
                if($scope.signUP.isLoggedIn)
                    $state.go('home');
        }
        
        function registerUser() {
            $scope.userData.Email = $scope.userData.userName;
            apiService.registerUser(angular.copy($scope.userData)).then(function (data) {
                $scope.signUP.isRegistered = true;
				console.log('***********registered*************');
				$state.go('login');
            }, function (error, status) {
                $scope.signUP.isRegistered = false;
                console.log(status);
            });
        }
        function loginUser() {
            apiService.loginUser($scope.userData).then(function (data) {
                $scope.signUP.isLoggedIn = true;
                $scope.signUP.userName = data.userName;
                $scope.signUP.bearerToken = data.access_token;
                
                dataService.updateUserDetails(angular.copy($scope.signUP));
                
                localStorageService.set('chess-login', angular.copy($scope.signUP));
                
                apiService.setUserReady('ram212kumar@gmail.com');
                $state.go('home',data.userName);
            }, function (error, status) {
                $scope.signUP.isLoggedIn = false;
                console.log(status);
            });
        }
        function getValues() {
            apiService.getValues().then(function (data) {
                $scope.signUP.values = data;
                console.log(data);
                console.log('back... with success');
            });
        }
        
});