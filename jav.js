var imgLent = document.getElementsByClassName("lent")[0]
var imgDiv = document.getElementsByClassName("team");
var plus = 0;

function goRight() {
    plus += 2*imgDiv[0].clientWidth;
    imgLent.style.right = plus + "px"
     
    if (parseFloat(imgLent.style.right) > 2*parseFloat(imgDiv[0].clientWidth)) {
        imgLent.style.right = 0 + "px"
        plus = 0;
    }
    else {
    plus += 2*imgDiv[0].clientWidth;
    }
}

function goLeft() 
{
    if (imgLent.style.right == "0px") {
        plus = 2*parseFloat(imgDiv[0].clientWidth);
    }
    else {
        plus = 0;
    }
    imgLent.style.right=plus +"px";
}