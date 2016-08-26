var locked = false;
var lockedCell = null;
var releaseCell = null;
var chessObj = null;
var arrobj = null;
var predictobj = null;
var player1 = true;
var letterid = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
function ChessLoad() {
    setpredictobj();
    setarrobj();
   
    for (i = 1; i <= 8; i = i + 2) {
        document.getElementById(i + 'a').src = "chessImage/blue.jpg";
        document.getElementById(i + 'a').alt ="blue";
        document.getElementById(i + 'b').src = "chessImage/gold.png";
        document.getElementById(i + 'b').alt = "gold";
        document.getElementById(i + 'c').src = "chessImage/blue.jpg";
        document.getElementById(i + 'c').alt = "blue";
        document.getElementById(i + 'd').src = "chessImage/gold.png";
        document.getElementById(i + 'd').alt = "gold";
        document.getElementById(i + 'e').src = "chessImage/blue.jpg";
        document.getElementById(i + 'e').alt = "blue";
        document.getElementById(i + 'f').src = "chessImage/gold.png";
        document.getElementById(i + 'f').alt = "gold";
        document.getElementById(i + 'g').src = "chessImage/blue.jpg";
        document.getElementById(i + 'g').alt = "blue";
        document.getElementById(i + 'h').src = "chessImage/gold.png";
        document.getElementById(i + 'h').alt = "gold";
        document.getElementById((i + 1) + 'a').src = "chessImage/gold.png";
        document.getElementById((i + 1) + 'a').alt = "gold";
        document.getElementById((i + 1) + 'b').src = "chessImage/blue.jpg";
        document.getElementById((i + 1) + 'b').alt = "blue";
        document.getElementById((i + 1) + 'c').src = "chessImage/gold.png";
        document.getElementById((i + 1) + 'c').alt = "gold";
        document.getElementById((i + 1) + 'd').src = "chessImage/blue.jpg";
        document.getElementById((i + 1) + 'd').alt = "blue";
        document.getElementById((i + 1) + 'e').src = "chessImage/gold.png";
        document.getElementById((i + 1) + 'e').alt = "gold";
        document.getElementById((i + 1) + 'f').src = "chessImage/blue.jpg";
        document.getElementById((i + 1) + 'f').alt = "blue";
        document.getElementById((i + 1) + 'g').src = "chessImage/gold.png";
        document.getElementById((i + 1) + 'g').alt = "gold";
        document.getElementById((i + 1) + 'h').src = "chessImage/blue.jpg";
        document.getElementById((i + 1) + 'h').alt = "blue";

    }
    setIcon();
    
    
}

function setarrobj() {
    arrobj = new Array();
    for (var i = 0; i < 8; i++) {

        arrobj[i] = new Array(8);
    }
    for (var i = 0; i < 8; i++) {
        for (j = 0; j < 8; j++) {
            arrobj[i][j] = null;
        }
    }
}
function setpredictobj() {
    predictobj = new Array();
    for (var i = 0; i < 8; i++) {

        predictobj[i] = new Array(8);
    }
    for (var i = 0; i < 8; i++) {
        for (j = 0; j < 8; j++) {
            predictobj[i][j] = 0;
        }
    }
}
function ReloadStyle() {
   
    for (var i = 1; i <= 8; i = i + 2) {
        document.getElementById(i + 'a').className = "label-box";
        document.getElementById(i + 'b').className = "label-box";
        document.getElementById(i + 'c').className = "label-box";
        document.getElementById(i + 'd').className = "label-box";
        document.getElementById(i + 'e').className = "label-box";
        document.getElementById(i + 'f').className = "label-box";
        document.getElementById(i + 'g').className = "label-box";
        document.getElementById(i + 'h').className = "label-box";
        document.getElementById((i + 1) + 'a').className = "label-box";
        document.getElementById((i + 1) + 'b').className = "label-box";
        document.getElementById((i + 1) + 'c').className = "label-box";
        document.getElementById((i + 1) + 'd').className = "label-box";
        document.getElementById((i + 1) + 'e').className = "label-box";
        document.getElementById((i + 1) + 'f').className = "label-box";
        document.getElementById((i + 1) + 'g').className = "label-box";
        document.getElementById((i + 1) + 'h').className = "label-box";
        
    }
   
}

