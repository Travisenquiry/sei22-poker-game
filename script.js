let allCards = [
  {
    name: "Ace of Diamonds",
    card: "A",
    suit: "d",
    value: 1,
    image: "images/AD.png"
  },
  {
    name: "Two of Diamonds",
    card: "2",
    suit: "d",
    value: 2,
    image: "images/2D.png"
  },
  {
    name: "Three of Diamonds",
    card: "3",
    suit: "d",
    value: 3,
    image: "images/3D.png"
  },
  {
    name: "Four of Diamonds",
    card: "4",
    suit: "d",
    value: 4,
    image: "images/4D.png"
  },
  {
    name: "Five of Diamonds",
    card: "5",
    suit: "d",
    value: 5,
    image: "images/5D.png"
  },
  {
    name: "Six of Diamonds",
    card: "6",
    suit: "d",
    value: 6,
    image: "images/6D.png"
  },
  {
    name: "Seven of Diamonds",
    card: "7",
    suit: "d",
    value: 7,
    image: "images/7D.png"
  },
  {
    name: "Eight of Diamonds",
    card: "8",
    suit: "d",
    value: 8,
    image: "images/8D.png"
  },
  {
    name: "Nine of Diamonds",
    card: "9",
    suit: "d",
    value: 9,
    image: "images/9D.png"
  },
  {
    name: "Ten of Diamonds",
    card: "10",
    suit: "d",
    value: 10,
    image: "images/10D.png"
  },
  {
    name: "Jack of Diamonds",
    card: "J",
    suit: "d",
    value: 11,
    image: "images/JD.png"
  },
  {
    name: "Queen of Diamonds",
    card: "Q",
    suit: "d",
    value: 12,
    image: "images/QD.png"
  },
  {
    name: "King of Diamonds",
    card: "K",
    suit: "d",
    value: 13,
    image: "images/KD.png"
  },
  {
    name: "Ace of Clubs",
    card: "A",
    suit: "c",
    value: 1,
    image: "images/AC.png"
  },
  {
    name: "Two of Clubs",
    card: "2",
    suit: "c",
    value: 2,
    image: "images/2C.png"
  },
  {
    name: "Three of Clubs",
    card: "3",
    suit: "c",
    value: 3,
    image: "images/3C.png"
  },
  {
    name: "Four of Clubs",
    card: "4",
    suit: "c",
    value: 4,
    image: "images/4C.png"
  },
  {
    name: "Five of Clubs",
    card: "5",
    suit: "c",
    value: 5,
    image: "images/5C.png"
  },
  {
    name: "Six of Clubs",
    card: "6",
    suit: "c",
    value: 6,
    image: "images/6C.png"
  },
  {
    name: "Seven of Clubs",
    card: "7",
    suit: "c",
    value: 7,
    image: "images/7C.png"
  },
  {
    name: "Eight of Clubs",
    card: "8",
    suit: "c",
    value: 8,
    image: "images/8C.png"
  },
  {
    name: "Nine of Clubs",
    card: "9",
    suit: "c",
    value: 9,
    image: "images/9C.png"
  },
  {
    name: "Ten of Clubs",
    card: "10",
    suit: "c",
    value: 10,
    image: "images/10C.png"
  },
  {
    name: "Jack of Clubs",
    card: "J",
    suit: "c",
    value: 11,
    image: "images/JC.png"
  },
  {
    name: "Queen of Clubs",
    card: "Q",
    suit: "c",
    value: 12,
    image: "images/QC.png"
  },
  {
    name: "King of Clubs",
    card: "K",
    suit: "c",
    value: 13,
    image: "images/KC.png"
  },
  {
    name: "Ace of Hearts",
    card: "A",
    suit: "h",
    value: 1,
    image: "images/AH.png"
  },
  {
    name: "Two of Hearts",
    card: "2",
    suit: "h",
    value: 2,
    image: "images/2H.png"
  },
  {
    name: "Three of Hearts",
    card: "3",
    suit: "h",
    value: 3,
    image: "images/3H.png"
  },
  {
    name: "Four of Hearts",
    card: "4",
    suit: "h",
    value: 4,
    image: "images/4H.png"
  },
  {
    name: "Five of Hearts",
    card: "5",
    suit: "h",
    value: 5,
    image: "images/5H.png"
  },
  {
    name: "Six of Hearts",
    card: "6",
    suit: "h",
    value: 6,
    image: "images/6H.png"
  },
  {
    name: "Seven of Hearts",
    card: "7",
    suit: "h",
    value: 7,
    image: "images/7H.png"
  },
  {
    name: "Eight of Hearts",
    card: "8",
    suit: "h",
    value: 8,
    image: "images/8H.png"
  },
  {
    name: "Nine of Hearts",
    card: "9",
    suit: "h",
    value: 9,
    image: "images/9H.png"
  },
  {
    name: "Ten of Hearts",
    card: "10",
    suit: "h",
    value: 10,
    image: "images/10H.png"
  },
  {
    name: "Jack of Hearts",
    card: "J",
    suit: "h",
    value: 11,
    image: "images/JH.png"
  },
  {
    name: "Queen of Hearts",
    card: "Q",
    suit: "h",
    value: 12,
    image: "images/QH.png"
  },
  {
    name: "King of Hearts",
    card: "K",
    suit: "h",
    value: 13,
    image: "images/KH.png"
  },
  {
    name: "Ace of Spades",
    card: "A",
    suit: "s",
    value: 1,
    image: "images/AS.png"
  },
  {
    name: "Two of Spades",
    card: "2",
    suit: "s",
    value: 2,
    image: "images/2S.png"
  },
  {
    name: "Three of Spades",
    card: "A",
    suit: "s",
    value: 3,
    image: "images/3S.png"
  },
  {
    name: "Four of Spades",
    card: "4",
    suit: "s",
    value: 4,
    image: "images/4S.png"
  },
  {
    name: "Five of Spades",
    card: "5",
    suit: "s",
    value: 5,
    image: "images/5S.png"
  },
  {
    name: "Six of Spades",
    card: "6",
    suit: "s",
    value: 6,
    image: "images/6S.png"
  },
  {
    name: "Seven of Spades",
    card: "7",
    suit: "s",
    value: 7,
    image: "images/7S.png"
  },
  {
    name: "Eight of Spades",
    card: "8",
    suit: "s",
    value: 8,
    image: "images/8S.png"
  },
  {
    name: "Nine of Spades",
    card: "9",
    suit: "s",
    value: 9,
    image: "images/9S.png"
  },
  {
    name: "Ten of Spades",
    card: "10",
    suit: "s",
    value: 10,
    image: "images/10S.png"
  },
  {
    name: "Jack of Spades",
    card: "J",
    suit: "s",
    value: 11,
    image: "images/JS.png"
  },
  {
    name: "Queen of Spades",
    card: "Q",
    suit: "s",
    value: 12,
    image: "images/QS.png"
  },
  {
    name: "King of Spades",
    card: "K",
    suit: "s",
    value: 13,
    image: "images/KS.png"
  },
];
let allCardsUnchanged = [...allCards];
let currentHand = [];
let dealButton = document.getElementById("deal");
let swapButton = document.getElementById("swap");
let step = 0;

