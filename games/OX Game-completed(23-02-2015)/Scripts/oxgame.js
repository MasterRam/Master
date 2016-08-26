var template = new Array();
var player1;
var playcount = 0;
var answer;
function doLoad() {

    for (var i = 0; i < 3; i++)
    {    template[i] = new Array();
        for (var j = 0; j < 3; j++) 
        {
            template[i][j] = 2;
        }

    }
    player1 = true;

}

function doclick(rw, cl) {
    if (playcount < 9) {
        if (player1 == true && template[rw][cl] == 2) {
            template[rw][cl] = 0;
            document.getElementById('r' + (rw + 1) + 'c' + (cl + 1)).innerHTML = 'O';
            document.getElementById('r' + (rw + 1) + 'c' + (cl + 1)).className = "player1 label-box disabled";
            player1 = false;
            playcount++;
        }
        else if (template[rw][cl] == 2 &&player1==false) {
            template[rw][cl] = 1;
            document.getElementById('r' + (rw + 1) + 'c' + (cl + 1)).innerHTML = 'X';
            document.getElementById('r' + (rw + 1) + 'c' + (cl + 1)).className = "player2 label-box disabled";
            playcount++;
            player1 = true;
        }
    }
    if(playcount>=5)
    {
    evaluate();
    }

}
var p1=0;
var p2=0;
function evaluate() {
        evaluaterow();
        evaluatecolumn();
        checkdiagonal();
        if (answer == null) {
            document.getElementById("Result-blog").innerHTML = " Match is draw..! Refresh to play again";
            document.getElementById("Result-blog").className = "Ans-blog-view";
        }
        
    }
        
  

function evaluaterow() {
    
        for (var j = 0; j < 3; j++) {
            if (template[0][j] == 0) {
                p1++;
            }
            else if (template[0][j] == 1) {
                p2++;
            }
            }
           if(checkans()==null)
            for (var j = 0; j < 3; j++) {
                if (template[1][j] == 0) {
                    p1++;
                }
                else if (template[1][j] == 1) {
                    p2++;
                } 
            }
            if (checkans() == null) {
                for (var j = 0; j < 3; j++) {
                    if (template[2][j] == 0) {
                        p1++;
                    }
                    else if (template[2][j] == 1) {
                        p2++;
                    }
                }
                checkans();
            }
    }


function evaluatecolumn() {
    
        for (var j = 0; j < 3; j++) {
            if (template[j][0] == 0) {
                p1++;
            }
            else if (template[j][0] == 1) {
                p2++;
            }
        }
        if (checkans() == null) {
            for (var j = 0; j < 3; j++) {
                if (template[j][1] == 0) {
                    p1++;
                }
                else if (template[j][1] == 1) {
                    p2++;
                }
            }
        }
        if (checkans() == null) {
            for (var j = 0; j < 3; j++) {
                if (template[j][2] == 0) {
                    p1++;
                }
                else if (template[j][2] == 1) {
                    p2++;
                }


            }
            checkans();
        }

}
function checkdiagonal() {
    if (checkans() == null) {
        for (var i = 0; i < 3; i++) {
            if (template[i][i] == 0) {
                p1++;
            }
            else if (template[i][i] == 1) {
                p2++;
            }
        }
    }
    if (checkans() == null) {
        for (var i = 2, j = 0; i >= 0 && j < 3; i--, j++) {
            if (template[j][i] == 0) {
                p1++;
            }
            else if (template[j][i] == 1) {
                p2++;
            }
        }
    }
    checkans();
}

function checkans() {
    if (p1 == 3) {
     
        document.getElementById("Result-blog").innerHTML = " Player 1 is Win! Refresh to play again";
        document.getElementById("Result-blog").className = "Ans-blog-view";
        answer="player1";
    }
    else if (p2 == 3) {
  
        document.getElementById("Result-blog").innerHTML = " Player 2 is Win! Refresh to play again";
        document.getElementById("Result-blog").className = "Ans-blog-view";
        answer = "player2";
    }
    else if(p1<3&&p2<3){
     
        p1 = 0;
        p2 = 0;
        answer = null;
    }
    return answer;
}