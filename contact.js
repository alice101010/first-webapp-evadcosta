let submitReview = document.getElementById("submitReview");
let submitRate = document.getElementById("rating");
let inputField = document.getElementById("review");

let stars = document.getElementsByClassName("fa fa-star");

let star1 = document.getElementById("s1");
let star2 = document.getElementById("s2");
let star3 = document.getElementById("s3");
let star4 = document.getElementById("s4");
let star5 = document.getElementById("s5");

star1.addEventListener("click", function (){
    starClick1();
});
star2.addEventListener("click", function (){
    starClick2();
});
star3.addEventListener("click", function (){
    starClick3();
});
star4.addEventListener("click", function (){
    starClick4();
});
star5.addEventListener("click", function (){
    starClick5();
});

submitReview.addEventListener("click", function(){
    submit();
});

submitRate.addEventListener("click", function(){
    submitRating();
});

function submit(){
    document.getElementById("reply2").innerHTML = "Thank you for your valued input! We will take advice in future developments of the app ";
    inputField.value = " "; 
}

function submitRating(){
    document.getElementById("reply").innerHTML = "Thank you for the rating. We hoped you enjoyed the app";
    starClick1();
    star1.style.color = "black";

}

function starClick1(){
    star1.style.color ="orange";
    star2.style.color ="black";
    star3.style.color ="black";
    star4.style.color ="black";
    star5.style.color ="black";
}
function starClick2(){
    star1.style.color ="orange";
    star2.style.color ="orange";
    star3.style.color ="black";
    star4.style.color ="black";
    star5.style.color ="black";
   
}
function starClick3(){
    star1.style.color ="orange";
    star2.style.color ="orange";
    star3.style.color ="orange";
    star4.style.color ="black";
    star5.style.color ="black";
   
}
function starClick4(){
    star1.style.color ="orange";
    star2.style.color ="orange";
    star3.style.color ="orange";
    star4.style.color ="orange";
    star5.style.color ="black";
   
}
function starClick5(){
    star1.style.color ="orange";
    star2.style.color ="orange";
    star3.style.color ="orange";
    star4.style.color ="orange";
    star5.style.color ="orange";
   
}
