//hi
var playerTurn = "x";
window.alert(playerTurn);
function setTurn(){
if (playerTurn == "x"){

    playerTurn = "o";
}else{

    playerTurn = "x";
}



}

function tdclick(thisid) {
    thiselement = document.getElementById(thisid);
    //document.getElementByID(thisid)[0].setAttribute("background-color", "blue");
    //lwindow.alert thisid = document.getElementById("r2d1");
    document.getElementById(thisid).innerHTML = "x";
    //window.alert(thisid);



    
    

    
    return 1;              // The function returns the product of p1 and p2
}


function checkWin1() {
    //document.getElementById(thisid).innerHTML =  playerTurn ;
    //document.getElementById(thisid).style.fontSize = "200";
    //document.getElementById(thisid).innerHTML == "x";


    //document.getElementById(r1d1);
    if( document.getElementById("r1d1").innerHTML == "x" && document.getElementById('r1d2').innerHTML == "x" && document.getElementById('r1d3').innerHTML == "x" ){
            window.alert("booya")

    }
    s ='f';


    return 1;
}


function checkWin() {
    //document.getElementById(thisid).innerHTML =  playerTurn ;
    //document.getElementById(thisid).style.fontSize = "50";
    //document.getElementById(thisid).innerHTML == "x";


    //document.getElementById(r1d1);
    if( document.getElementById("r1d1").innerHTML == "x" && document.getElementById('r1d2').innerHTML == "x" && document.getElementById('r1d3').innerHTML == "x" ){

            document.getElementById("r1d1").style.backgroundColor = "green";
            document.getElementById('r1d2').style.backgroundColor = "green";
            document.getElementById('r1d3').style.backgroundColor = "green";
            window.alert("booya");

    }else  if( document.getElementById('r2d1').innerHTML == "x" && document.getElementById('r2d2').innerHTML == "x" && document.getElementById('r2d3').innerHTML == "x" ){
        document.getElementById("r1d1").style.backgroundColor = "green";
        document.getElementById('r1d2').style.backgroundColor = "green";
        document.getElementById('r1d3').style.backgroundColor = "green";
        window.alert("booya");

    } else if( document.getElementById('r3d1').innerHTML == "x" && document.getElementById('r3d2').innerHTML == "x" && document.getElementById('r3d3').innerHTML == "x" ){
        document.getElementById("r1d1").style.backgroundColor = "green";
        document.getElementById('r1d2').style.backgroundColor = "green";
        document.getElementById('r1d3').style.backgroundColor = "green";
        window.alert("booya");

    } else if( document.getElementById('r1d1').innerHTML == "x" && document.getElementById('r2d1').innerHTML == "x" && document.getElementById('r3d1').innerHTML == "x" ){
        document.getElementById("r1d1").style.backgroundColor = "green";
        document.getElementById('r1d2').style.backgroundColor = "green";
        document.getElementById('r1d3').style.backgroundColor = "green";
        window.alert("booya");

    } else if( document.getElementById('r1d2').innerHTML == "x" && document.getElementById('r2d2').innerHTML == "x" && document.getElementById('r3d2').innerHTML == "x" ){
        document.getElementById("r1d1").style.backgroundColor = "green";
        document.getElementById('r1d2').style.backgroundColor = "green";
        document.getElementById('r1d3').style.backgroundColor = "green";
        window.alert("booya");

    } else if( document.getElementById('r1d3').innerHTML == "x" && document.getElementById('r2d3').innerHTML == "x" && document.getElementById('r3d3').innerHTML == "x" ){
        document.getElementById("r1d1").style.backgroundColor = "green";
        document.getElementById('r1d2').style.backgroundColor = "green";
        document.getElementById('r1d3').style.backgroundColor = "green";
        window.alert("booya");

    } else if( document.getElementById('r1d1').innerHTML == "x" && document.getElementById('r2d2').innerHTML == "x" && document.getElementById('r3d3').innerHTML == "x" ){
        document.getElementById("r1d1").style.backgroundColor = "green";
        document.getElementById('r1d2').style.backgroundColor = "green";
        document.getElementById('r1d3').style.backgroundColor = "green";
        window.alert("booya");

    } else if( document.getElementById('r3d1').innerHTML == "x" && document.getElementById('r2d2').innerHTML == "x" && document.getElementById('r1d3').innerHTML == "x" ){
        document.getElementById("r1d1").style.backgroundColor = "green";
        document.getElementById('r1d2').style.backgroundColor = "green";
        document.getElementById('r1d3').style.backgroundColor = "green";
        window.alert("booya");

    }    else     if( document.getElementById("r1d1").innerHTML == "o" && document.getElementById('r1d2').innerHTML == "o" && document.getElementById('r1d3').innerHTML == "o" ){
        document.getElementById("r1d1").style.backgroundColor = "green";
        document.getElementById('r1d2').style.backgroundColor = "green";
        document.getElementById('r1d3').style.backgroundColor = "green";
        window.alert("booya");

}else  if( document.getElementById('r2d1').innerHTML == "o" && document.getElementById('r2d2').innerHTML == "o" && document.getElementById('r2d3').innerHTML == "o" ){
    document.getElementById("r1d1").style.backgroundColor = "green";
    document.getElementById('r1d2').style.backgroundColor = "green";
    document.getElementById('r1d3').style.backgroundColor = "green";
    window.alert("booya");

} else if( document.getElementById('r3d1').innerHTML == "o" && document.getElementById('r3d2').innerHTML == "o" && document.getElementById('r3d3').innerHTML == "o" ){
    document.getElementById("r1d1").style.backgroundColor = "green";
    document.getElementById('r1d2').style.backgroundColor = "green";
    document.getElementById('r1d3').style.backgroundColor = "green";
    window.alert("booya");

} else if( document.getElementById('r1d1').innerHTML == "o" && document.getElementById('r2d1').innerHTML == "o" && document.getElementById('r3d1').innerHTML == "o" ){
    document.getElementById("r1d1").style.backgroundColor = "green";
    document.getElementById('r1d2').style.backgroundColor = "green";
    document.getElementById('r1d3').style.backgroundColor = "green";
    window.alert("booya");

} else if( document.getElementById('r1d2').innerHTML == "o" && document.getElementById('r2d2').innerHTML == "o" && document.getElementById('r3d2').innerHTML == "o" ){
    document.getElementById("r1d1").style.backgroundColor = "green";
    document.getElementById('r1d2').style.backgroundColor = "green";
    document.getElementById('r1d3').style.backgroundColor = "green";
    window.alert("booya");

} else if( document.getElementById('r1d3').innerHTML == "o" && document.getElementById('r2d3').innerHTML == "o" && document.getElementById('r3d3').innerHTML == "o" ){
    document.getElementById("r1d1").style.backgroundColor = "green";
    document.getElementById('r1d2').style.backgroundColor = "green";
    document.getElementById('r1d3').style.backgroundColor = "green";
    window.alert("booya");

} else if( document.getElementById('r1d1').innerHTML == "o" && document.getElementById('r2d2').innerHTML == "o" && document.getElementById('r3d3').innerHTML == "o" ){
    document.getElementById("r1d1").style.backgroundColor = "green";
    document.getElementById('r1d2').style.backgroundColor = "green";
    document.getElementById('r1d3').style.backgroundColor = "green";
    window.alert("booya");

} else if( document.getElementById('r3d1').innerHTML == "o" && document.getElementById('r2d2').innerHTML == "o" && document.getElementById('r1d3').innerHTML == "o" ){
    document.getElementById("r1d1").style.backgroundColor = "green";
    document.getElementById('r1d2').style.backgroundColor = "green";
    document.getElementById('r1d3').style.backgroundColor = "green";
    window.alert("booya");

}    

    s ='f'; 
    

    
    return 1;              // The function returns the product of p1 and p2
}

function turn(thisid) {
    thiselement = document.getElementById(thisid);
    //document.getElementByID(thisid)[0].setAttribute("background-color", "blue");
    //lwindow.alert thisid = document.getElementById("r2d1");

    setTurn();


    document.getElementById(thisid).innerHTML =  playerTurn ;
    document.getElementById(thisid).style.fontSize = "50";
    checkWin();

    //window.alert(thisid);



    
    

    
    return 1;              // The function returns the product of p1 and p2
}