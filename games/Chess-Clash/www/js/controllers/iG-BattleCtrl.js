controllers.controller('iG-BattleCtrl', function($scope,$state,$stateParams,localStorageService,chessStorage,dataService) {
//var user=$stateParams.user;
var userDetail=null;
userDetail=localStorageService.get(chessStorage.user);
//if(userDetail==null)
    //$state.go('login');
    var lastCoin=null;
    var newGoldLand ={
            coin:"img/chessImage/blank.png", // coin:"img/chessImage/gold.png",
            kingdom:'e',
            position:''
        };
    var newIceLand ={
        coin:'img/chessImage/blank.png',//coin:'img/chessImage/blue.jpg',
        kingdom:'e',
        position:''
        };
    
$scope.chess={};
$scope.chess['gameOn'] = 'Ramkumar';
	$scope.chess['defaultIce']={
		id:'',
		name:'',
		arrested:{
			count:0,
			coins:[]
		},
		dead:{
			count:0,
			coins:[]
		},
		lastMove:{
			
		}
	};
	$scope.chess['defaultGold']={
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
	$scope.chess['data']=null;
    $scope.chess['onPlay']=null;
  $scope.chess['moves']=[];

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
    //apiService.requestNextMove(position);
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
                
            $scope.chess['moves'].push({
                'source':angular.copy(lastCoin),
                'destination':angular.copy(lockedbut)
            })    
            
            if(lockedbut.data.kingdom=='g')
            {
                $scope.chess['defaultIce'].arrested.coins.push(angular.copy(lockedbut));
                $scope.chess['defaultIce'].arrested.count=$scope.chess['defaultIce'].arrested.coins.length;
                $scope.chess['defaultGold'].dead.coins.push(angular.copy(lockedbut));
                $scope.chess['defaultGold'].dead.count=$scope.chess['defaultGold'].dead.coins.length;
            }
            else  if(lockedbut.data.kingdom=='b')
            {
                $scope.chess['defaultGold'].arrested.coins.push(angular.copy(lockedbut));
                $scope.chess['defaultGold'].arrested.count=$scope.chess['defaultGold'].arrested.coins.length;
                $scope.chess['defaultIce'].dead.coins.push(angular.copy(lockedbut));
                $scope.chess['defaultIce'].dead.count=$scope.chess['defaultIce'].dead.coins.length;
            }
            $scope.chess['data'].board[lockedbut.x][lockedbut.y].data=angular.copy(lastCoin.data);
               if(lastCoin.land=='g')
                    $scope.chess['data'].board[lastCoin.x][lastCoin.y].data=angular.copy(newGoldLand);
               else if(lastCoin.land=='b')
                    $scope.chess['data'].board[lastCoin.x][lastCoin.y].data=angular.copy(newIceLand);
                    
                    
            $scope.chess['onPlay']=angular.copy(lastCoin.data.kingdom);
            resetPath();
          
     }	
    else
    {
        console.log("Same Play :"+($scope.chess['onPlay']==lockedbut.land));
        if($scope.chess['onPlay']==lockedbut.data.kingdom)
            return;
        else
            lastCoin=null;
    
        var kingdom = lockedbut.data.kingdom;
        var position = lockedbut.data.position;
        switch (position) {
            case 's':
                if (kingdom == 'g') {
                    if ($scope.chess['data'].board[row - 1][col].data.kingdom == 'e') {
						$scope.chess['data'].board[row-1][col].isPath=true;
                        if (row == 6) 
                           $scope.chess['data'].board[row-2][col].isPath=$scope.chess['data'].board[row-2][col].data.kingdom == 'e';
                    }
                    if ($scope.chess['data'].board[row - 1][col - 1].data.kingdom != 'e' && $scope.chess['data'].board[row - 1][col - 1].data.kingdom != 'g')
							$scope.chess['data'].board[row-1][col - 1].isPath=true;
                      
                    if ($scope.chess['data'].board[row - 1][col + 1].data.kingdom != 'e'&& $scope.chess['data'].board[row - 1][col + 1].data.kingdom != 'g') 
                            $scope.chess['data'].board[row - 1][col + 1].isPath=true;
                    
                    if(!$scope.chess['data'].board[row-1][col].isPath&&!$scope.chess['data'].board[row-1][col - 1].isPath&&!$scope.chess['data'].board[row - 1][col + 1].isPath)
                            lastCoin=null;
                    else
                            lastCoin=angular.copy(lockedbut);
                }
                else if (kingdom == 'b') {
                    if ($scope.chess['data'].board[row + 1][col].data.kingdom == 'e') {
                        $scope.chess['data'].board[row + 1][col].isPath=true;
                        if (row == 1) 
                            $scope.chess['data'].board[row + 2][col].isPath=$scope.chess['data'].board[row + 2][col].data.kingdom == 'e';
                    }
                    if ($scope.chess['data'].board[row + 1][col - 1].data.kingdom != 'e' && $scope.chess['data'].board[row + 1][col - 1].data.kingdom != 'b') 
                            $scope.chess['data'].board[row + 1][col - 1].isPath=true;
                    
                    if ($scope.chess['data'].board[row + 1][col + 1].data.kingdom != 'e' && $scope.chess['data'].board[row + 1][col + 1].data.kingdom != 'b') 
                            $scope.chess['data'].board[row + 1][col + 1].isPath=true;
                           
                    if(!$scope.chess['data'].board[row + 1][col].isPath&&!$scope.chess['data'].board[row + 1][col - 1].isPath&&!$scope.chess['data'].board[row + 1][col + 1].isPath)
                        lastCoin=null;
                    else
                        lastCoin=angular.copy(lockedbut);
                    
                } break;
            case 'e':
                for (var j = col - 1; j >= 0; j--) {
                    var nxtpos = $scope.chess['data'].board[row][j];
                    if (nxtpos.data.kingdom != kingdom) {
                        $scope.chess['data'].board[row][j].isPath=true;
                      lastCoin=(lastCoin==null)?angular.copy(lockedbut):lastCoin;
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
                       lastCoin=(lastCoin==null)?angular.copy(lockedbut):lastCoin;
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
                       lastCoin=(lastCoin==null)?angular.copy(lockedbut):lastCoin;
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
                       lastCoin=(lastCoin==null)?angular.copy(lockedbut):lastCoin;
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
                       lastCoin=(lastCoin==null)?angular.copy(lockedbut):lastCoin;
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
                      lastCoin=(lastCoin==null)?angular.copy(lockedbut):lastCoin;
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
                        lastCoin=(lastCoin==null)?angular.copy(lockedbut):lastCoin;
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
                          lastCoin=(lastCoin==null)?angular.copy(lockedbut):lastCoin;
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
                        lastCoin=(lastCoin==null)?angular.copy(lockedbut):lastCoin;
                    }

                }

                if (col > 2 && row < 6) {
                    var nxtpos = $scope.chess['data'].board[row + 1][col - 2];
                    if (nxtpos.data.kingdom != kingdom) {
                        $scope.chess['data'].board[row + 1][col - 2].isPath=true;
                        lastCoin=(lastCoin==null)?angular.copy(lockedbut):lastCoin;
                    }

                }

                if (col >0 && row > 1) {
                    if($scope.chess['data'].board[row - 2][col - 1].data.kingdom != kingdom) {
                        $scope.chess['data'].board[row - 2][col - 1].isPath=true;
                        lastCoin=(lastCoin==null)?angular.copy(lockedbut):lastCoin;
                    }
                }
                if (col < 6 && row > 1) {
                    var nxtpos = $scope.chess['data'].board[row - 2][col + 1];
                    if (nxtpos.data.kingdom != kingdom) {
                        //document.getElementById((row - 1) + letterid[col + 1]).className = "label-box show-newer";
                        $scope.chess['data'].board[row - 2][col + 1].isPath=true;
                        lastCoin=(lastCoin==null)?angular.copy(lockedbut):lastCoin;
                    }
                }
                if (row < 6 && col > 0) {
                    var nxtpos = $scope.chess['data'].board[row + 2][col - 1];
                    if (nxtpos.data.kingdom != kingdom) {

                        //document.getElementById((row + 3) + letterid[col - 1]).className = "label-box show-newer";
                        $scope.chess['data'].board[row + 2][col - 1].isPath=true;
                        lastCoin=(lastCoin==null)?angular.copy(lockedbut):lastCoin;
                    }
                }
                if (row < 7 && col < 6) {
                    var nxtpos = $scope.chess['data'].board[row + 1][col + 2];
                    if (nxtpos.data.kingdom != kingdom) {
                        //document.getElementById((row + 2) + letterid[col + 2]).className = "label-box show-newer";
                        $scope.chess['data'].board[row + 1][col + 2].isPath=true;
                        lastCoin=(lastCoin==null)?angular.copy(lockedbut):lastCoin;
                    }
                }
                if (row > 0 && col < 6) {
                    var nxtpos = $scope.chess['data'].board[row - 1][col + 2];
                    if (nxtpos.data.kingdom != kingdom) {

                        //document.getElementById((row) + letterid[col + 2]).className = "label-box show-newer";
                        $scope.chess['data'].board[row - 1][col + 2].isPath=true;
                        lastCoin=(lastCoin==null)?angular.copy(lockedbut):lastCoin;
                    }
                }
                if (row < 6 && col < 7) {
                    var nxtpos = $scope.chess['data'].board[row + 2][col + 1];
                    if (nxtpos.data.kingdom != kingdom) {
                        //document.getElementById((row + 3) + letterid[col + 1]).className = "label-box show-newer";
                        $scope.chess['data'].board[row + 2][col + 1].isPath=true;
                        lastCoin=(lastCoin==null)?angular.copy(lockedbut):lastCoin;
                    }
                }
                break;

            case 'k':
                if (col > 0) {
                    var nxtpos = $scope.chess['data'].board[row][col - 1];
                    if (nxtpos.data.kingdom != kingdom) {

                        //document.getElementById((row + 1) + letterid[col - 1]).className = "label-box show-newer";
                        $scope.chess['data'].board[row][col - 1].isPath=true;
                        lastCoin=(lastCoin==null)?angular.copy(lockedbut):lastCoin;
                    }

                }

                if (col < 7) {
                    var nxtpos = $scope.chess['data'].board[row][col + 1];
                    if (nxtpos.data.kingdom != kingdom) {
                        //document.getElementById((row + 1) + letterid[col + 1]).className = "label-box show-newer";
                        $scope.chess['data'].board[row][col + 1].isPath=true;
                        lastCoin=(lastCoin==null)?angular.copy(lockedbut):lastCoin;
                    }

                }

                if (row > 0) {
                    var nxtpos = $scope.chess['data'].board[row - 1][col];
                    if (nxtpos.data.kingdom != kingdom) {

                        //document.getElementById((row) + letterid[col]).className = "label-box show-newer";
                        $scope.chess['data'].board[row - 1][col].isPath=true;
                        lastCoin=(lastCoin==null)?angular.copy(lockedbut):lastCoin;
                    }
                }
                if (row < 7) {
                    var nxtpos = $scope.chess['data'].board[row + 1][col];
                    if (nxtpos.data.kingdom != kingdom) {
                        //document.getElementById((row + 2) + letterid[col]).className = "label-box show-newer";
                        $scope.chess['data'].board[row + 1][col].isPath=true;
                        lastCoin=(lastCoin==null)?angular.copy(lockedbut):lastCoin;
                    }
                }
                if (row < 7 && col > 0) {
                    var nxtpos = $scope.chess['data'].board[row + 1][col - 1];
                    if (nxtpos.data.kingdom != kingdom) {

                        //document.getElementById((row + 2) + letterid[col - 1]).className = "label-box show-newer";
                        $scope.chess['data'].board[row + 1][col - 1].isPath=true;
                        lastCoin=(lastCoin==null)?angular.copy(lockedbut):lastCoin;
                    }
                }
                if (row > 0 && col < 7) {
                    var nxtpos = $scope.chess['data'].board[row - 1][col + 1];
                    if (nxtpos.data.kingdom != kingdom) {
                        //document.getElementById((row) + letterid[col + 1]).className = "label-box show-newer";
                        $scope.chess['data'].board[row - 1][col + 1].isPath=true;
                        lastCoin=(lastCoin==null)?angular.copy(lockedbut):lastCoin;
                    }
                }
                if (row < 7 && col < 7) {
                    var nxtpos = $scope.chess['data'].board[row + 1][col + 1];
                    if (nxtpos.data.kingdom != kingdom) {

                        //document.getElementById((row + 2) + letterid[col + 1]).className = "label-box show-newer";
                        $scope.chess['data'].board[row + 1][col + 1].isPath=true;
                        lastCoin=(lastCoin==null)?angular.copy(lockedbut):lastCoin;
                    }
                }
                if (row > 0 && col > 0) {
                    var nxtpos = $scope.chess['data'].board[row - 1][col - 1];
                    if (nxtpos.data.kingdom != kingdom) {
                        //document.getElementById((row) + letterid[col - 1]).className = "label-box show-newer";
                        $scope.chess['data'].board[row - 1][col - 1].isPath=true;
                        lastCoin=(lastCoin==null)?angular.copy(lockedbut):lastCoin;
                    }
                }
                break;
            case 'q':
                for (var j = col - 1; j >= 0; j--) {
                    var nxtpos = $scope.chess['data'].board[row][j];
                    if (nxtpos.data.kingdom != kingdom) {

                        //document.getElementById((row + 1) + letterid[j]).className = "label-box show-newer";
                        $scope.chess['data'].board[row][j].isPath=true;
                        lastCoin=(lastCoin==null)?angular.copy(lockedbut):lastCoin;
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
                        lastCoin=(lastCoin==null)?angular.copy(lockedbut):lastCoin;
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
                        lastCoin=(lastCoin==null)?angular.copy(lockedbut):lastCoin;
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
                        lastCoin=(lastCoin==null)?angular.copy(lockedbut):lastCoin;
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
                        lastCoin=(lastCoin==null)?angular.copy(lockedbut):lastCoin;
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
                        lastCoin=(lastCoin==null)?angular.copy(lockedbut):lastCoin;
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
                        lastCoin=(lastCoin==null)?angular.copy(lockedbut):lastCoin;
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
                        lastCoin=(lastCoin==null)?angular.copy(lockedbut):lastCoin;
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
    localStorageService.set(chessStorage.board, angular.copy($scope.chess));
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
            // apiService.getValues(userName).then(function (data) {
            //     
            //  callback();
            //     console.log('back... with success');
            // });
            callback();
        }
        
 var resetPath =function(){
    for(var i=0;i<8;i++)
        for(var j=0;j<8;j++)
            $scope.chess['data'].board[i][j].isPath=false;
            
    lastCoin=null;
}
var board=null;
board=localStorageService.get(chessStorage.board);

if(board==null)
{
getValues('ram212kumar@gmail.com',function(data){
    console.log('***********data************')
    console.log(data);
    var tempChessBoard=dataService.getChessBoard();
    $scope.chess['data']=angular.copy(tempChessBoard);
             localStorageService.set(chessStorage.board, angular.copy($scope.chess));
});
}
else{
     $scope.chess=board;
    console.log('data from local storage');
    console.log(board);
}

})
   