let dealFiveCards = function (){
  if(step === 0){
    step++
  }else if(step === 1){
    let j = 0;
    let refreshCard = document.getElementsByClassName("cards");
    while(j < 5){
      refreshCard[0].parentNode.removeChild(refreshCard[0]);
      j++;
    }
  }
  currentHand = [];
  let temp1 = (allCards.splice(Math.floor(Math.random() * (allCards.length)), 1));
  let temp2 = (allCards.splice(Math.floor(Math.random() * (allCards.length)), 1));
  let temp3 = (allCards.splice(Math.floor(Math.random() * (allCards.length)), 1));
  let temp4 = (allCards.splice(Math.floor(Math.random() * (allCards.length)), 1));
  let temp5 = (allCards.splice(Math.floor(Math.random() * (allCards.length)), 1));
  currentHand = currentHand.concat(temp1, temp2, temp3, temp4, temp5);
  for(let i = 0; i < currentHand.length; i++){
    let imgDOM = document.createElement("IMG");
    imgDOM.src = currentHand[i].image;
    imgDOM.classList.add("cards");
    imgDOM.id = "card-" + String(i);
    imgDOM.addEventListener("click", selectCard);
    document.getElementById("card-container-" + String(i)).appendChild(imgDOM);
    dealButton.classList.add("hide");
    swapButton.classList.remove("hide");
  }
}

let swapCards = function(){
  for(let i = 0; i < 5; i++){
    let empty = (allCards.splice(Math.floor(Math.random() * (allCards.length)), 1));
    document.getElementById("card-" + String(i)).removeEventListener("click", selectCard);
    if(document.getElementById("card-" + String(i)).classList.contains("selected")){
      currentHand.splice(i, 1, empty[0]);
      document.getElementById("card-" + String(i)).classList.remove("selected")
      document.getElementById("card-" + String(i)).src = currentHand[i].image;
    }
    swapButton.classList.add("hide");
    dealButton.classList.remove("hide");

  }
}

let selectCard = function(){
  if(this.classList.contains("selected")){
    this.classList.remove("selected");
    for(var i = 0; i < currentHand.length; i++){
      if(this.id === "card-" + String(i)){
      this.src = currentHand[i].image;
      }
    }
  }else {
    this.src = "images/red_back.png";
    this.classList.add("selected");
  }
}

let rewardChips = function(){

}

let checkWinningHand = function (){

}

dealButton.addEventListener("click", dealFiveCards);
swapButton.addEventListener("click", swapCards);