Qualtrics.SurveyEngine.addOnload(function()
{
	/*Place your JavaScript here to run when the page loads*/

});

Qualtrics.SurveyEngine.addOnReady(function()
{
	cube_start();
        draw();

});

Qualtrics.SurveyEngine.addOnUnload(function()
{
	/*Place your JavaScript here to run when the page is unloaded*/

});

              var move=0;
        const cube = []; 

        for (var i = 0; i <18; i++) {
            cube[i] = [];
        }

        function cube_start(){
             move=0;
             Qualtrics.SurveyEngine.setEmbeddedData('numOfMoves',move);
            for(var i=0; i<18; i++){
            for(var j=0; j<3; j++){
                if(i<3)cube[i][j]='B';
                if(i>=3&&i<6)cube[i][j]='W';
                if(i>=6&&i<9)cube[i][j]='G';
                if(i>=9&&i<12)cube[i][j]='Y';
                if(i>=12&&i<15)cube[i][j]='R';
                if(i>=15&&i<18)cube[i][j]='O';
                //console.log(cube[i][j]+i+j);
                draw();
                statrtrotation();
                console.log("START // RESET CUBE ")
            }
        }
        }
    
        function draw(){ 
            for(var i=0; i<18; i++){
            for(var j=0; j<3; j++){
                if(cube[i][j]=='B')document.getElementsByClassName("item_id"+i+j)[0].style.background = "#0f5bff";
                if(cube[i][j]=='G')document.getElementsByClassName("item_id"+i+j)[0].style.background = "green";
                if(cube[i][j]=='W')document.getElementsByClassName("item_id"+i+j)[0].style.background = "white";
                if(cube[i][j]=='Y')document.getElementsByClassName("item_id"+i+j)[0].style.background = "yellow";
                if(cube[i][j]=='R')document.getElementsByClassName("item_id"+i+j)[0].style.background = "red";
                if(cube[i][j]=='O')document.getElementsByClassName("item_id"+i+j)[0].style.background = "orange";     
            }
        }
        }
            function MUVE_U(){
                move++;
                console.log(move+"U");
                Qualtrics.SurveyEngine.setEmbeddedData('numOfMoves',move);

                var buffor1=cube[6][0];
                var buffor2=cube[6][1];
                var buffor3=cube[6][2];

                var buffor4=cube[4][0];
                var buffor5=cube[5][2];

                cube[6][0]=cube[14][0];
                cube[6][1]=cube[13][0];
                cube[6][2]=cube[12][0];

                cube[12][0]=cube[2][0];
                cube[13][0]=cube[2][1];
                cube[14][0]=cube[2][2];

                cube[2][0]=cube[17][2];
                cube[2][1]=cube[16][2];
                cube[2][2]=cube[15][2];

                cube[17][2]=buffor3;
                cube[16][2]=buffor2;
                cube[15][2]=buffor1;

                cube[4][0]=cube[5][1];
                cube[5][1]=cube[4][2];
                cube[4][2]=cube[3][1];
                cube[3][1]=buffor4;

                cube[5][2]=cube[3][2];
                cube[3][2]=cube[3][0];
                cube[3][0]=cube[5][0];
                cube[5][0]=buffor5;

                draw();
            }

            function MUVE_Up(){
                move++;
                move=move-3;
                console.log(move+"U'");
                Qualtrics.SurveyEngine.setEmbeddedData('numOfMoves',move);
                MUVE_U();
                MUVE_U();
                MUVE_U();
            }

            function MUVE_R(){
                move++;
                console.log(move+"R");
                Qualtrics.SurveyEngine.setEmbeddedData('numOfMoves',move);

                var buffor1=cube[3][2];
                var buffor2=cube[4][2];
                var buffor3=cube[5][2];

                var buffor4=cube[13][0];
                var buffor5=cube[14][0];

                cube[3][2]=cube[6][2];
                cube[4][2]=cube[7][2];
                cube[5][2]=cube[8][2];

                cube[6][2]=cube[9][2];
                cube[7][2]=cube[10][2];
                cube[8][2]=cube[11][2];

                cube[9][2]=cube[0][2];
                cube[10][2]=cube[1][2];
                cube[11][2]=cube[2][2];

                cube[0][2]=buffor1;
                cube[1][2]=buffor2;
                cube[2][2]=buffor3;

                cube[13][0]=cube[14][1];
                cube[14][1]=cube[13][2];
                cube[13][2]=cube[12][1];
                cube[12][1]=buffor4;

                cube[14][0]=cube[14][2];
                cube[14][2]=cube[12][2];
                cube[12][2]=cube[12][0];
                cube[12][0]=buffor5;
                 
                draw();
            }

            function MUVE_Rp(){
                move++;
                move=move-3;
                console.log(move+"R'");
                Qualtrics.SurveyEngine.setEmbeddedData('numOfMoves',move);
                MUVE_R();
                MUVE_R();
                MUVE_R();
            }

            function MUVE_Lp(){
                move++;
                console.log(move+"L'");
                Qualtrics.SurveyEngine.setEmbeddedData('numOfMoves',move);

                var buffor1=cube[3][0];
                var buffor2=cube[4][0];
                var buffor3=cube[5][0];

                var buffor4=cube[16][2];
                var buffor5=cube[17][2];

                cube[3][0]=cube[6][0];
                cube[4][0]=cube[7][0];
                cube[5][0]=cube[8][0];

                cube[6][0]=cube[9][0];
                cube[7][0]=cube[10][0];
                cube[8][0]=cube[11][0];

                cube[9][0]=cube[0][0];
                cube[10][0]=cube[1][0];
                cube[11][0]=cube[2][0];

                cube[0][0]=buffor1;
                cube[1][0]=buffor2;
                cube[2][0]=buffor3;

                cube[16][2]=cube[17][1];
                cube[17][1]=cube[16][0];
                cube[16][0]=cube[15][1];
                cube[15][1]=buffor4;

                cube[17][2]=cube[17][0];
                cube[17][0]=cube[15][0];
                cube[15][0]=cube[15][2];
                cube[15][2]=buffor5;

                draw();
            }

            function MUVE_L(){
                move++;
                move=move-3;
                console.log(move+"L");
                Qualtrics.SurveyEngine.setEmbeddedData('numOfMoves',move);
                MUVE_Lp();
                MUVE_Lp();
                MUVE_Lp();
            }

            function MUVE_Dp(){
                move++;
                console.log(move+"Dp");
                Qualtrics.SurveyEngine.setEmbeddedData('numOfMoves',move);

                var buffor1=cube[8][0];
                var buffor2=cube[8][1];
                var buffor3=cube[8][2];

                var buffor4=cube[9][0];
                var buffor5=cube[9][1];

                cube[8][0]=cube[14][2];
                cube[8][1]=cube[13][2];
                cube[8][2]=cube[12][2];

                cube[14][2]=cube[0][2];
                cube[13][2]=cube[0][1];
                cube[12][2]=cube[0][0];

                cube[0][2]=cube[15][0];
                cube[0][1]=cube[16][0];
                cube[0][0]=cube[17][0];

                cube[17][0]=buffor3;
                cube[16][0]=buffor2;
                cube[15][0]=buffor1;

                cube[9][0]=cube[9][2];
                cube[9][2]=cube[11][2];
                cube[11][2]=cube[11][0];
                cube[11][0]=buffor4;

                cube[9][1]=cube[10][2];
                cube[10][2]=cube[11][1];
                cube[11][1]=cube[10][0];
                cube[10][0]=buffor5;

                draw();
            }

            function MUVE_D(){
                move++;
                move=move-3;
                console.log(move+"D");
                Qualtrics.SurveyEngine.setEmbeddedData('numOfMoves',move);
                MUVE_Dp();
                MUVE_Dp();
                MUVE_Dp();
            }

            function MUVE_F(){
                move++;
                console.log(move+"F");
                Qualtrics.SurveyEngine.setEmbeddedData('numOfMoves',move);

                var buffor1=cube[5][0];
                var buffor2=cube[5][1];
                var buffor3=cube[5][2];

                var buffor4=cube[6][0];
                var buffor5=cube[6][1];

                cube[5][0]=cube[17][0];
                cube[5][1]=cube[17][1];
                cube[5][2]=cube[17][2];

                cube[17][2]=cube[9][0];
                cube[17][1]=cube[9][1];
                cube[17][0]=cube[9][2];

                cube[9][0]=cube[14][2];
                cube[9][1]=cube[14][1];
                cube[9][2]=cube[14][0];

                cube[14][0]=buffor1;
                cube[14][1]=buffor2;
                cube[14][2]=buffor3;

                cube[6][0]=cube[8][0];
                cube[8][0]=cube[8][2];
                cube[8][2]=cube[6][2];
                cube[6][2]=buffor4;

                cube[6][1]=cube[7][0];
                cube[7][0]=cube[8][1];
                cube[8][1]=cube[7][2];
                cube[7][2]=buffor5;

                draw();
            }
            function MUVE_Fp(){
                move++;
                move=move-3;
                console.log(move+"F'");
                Qualtrics.SurveyEngine.setEmbeddedData('numOfMoves',move);
                MUVE_F();
                MUVE_F();
                MUVE_F();
            }

            function MUVE_B(){
                move++;
                console.log(move+"B");
                Qualtrics.SurveyEngine.setEmbeddedData('numOfMoves',move);

                var buffor1=cube[3][0];
                var buffor2=cube[3][1];
                var buffor3=cube[3][2];

                var buffor4=cube[2][0];
                var buffor5=cube[2][1];

                cube[3][0]=cube[12][0];
                cube[3][1]=cube[12][1];
                cube[3][2]=cube[12][2];

                cube[12][0]=cube[11][2];
                cube[12][1]=cube[11][1];
                cube[12][2]=cube[11][0];

                cube[11][2]=cube[15][0];
                cube[11][1]=cube[15][1];
                cube[11][0]=cube[15][2];

                cube[15][0]=buffor1;
                cube[15][1]=buffor2;
                cube[15][2]=buffor3;

                cube[2][0]=cube[2][2];
                cube[2][2]=cube[0][2];
                cube[0][2]=cube[0][0];
                cube[0][0]=buffor4;

                cube[2][1]=cube[1][2];
                cube[1][2]=cube[0][1];
                cube[0][1]=cube[1][0];
                cube[1][0]=buffor5;

                draw();
            }

            function MUVE_Bp(){
                move++;
                move=move-3;
                console.log(move+"B'");
                Qualtrics.SurveyEngine.setEmbeddedData('numOfMoves',move);
                MUVE_B();
                MUVE_B();
                MUVE_B();
            }

            function n_of_moves(){ 
                    alert("move: "+move);
                    Qualtrics.SurveyEngine.setEmbeddedData('numOfMoves',move);     
            }

            function SCRAMBLE(){
                const scramb = prompt("Podaj SCRABLA");
                const parts = scramb.split(" ");
                console.log(parts);

                for(var i=0; i<21; i++){
                    if(parts[i]=="U")MUVE_U();
                    if(parts[i]=="U2"){MUVE_U(); MUVE_U(); move--;};
                    if(parts[i]=="U'")MUVE_Up();

                    if(parts[i]=="R")MUVE_R();
                    if(parts[i]=="R2"){MUVE_R(); MUVE_R(); move--;}
                    if(parts[i]=="R'")MUVE_Rp();

                    if(parts[i]=="L")MUVE_L();
                    if(parts[i]=="L2"){MUVE_L(); MUVE_L(); move--;}
                    if(parts[i]=="L'")MUVE_Lp();

                    if(parts[i]=="F")MUVE_F();
                    if(parts[i]=="F2"){MUVE_F(); MUVE_F(); move--;}
                    if(parts[i]=="F'")MUVE_Fp();

                    if(parts[i]=="B")MUVE_B();
                    if(parts[i]=="B2"){MUVE_B(); MUVE_B(); move--;}
                    if(parts[i]=="B'")MUVE_Bp();

                    if(parts[i]=="D")MUVE_D();
                    if(parts[i]=="D2"){MUVE_D(); MUVE_D(); move--;}
                    if(parts[i]=="D'")MUVE_Dp();
                }
            }
            
            var staticY=-30;
            var staticX=-35;

            function rotateL(){
                document.getElementsByClassName("cube")[0].style.transform = "rotateX("+staticX+"deg) rotateY(135deg)";  
                document.getElementsByClassName("left")[0].style.background = "#133114";
                document.getElementsByClassName("right")[0].style.background = "#4CAF50";
                staticY=135;
            }

            function rotateR(){
                document.getElementsByClassName("cube")[0].style.transform = " rotateX("+staticX+"deg) rotateY(-30deg) "
                document.getElementsByClassName("right")[0].style.background = "#133114";
                document.getElementsByClassName("left")[0].style.background = "#4CAF50";
                staticY=-30;
            }

            function rotateD(){
                document.getElementsByClassName("cube")[0].style.transform = " rotateX(35deg) rotateY("+staticY+"deg) ";
                document.getElementsByClassName("down")[0].style.background = "#133114";
                document.getElementsByClassName("up")[0].style.background = "#4CAF50";
                staticX=35;
            }

            function rotateU(){
                document.getElementsByClassName("cube")[0].style.transform = " rotateX(-35deg) rotateY("+staticY+"deg) ";
                document.getElementsByClassName("up")[0].style.background = "#133114";
                document.getElementsByClassName("down")[0].style.background = "#4CAF50";
                staticX=-35;  
            }

            function statrtrotation(){
                document.getElementsByClassName("right")[0].style.background = "#133114";
                document.getElementsByClassName("up")[0].style.background = "#133114";
                document.getElementsByClassName("left")[0].style.background = "#4CAF50";
                document.getElementsByClassName("down")[0].style.background = "#4CAF50";
                rotateU();
                rotateR();
            }

            window.addEventListener('keydown', function(event) {  //KAYBORAD USE
                switch (event.keyCode) {
                    case 76: 
                        MUVE_L();
                    break;
                    case 82: 
                        MUVE_R();
                    break;
                    case 85: 
                        MUVE_U();
                    break;
                    case 68: 
                         MUVE_D();
                    break;
                    case 70: 
                        MUVE_F();
                    break;
                    case 66: 
                        MUVE_B();
                    break;
                }
              }, false);