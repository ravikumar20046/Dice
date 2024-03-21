var randomNumber1=Math.random();
randomNumber1=Math.floor((randomNumber1*6)+1);
var randomDiceImage="dice"+randomNumber1+".png";
var image1=document.querySelectorAll("img")[0];
image1.setAttribute("src",randomDiceImage);

var randomNumber2=Math.random();
randomNumber2=Math.floor((randomNumber2*6)+1);
var randomDiceImage1="dice"+randomNumber2+".png";
var image2=document.querySelectorAll("img")[1];
image2.setAttribute("src",randomDiceImage1);

if(randomNumber1==randomNumber2){
    document.querySelector("h1").innerHTML="DRAW!";
}
else if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML="🚩player 1 wins";
}
else{
    document.querySelector("h1").innerHTML="player 2 wins🚩";
}