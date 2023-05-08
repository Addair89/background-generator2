var leftColor = document.querySelector('.left');
var rightColor = document.querySelector('.right');
var body = document.getElementById("body");
var css = document.querySelector('h3');
var button = document.querySelector('button');

changeCss(leftColor.value, rightColor.value);
displayCSS(leftColor.value, rightColor.value);

function randomColor(){
    var randomColor ='#'+Math.floor(Math.random()*16777215).toString(16);
    var randomColor2 ='#'+Math.floor(Math.random()*16777215).toString(16);
    body.style.background = "linear-gradient(to right, " + randomColor + ", " + randomColor2 + ")";
    css.innerHTML = "Css style: linear-gradient: (to right, " + randomColor + ", " + randomColor2 + ");";
    leftColor.value = randomColor;
    rightColor.value = randomColor2;
}
leftColor.addEventListener('input', function(){
    changeCss(leftColor.value, rightColor.value);
    displayCSS(leftColor.value, rightColor.value);  
});

rightColor.addEventListener('input', function(){
    changeCss(leftColor.value, rightColor.value);
    displayCSS(leftColor.value, rightColor.value); 
});

button.addEventListener("click", randomColor);

function changeCss(left, right){
    body.style.background = "linear-gradient(to right, " + leftColor.value + ", " + rightColor.value + ")";
}

function displayCSS(leftValue, rightValue){
    css.innerHTML = "Css style: linear-gradient: (to right, " + leftValue + ", " + rightValue + ");";
}

