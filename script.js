// Add JavaScript code for your web site here and call it from index.html.
let hand = document.getElementById("hand");
let pile = document.getElementById("pile");
let res = document.getElementById("results");

const cardImages = [
  "images/clubs_2.svg", "images/clubs_3.svg", "images/clubs_4.svg", "images/clubs_5.svg",
  "images/clubs_6.svg", "images/clubs_7.svg", "images/clubs_8.svg", "images/clubs_9.svg",
  "images/clubs_10.svg", "images/clubs_ace.svg", "images/clubs_jack.svg", "images/clubs_king.svg",
  "images/clubs_queen.svg",

  "images/diamonds_2.svg", "images/diamonds_3.svg", "images/diamonds_4.svg", "images/diamonds_5.svg",
  "images/diamonds_6.svg", "images/diamonds_7.svg", "images/diamonds_8.svg", "images/diamonds_9.svg",
  "images/diamonds_10.svg", "images/diamonds_ace.svg", "images/diamonds_jack.svg", "images/diamonds_king.svg",
  "images/diamonds_queen.svg",

  "images/hearts_2.svg", "images/hearts_3.svg", "images/hearts_4.svg", "images/hearts_5.svg",
  "images/hearts_6.svg", "images/hearts_7.svg", "images/hearts_8.svg", "images/hearts_9.svg",
  "images/hearts_10.svg", "images/hearts_ace.svg", "images/hearts_jack.svg", "images/hearts_king.svg",
  "images/hearts_queen.svg",

  "images/spades_2.svg", "images/spades_3.svg", "images/spades_4.svg", "images/spades_5.svg",
  "images/spades_6.svg", "images/spades_7.svg", "images/spades_8.svg", "images/spades_9.svg",
  "images/spades_10.svg", "images/spades_ace.svg", "images/spades_jack.svg", "images/spades_king.svg",
  "images/spades_queen.svg",
];

let pileDeck = [];

let flipButton = document.getElementById("flip");
flipButton.addEventListener("click", function(){
    flip();
} )

let playButton = document.getElementById("play");
playButton.addEventListener("click", function(){
    play();
} )

game = document.getElementById("game");
game.style.opacity = 0.30;
let gameOn = false;

function play(){

    if (gameOn){
        window.location.reload();
        gameOn = false;
        return;
       
    }

    game.style.display = "block";
    game.style.opacity = 1;
    playButton.innerHTML = "Restart"
    gameOn = true;
    

    for (let i = cardImages.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [cardImages[i], cardImages[j]] = [cardImages[j], cardImages[i]];
      }
    
      pDeck = cardImages.slice(0, 26);
      oDeck = cardImages.slice(26, 52);

}
let ready = true;

function flip() {
    pSlap = false;
    if (!ready){
        return;
    }
    else if (pDeck.length <= 0){
        res.innerHTML = "You Lost!"
        return;
    }

    pile.src = pDeck[0];
    pileDeck.push(pDeck[0])
    pDeck.shift();

    if (pile.src.endsWith("_jack.svg" )){
        setTimeout(oslap,  Math.floor(Math.random() * (3000 - 1500 + 1) ) + 1500);
    }
    
    let x = pile.src.lastIndexOf("_");
    let y = pile.src.lastIndexOf(".");
    
    let start = pile.src.lastIndexOf("/")
    res.innerHTML = "You drew the " + pile.src.slice(x+1,y) +" of " + pile.src.slice(start+1,x);

    ready = false;
    setTimeout(oflip, Math.floor(Math.random() * (3000 - 1500 + 1) ) + 1500)
    
}

let pSlap = false;

function oflip(){

    if (oDeck.length <= 0){
       res.innerHTML = "You Won!!"

       pile.src = images/blankcard.png;

    }
    

    pile.src = oDeck[0];
    pileDeck.push(oDeck[0]);
    oDeck.shift();

    let x = pile.src.lastIndexOf("_");
    let y = pile.src.lastIndexOf(".");
    
    let start = pile.src.lastIndexOf("/")
    res.innerHTML = "The AI drew the " + pile.src.slice(x+1,y) +" of " + pile.src.slice(start+1,x);

    ready = true;

    if (pile.src.endsWith("_jack.svg" )){
        setTimeout(oslap,  Math.floor(Math.random() * (3000 - 1500 + 1) ) + 1500);
    }
}

function oslap(){
    if (!pSlap){
    oDeck.push(...pileDeck);
    pileDeck.length = 0;

    pile.src = "images/blankcard.png"
    res.innerHTML = "The AI slapped and took the cards";
    }
}

let slapButton = document.getElementById("slap");
slapButton.addEventListener("click", function(){
    slap();
} )


function slap(){
    pSlap = true;
    let topcard = document.getElementById("pile").src;
    
    if (topcard.endsWith("_jack.svg")){
        res.innerHTML = "You're Right! You slapped and take all the cards";

        pDeck.push(...pileDeck);
        pileDeck.length = 0;
        pile.src = "images/blankcard.png"
    }
    else {
        res.innerHTML = "You're Wrong! You slapped and the AI takes all the cards";

        oDeck.push(...pileDeck);
        pileDeck.length = 0;
        pile.src = "images/blankcard.png"
    }
}
