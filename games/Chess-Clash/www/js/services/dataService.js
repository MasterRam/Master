services.factory('dataService', [function(){

  var userDetail={
	  online:false,
	  defaultIce:{
		id:'',
		name:'Ice Kingdom',
		arrested:{
			count:0,
			coins:[{}]
		},
		dead:{
			count:0,
			coins:[{}]
		},
		lastMove:[]
	},
	defaultGold:{
		id:'',
		name:'Gold Kingdom',
		arrested:{
			count:0,
			coins:[{}]
		},
		dead:{
			count:0,
			coins:[{}]
		},
		lastMove:[]
	}
  };
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
				{id:'',data:{coin:'img/chessImage/blank.png',kingdom:'e',position:''},isPath:false,land:'b', x:2,y:0},
				{id:'',data:{coin:'img/chessImage/blank.png',kingdom:'e',position:''},isPath:false,land:'g', x:2,y:1},
				{id:'',data:{coin:'img/chessImage/blank.png',kingdom:'e',position:''},isPath:false,land:'b', x:2,y:2},
				{id:'',data:{coin:'img/chessImage/blank.png',kingdom:'e',position:''},isPath:false,land:'g', x:2,y:3},
				{id:'',data:{coin:'img/chessImage/blank.png',kingdom:'e',position:''},isPath:false,land:'b', x:2,y:4},
				{id:'',data:{coin:'img/chessImage/blank.png',kingdom:'e',position:''},isPath:false,land:'g', x:2,y:5},
				{id:'',data:{coin:'img/chessImage/blank.png',kingdom:'e',position:''},isPath:false,land:'b', x:2,y:6},
				{id:'',data:{coin:'img/chessImage/blank.png',kingdom:'e',position:''},isPath:false,land:'g', x:2,y:7}
			],[
				{id:'',data:{coin:'img/chessImage/blank.png',kingdom:'e',position:''},isPath:false,land:'g', x:3,y:0},
				{id:'',data:{coin:'img/chessImage/blank.png',kingdom:'e',position:''},isPath:false,land:'b', x:3,y:1},
				{id:'',data:{coin:'img/chessImage/blank.png',kingdom:'e',position:''},isPath:false,land:'g', x:3,y:2},
				{id:'',data:{coin:'img/chessImage/blank.png',kingdom:'e',position:''},isPath:false,land:'b', x:3,y:3},
				{id:'',data:{coin:'img/chessImage/blank.png',kingdom:'e',position:''},isPath:false,land:'g', x:3,y:4},
				{id:'',data:{coin:'img/chessImage/blank.png',kingdom:'e',position:''},isPath:false,land:'b', x:3,y:5},
				{id:'',data:{coin:'img/chessImage/blank.png',kingdom:'e',position:''},isPath:false,land:'g', x:3,y:6},
				{id:'',data:{coin:'img/chessImage/blank.png',kingdom:'e',position:''},isPath:false,land:'b', x:3,y:7}
			],[
				{id:'',data:{coin:'img/chessImage/blank.png',kingdom:'e',position:''},isPath:false,land:'b', x:4,y:0},
				{id:'',data:{coin:'img/chessImage/blank.png',kingdom:'e',position:''},isPath:false,land:'g', x:4,y:1},
				{id:'',data:{coin:'img/chessImage/blank.png',kingdom:'e',position:''},isPath:false,land:'b', x:4,y:2},
				{id:'',data:{coin:'img/chessImage/blank.png',kingdom:'e',position:''},isPath:false,land:'g', x:4,y:3},
				{id:'',data:{coin:'img/chessImage/blank.png',kingdom:'e',position:''},isPath:false,land:'b', x:4,y:4},
				{id:'',data:{coin:'img/chessImage/blank.png',kingdom:'e',position:''},isPath:false,land:'g', x:4,y:5},
				{id:'',data:{coin:'img/chessImage/blank.png',kingdom:'e',position:''},isPath:false,land:'b', x:4,y:6},
				{id:'',data:{coin:'img/chessImage/blank.png',kingdom:'e',position:''},isPath:false,land:'g', x:4,y:7}
			],[
				{id:'',data:{coin:'img/chessImage/blank.png',kingdom:'e',position:''},isPath:false,land:'g', x:5,y:0},
				{id:'',data:{coin:'img/chessImage/blank.png',kingdom:'e',position:''},isPath:false,land:'b', x:5,y:1},
				{id:'',data:{coin:'img/chessImage/blank.png',kingdom:'e',position:''},isPath:false,land:'g', x:5,y:2},
				{id:'',data:{coin:'img/chessImage/blank.png',kingdom:'e',position:''},isPath:false,land:'b', x:5,y:3},
				{id:'',data:{coin:'img/chessImage/blank.png',kingdom:'e',position:''},isPath:false,land:'g', x:5,y:4},
				{id:'',data:{coin:'img/chessImage/blank.png',kingdom:'e',position:''},isPath:false,land:'b', x:5,y:5},
				{id:'',data:{coin:'img/chessImage/blank.png',kingdom:'e',position:''},isPath:false,land:'g', x:5,y:6},
				{id:'',data:{coin:'img/chessImage/blank.png',kingdom:'e',position:''},isPath:false,land:'b', x:5,y:7}
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
}])

/* var chessBoard={
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
	}; */