function setIcon() {
    document.getElementById(1 + 'a').src = "chessImage/whiteEle.ico";
    arrobj[0][0] = 'ble';
    document.getElementById(1 + 'b').src = "chessImage/whiteHor.ico";
    arrobj[0][1] ='blh' ;
    document.getElementById(1 + 'c').src = "chessImage/whiteBis.ico";
    arrobj[0][2] = 'blb';
    document.getElementById(1 + 'd').src = "chessImage/whiteQue.ico";
    arrobj[0][3] = 'bq'
    document.getElementById(1 + 'e').src = "chessImage/whiteKin.ico";
    arrobj[0][4] = 'bk';
    document.getElementById(1 + 'f').src = "chessImage/whiteBis.ico";
    arrobj[0][5] = 'brb';
    document.getElementById(1 + 'g').src = "chessImage/whiteHor.ico";
    arrobj[0][6] = 'brh';
    document.getElementById(1 + 'h').src = "chessImage/whiteEle.ico";
    arrobj[0][7] = 'bre';
    document.getElementById((2) + 'a').src = "chessImage/whiteSol.ico";
    arrobj[1][0] = 'bl3s';
    document.getElementById((2) + 'b').src = "chessImage/whiteSol.ico";
    arrobj[1][1] = 'bl2s';
    document.getElementById((2) + 'c').src = "chessImage/whiteSol.ico";
    arrobj[1][2] = 'bl1s';
    document.getElementById((2) + 'd').src = "chessImage/whiteSol.ico";
    arrobj[1][3] = 'bl0s'
    document.getElementById((2) + 'e').src = "chessImage/whiteSol.ico";
    arrobj[1][4] = 'br0s'
    document.getElementById((2) + 'f').src = "chessImage/whiteSol.ico";
    arrobj[1][5] = 'br1s';
    document.getElementById((2) + 'g').src = "chessImage/whiteSol.ico";
    arrobj[1][6] = 'br2s';
    document.getElementById((2) + 'h').src = "chessImage/whiteSol.ico";
    arrobj[1][7] = 'br3s';
    document.getElementById(7 + 'a').src = "chessImage/blackSol.ico";
    arrobj[6][0] = 'gl3s';
    document.getElementById(7 + 'b').src = "chessImage/blackSol.ico";
    arrobj[6][1] = 'gl2s';
    document.getElementById(7 + 'c').src = "chessImage/blackSol.ico";
    arrobj[6][2] = 'gl1s';
    document.getElementById(7 + 'd').src = "chessImage/blackSol.ico";
    arrobj[6][3] = 'gl0s';
    document.getElementById(7 + 'e').src = "chessImage/blackSol.ico";
    arrobj[6][4] = 'gr0s'
    document.getElementById(7 + 'f').src = "chessImage/blackSol.ico";
    arrobj[6][5] = 'gr1s';
    document.getElementById(7 + 'g').src = "chessImage/blackSol.ico";
    arrobj[6][6] = 'gr2s';
    document.getElementById(7 + 'h').src = "chessImage/blackSol.ico";
    arrobj[6][7] = 'gr3s'
    document.getElementById((7 + 1) + 'a').src = "chessImage/blackEle.ico";
    arrobj[7][0] = 'gle';
    document.getElementById((7 + 1) + 'b').src = "chessImage/blackHor.ico";
    arrobj[7][1] = 'glh';
    document.getElementById((7 + 1) + 'c').src = "chessImage/blackBis.ico";
    arrobj[7][2] = 'glb';
    document.getElementById((7 + 1) + 'd').src = "chessImage/blackQue.ico";
  arrobj[7][3] = 'gq';
    document.getElementById((7 + 1) + 'e').src = "chessImage/BlackKin.ico";
  arrobj[7][4] = 'gk';
    document.getElementById((7 + 1) + 'f').src = "chessImage/blackBis.ico";
arrobj[7][5] = 'grb';
        document.getElementById((7 + 1) + 'g').src = "chessImage/blackHor.ico";
    arrobj[7][6] = 'grh';
    document.getElementById((7 + 1) + 'h').src = "chessImage/blackEle.ico";
    arrobj[7][7] = 'gre';
}
function doclick(cellId) {
    if (locked == false) {
        var src = document.getElementById(cellId).getAttribute('src');

        if (src != "chessImage/blue.jpg" && src != "chessImage/gold.png") {
        var chkKing=CheckKingdom(cellId);
        if (player1 == true && chkKing == 'b') {
            locked = true;
            lockedCell = cellId;
            document.getElementById(cellId).className = "label-box lock-style";
            setReleaseBut(lockedCell);
            player1 = false;
        } else if (chkKing == 'g' && player1 == false) {
            locked = true;
            lockedCell = cellId;
            document.getElementById(cellId).className = "label-box lock-style";
            setReleaseBut(lockedCell);
            player1 = true;
        }
        }

    }
    else {
        
        if (cellId == lockedCell) {
            document.getElementById(lockedCell).className = "label-box";
            document.getElementById(cellId).src = document.getElementById(lockedCell).src;
            locked == false;
            ReloadStyle();
            setpredictobj();
           
        }
        else {

            if (document.getElementById(cellId).getAttribute('src') != document.getElementById(lockedCell).getAttribute('src')) {
                locked = false;
                changePosition(lockedCell, cellId); 
            }
            ReloadStyle();
            setpredictobj();
           
        }
    }

}
function getkingdom(piece) {
    var kingdom = piece.substr(0, 1);
    return kingdom;

}
function CheckKingdom(lockedbut) {
var rowvar = lockedbut.substr(0, 1);
    var colvar = lockedbut.substr(1, 1);
    var row = parseInt(rowvar)-1;
    var col = letterid.indexOf(colvar);
    var kingdom;
    if (arrobj[row][col] != null) {

        var selectedPiece = arrobj[row][col] + "";
         kingdom = selectedPiece.substr(0, 1);
    }
    return kingdom;
}
function setReleaseBut(lockedbut)
{
    var rowvar = lockedbut.substr(0, 1);
    var colvar = lockedbut.substr(1, 1);
    var row = parseInt(rowvar)-1;
    var col = letterid.indexOf(colvar);
    if (arrobj[row][col] != null) {
        
        var selectedPiece = arrobj[row][col]+"";
        var kingdom = selectedPiece.substr(0, 1);
        var position = selectedPiece.substr(1, 1);
        var strength = selectedPiece.substr(selectedPiece.length - 1, 1);
        switch (strength) {
            case 's':
                if (kingdom == 'g') {
                    if (arrobj[row - 1][col] == null) {

                        document.getElementById(row + letterid[col]).className = "label-box show-newer";
                        predictobj[row - 1][col] = 1;
                        if (row == 6) {
                            document.getElementById((row - 1) + letterid[col]).className = "label-box show-newer";
                            predictobj[row - 2][col] = 1;
                        }
                    }
                    if (arrobj[row - 1][col - 1] != null) {
                        var ktype = getkingdom(arrobj[row - 1][col - 1]);
                        if (ktype != 'g') {
                            document.getElementById(row + letterid[col - 1]).className = "label-box show-newer";
                            predictobj[row - 1][col - 1] = 1;
                        }
                    }
                    if (arrobj[row - 1][col + 1] != null) {
                        var ktype = getkingdom(arrobj[row - 1][col + 1]);
                        if (ktype != 'g') {
                            document.getElementById(row + letterid[col + 1]).className = "label-box show-newer";
                            predictobj[row - 1][col + 1] = 1;
                        }
                    }
                }
                else if (kingdom == 'b') {
                    if (arrobj[row + 1][col] == null) {
                        document.getElementById((row + 2) + letterid[col]).className = "label-box show-newer";
                        predictobj[row + 1][col] = 1;
                        if (row == 1) {
                            document.getElementById((row + 3) + letterid[col]).className = "label-box show-newer";
                            predictobj[row + 2][col] = 1;
                        }
                    }
                    if (arrobj[row + 1][col - 1] != null) {
                        var ktype = getkingdom(arrobj[row + 1][col - 1]);
                        if (ktype != 'b') {
                            document.getElementById((row + 2) + letterid[col - 1]).className = "label-box show-newer";
                            predictobj[row + 1][col - 1] = 1;
                        }
                    }
                    if (arrobj[row + 1][col + 1] != null) {
                        var ktype = getkingdom(arrobj[row + 1][col + 1]);
                        if (ktype != 'b') {
                            document.getElementById((row + 2) + letterid[col + 1]).className = "label-box show-newer";
                            predictobj[row + 1][col + 1] = 1;
                        }
                    }
                } break;
            case 'e':
                for (var j = col - 1; j >= 0; j--) {
                    var nxtpos = arrobj[row][j];
                    if (nxtpos == null || nxtpos.substr(0, 1) != kingdom) {
                        document.getElementById((row + 1) + letterid[j]).className = "label-box show-newer";
                        predictobj[row][j] = 1;
                        if (nxtpos != null) {
                            break;
                        }

                    }
                    else {
                        break;
                    }

                }

                for (var j = col + 1; j < 8; j++) {
                    var nxtpos = arrobj[row][j];
                    if (nxtpos == null || nxtpos.substr(0, 1) != kingdom) {

                        document.getElementById((row + 1) + letterid[j]).className = "label-box show-newer";
                        predictobj[row][j] = 1;
                        if (nxtpos != null) {
                            break;
                        }

                    }
                    else
                    { break; }
                }

                for (var i = row - 1; i >= 0; i--) {
                    var nxtpos = arrobj[i][col];
                    if (nxtpos == null || nxtpos.substr(0, 1) != kingdom) {

                        document.getElementById((i + 1) + letterid[col]).className = "label-box show-newer";
                        predictobj[i][col] = 1;
                        if (nxtpos != null) {
                            break;
                        }

                    }
                    else {
                        break;
                    }
                }
                for (var i = row + 1; i < 7; i++) {
                    var nxtpos = arrobj[i][col];
                    if (nxtpos == null || nxtpos.substr(0, 1) != kingdom) {

                        document.getElementById((i + 1) + letterid[col]).className = "label-box show-newer";
                        predictobj[i][col] = 1;
                        if (nxtpos != null) {
                            break;
                        }

                    }
                    else {
                        break;
                    }
                } break;
            case 'b':
                for (var i = row + 1, j = col - 1; i < 7 && j >= 0; i++, j--) {
                    var nxtpos = arrobj[i][j];

                    if (nxtpos == null || nxtpos.substr(0, 1) != kingdom) {

                        document.getElementById((i + 1) + letterid[j]).className = "label-box show-newer";
                        predictobj[i][j] = 1;
                        if (nxtpos != null) {
                            break;
                        }

                    }
                    else {
                        break;
                    }

                }
                for (var i = row - 1, j = col + 1; i >= 0 && j < 8; i--, j++) {
                    var nxtpos = arrobj[i][j];
                    if (nxtpos == null || nxtpos.substr(0, 1) != kingdom) {

                        document.getElementById((i + 1) + letterid[j]).className = "label-box show-newer";
                        predictobj[i][j] = 1;
                        if (nxtpos != null) {
                            break;
                        }

                    } else {
                        break;
                    }

                }
                for (var i = row - 1, j = col - 1; i >= 0 && j >= 0; i--, j--) {
                    var nxtpos = arrobj[i][j];
                    if (nxtpos == null || nxtpos.substr(0, 1) != kingdom) {

                        document.getElementById((i + 1) + letterid[j]).className = "label-box show-newer";
                        predictobj[i][j] = 1;
                        if (nxtpos != null) {
                            break;
                        }

                    } else {
                        break;
                    }

                }
                for (var i = row + 1, j = col + 1; i >= 0 && j < 8; i++, j++) {
                    var nxtpos = arrobj[i][j];
                    if (nxtpos == null || nxtpos.substr(0, 1) != kingdom) {

                        document.getElementById((i + 1) + letterid[j]).className = "label-box show-newer";
                        predictobj[i][j] = 1;
                        if (nxtpos != null) {
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
                    var nxtpos = arrobj[row - 1][col - 2];
                    if (nxtpos == null || nxtpos.substr(0, 1) != kingdom) {

                        document.getElementById((row) + letterid[col - 2]).className = "label-box show-newer";
                        predictobj[row - 1][col - 2] = 1;
                    }

                }

                if (col > 2 && row < 6) {
                    var nxtpos = arrobj[row + 1][col - 2];
                    if (nxtpos == null || nxtpos.substr(0, 1) != kingdom) {
                        document.getElementById((row + 2) + letterid[col - 2]).className = "label-box show-newer";
                        predictobj[row + 1][col - 2] = 1;
                    }

                }

                if (col >0 && row > 1) {
                    var nxtpos = arrobj[row - 2][col - 1];
                    if (nxtpos == null || nxtpos.substr(0, 1) != kingdom) {

                        document.getElementById((row - 1) + letterid[col - 1]).className = "label-box show-newer";
                        predictobj[row - 2][col - 1] = 1;
                    }
                }
                if (col < 6 && row > 1) {
                    var nxtpos = arrobj[row - 2][col + 1];
                    if (nxtpos == null || nxtpos.substr(0, 1) != kingdom) {
                        document.getElementById((row - 1) + letterid[col + 1]).className = "label-box show-newer";
                        predictobj[row - 2][col + 1] = 1;
                    }
                }
                if (row < 6 && col > 0) {
                    var nxtpos = arrobj[row + 2][col - 1];
                    if (nxtpos == null || nxtpos.substr(0, 1) != kingdom) {

                        document.getElementById((row + 3) + letterid[col - 1]).className = "label-box show-newer";
                        predictobj[row + 2][col - 1] = 1;
                    }
                }
                if (row < 7 && col < 6) {
                    var nxtpos = arrobj[row + 1][col + 2];
                    if (nxtpos == null || nxtpos.substr(0, 1) != kingdom) {
                        document.getElementById((row + 2) + letterid[col + 2]).className = "label-box show-newer";
                        predictobj[row + 1][col + 2] = 1;
                    }
                }
                if (row > 0 && col < 6) {
                    var nxtpos = arrobj[row - 1][col + 2];
                    if (nxtpos == null || nxtpos.substr(0, 1) != kingdom) {

                        document.getElementById((row) + letterid[col + 2]).className = "label-box show-newer";
                        predictobj[row - 1][col + 2] = 1;
                    }
                }
                if (row < 6 && col < 7) {
                    var nxtpos = arrobj[row + 2][col + 1];
                    if (nxtpos == null || nxtpos.substr(0, 1) != kingdom) {
                        document.getElementById((row + 3) + letterid[col + 1]).className = "label-box show-newer";
                        predictobj[row + 2][col + 1] = 1;
                    }
                }
                break;

            case 'k':
                if (col > 0) {
                    var nxtpos = arrobj[row][col - 1];
                    if (nxtpos == null || nxtpos.substr(0, 1) != kingdom) {

                        document.getElementById((row + 1) + letterid[col - 1]).className = "label-box show-newer";
                        predictobj[row][col - 1] = 1;
                    }

                }

                if (col < 7) {
                    var nxtpos = arrobj[row][col + 1];
                    if (nxtpos == null || nxtpos.substr(0, 1) != kingdom) {
                        document.getElementById((row + 1) + letterid[col + 1]).className = "label-box show-newer";
                        predictobj[row][col + 1] = 1;
                    }

                }

                if (row > 0) {
                    var nxtpos = arrobj[row - 1][col];
                    if (nxtpos == null || nxtpos.substr(0, 1) != kingdom) {

                        document.getElementById((row) + letterid[col]).className = "label-box show-newer";
                        predictobj[row - 1][col] = 1;
                    }
                }
                if (row < 7) {
                    var nxtpos = arrobj[row + 1][col];
                    if (nxtpos == null || nxtpos.substr(0, 1) != kingdom) {
                        document.getElementById((row + 2) + letterid[col]).className = "label-box show-newer";
                        predictobj[row + 1][col] = 1;
                    }
                }
                if (row < 7 && col > 0) {
                    var nxtpos = arrobj[row + 1][col - 1];
                    if (nxtpos == null || nxtpos.substr(0, 1) != kingdom) {

                        document.getElementById((row + 2) + letterid[col - 1]).className = "label-box show-newer";
                        predictobj[row + 1][col - 1] = 1;
                    }
                }
                if (row > 0 && col < 7) {
                    var nxtpos = arrobj[row - 1][col + 1];
                    if (nxtpos == null || nxtpos.substr(0, 1) != kingdom) {
                        document.getElementById((row) + letterid[col + 1]).className = "label-box show-newer";
                        predictobj[row - 1][col + 1] = 1;
                    }
                }
                if (row < 7 && col < 7) {
                    var nxtpos = arrobj[row + 1][col + 1];
                    if (nxtpos == null || nxtpos.substr(0, 1) != kingdom) {

                        document.getElementById((row + 2) + letterid[col + 1]).className = "label-box show-newer";
                        predictobj[row + 1][col + 1] = 1;
                    }
                }
                if (row > 0 && col > 0) {
                    var nxtpos = arrobj[row - 1][col - 1];
                    if (nxtpos == null || nxtpos.substr(0, 1) != kingdom) {
                        document.getElementById((row) + letterid[col - 1]).className = "label-box show-newer";
                        predictobj[row - 1][col - 1] = 1;
                    }
                }
                break;
            case 'q':
                for (var j = col - 1; j >= 0; j--) {
                    var nxtpos = arrobj[row][j];
                    if (nxtpos == null || nxtpos.substr(0, 1) != kingdom) {

                        document.getElementById((row + 1) + letterid[j]).className = "label-box show-newer";
                        predictobj[row][j] = 1;
                        if (nxtpos != null) {
                            break;
                        }

                    }
                    else  {
                        break;
                    }

                }

                for (var j = col + 1; j < 8; j++) {
                    var nxtpos = arrobj[row][j];
                    if (nxtpos == null || nxtpos.substr(0, 1) != kingdom) {

                        document.getElementById((row + 1) + letterid[j]).className = "label-box show-newer";
                        predictobj[row][j] = 1;
                        if (nxtpos != null) {
                            break;
                        }
                    }
                    else {
                        break;
                    }

                }

                for (var i = row - 1; i >= 0; i--) {
                    var nxtpos = arrobj[i][col];
                    if (nxtpos == null || nxtpos.substr(0, 1) != kingdom) {
                        document.getElementById((i + 1) + letterid[col]).className = "label-box show-newer";
                        predictobj[i][col] = 1;
                        if (nxtpos != null) {
                            break;
                        }
                    }
                    else {
                        break;
                    }
                }
                for (var i = row + 1; i < 7; i++) {
                    var nxtpos = arrobj[i][col];
                    if (nxtpos == null || nxtpos.substr(0, 1) != kingdom) {

                        document.getElementById((i + 1) + letterid[col]).className = "label-box show-newer";
                        predictobj[i][col] = 1;
                        if (nxtpos != null) {
                            break;
                        }
                    }
                    else {
                        break;
                    }

                }
                for (var i = row + 1, j = col - 1; i < 7 && j >= 0; i++, j--) {
                    var nxtpos = arrobj[i][j];
                    if (nxtpos == null || nxtpos.substr(0, 1) != kingdom) {

                        document.getElementById((i + 1) + letterid[j]).className = "label-box show-newer";
                        predictobj[i][j] = 1;
                        if (nxtpos != null) {
                            break;
                        }
                    }
                    else {
                        break;
                    }

                }
                for (var i = row - 1, j = col + 1; i >= 0 && j < 8; i--, j++) {
                    var nxtpos = arrobj[i][j];
                    if (nxtpos == null || nxtpos.substr(0, 1) != kingdom) {
                        document.getElementById((i + 1) + letterid[j]).className = "label-box show-newer";
                        predictobj[i][j] = 1;
                        if (nxtpos != null) {
                            break;
                        }
                    }
                    else {
                        break;
                    }

                }
                for (var i = row - 1, j = col - 1; i >= 0 && j >= 0; i--, j--) {
                    var nxtpos = arrobj[i][j];
                    if (nxtpos == null || nxtpos.substr(0, 1) != kingdom) {

                        document.getElementById((i + 1) + letterid[j]).className = "label-box show-newer";
                        predictobj[i][j] = 1;
                        if (nxtpos != null) {
                            break;
                        }
                    }
                    else {
                        break;
                    }
                }
                for (var i = row + 1, j = col + 1; i < 7 && j < 8; i++, j++) {
                    var nxtpos = arrobj[i][j];
                    if (nxtpos == null || nxtpos.substr(0, 1) != kingdom) {
                        document.getElementById((i + 1) + letterid[j]).className = "label-box show-newer";
                        predictobj[i][j] = 1;
                        if (nxtpos != null) {
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

}
function changePosition(oldPos, newPos) {
    var oldrowvar = oldPos.substr(0, 1);
    var oldcolvar = oldPos.substr(1, 1);
    var oldrow = parseInt(oldrowvar) - 1;
    var oldcol = letterid.indexOf(oldcolvar);
    var newrowvar = newPos.substr(0, 1);
    var newcolvar = newPos.substr(1, 1);
    var newrow = parseInt(newrowvar) - 1;
    var newcol = letterid.indexOf(newcolvar);
    if (parseInt(predictobj[newrow][newcol]) == 1) {
        var tmplockersrc = document.getElementById(oldPos).src;
        var imagesrc = document.getElementById(newPos).src;
        var releaseAlt = document.getElementById(oldPos).alt;
        if (releaseAlt == 'blue') {
            document.getElementById(oldPos).src = "chessImage/blue.jpg";
        }
        else {
            document.getElementById(oldPos).src = "chessImage/gold.png";
        }
        document.getElementById(oldPos).className = "label-box";
        document.getElementById(newPos).src = tmplockersrc;
        var oldpiece = arrobj[oldrow][oldcol] + "";
        var tmpkingdom = oldpiece.substr(0, 1);
        if (arrobj[newrow][newcol] != null) {
            moveRejected(imagesrc, tmpkingdom);
        }
        arrobj[oldrow][oldcol] = null;
        arrobj[newrow][newcol] = oldpiece;
        
        
        setpredictobj();
    }
    else {
        alert("It is wrong move");
    }


}
function moveRejected(imagesrc,kingdom)
{
 if (imagesrc != 'chessImage/blue.jpg' && imagesrc != 'chessImage/gold.png') {
var image=document.createElement('img');
image.setAttribute('src', imagesrc);
image.className = "rejected-piece";
var blue = document.getElementById("kingblue");
var gold = document.getElementById("kinggold");
if (kingdom == 'g') {
    gold.appendChild(image);
}
else if (kingdom == 'b') {
blue.appendChild(image);
}
}
}