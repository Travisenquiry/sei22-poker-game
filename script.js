//all cards object
let allCards = [
  {
    name: "Ace of Diamonds",
    card: "A",
    suit: "d",
    value: 14,
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
    value: 14,
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
    value: 14,
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
    value: 14,
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

//all required global variables
let allCardsUnchanged = [...allCards];
let currentHand = [];
let dealButton = document.getElementById("deal");
let swapButton = document.getElementById("swap");
let notification = document.getElementById("notification");
let betRaiseButton = document.getElementById("bet-raise");
let betLowerButton = document.getElementById("bet-lower");
let currentBetDOM = document.getElementById("current-bet");
let totalChipsDOM = document.getElementById("total-chips");
let step = 0;
let totalChips = 10000;
let currentBet = 0;
totalChipsDOM.value = totalChips;
currentBetDOM.value = currentBet;
totalChipsDOM.innerHTML = totalChips;
currentBetDOM.innerHTML = currentBet;

//function that starts the game and deal 5 new cards to hand
const dealFiveCards = function (){
  if(totalChips >= currentBet && currentBet !== 0){
    totalChips = totalChips - currentBet;
    totalChipsDOM.innerHTML = totalChips;
    totalChipsDOM.value = totalChips;
    if(step === 0){
      step++
    }else if(step === 1){
      let i = 0;
      let refreshCard = document.getElementsByClassName("cards");
      allCards = [...allCardsUnchanged];
      while(i < 5){
        refreshCard[0].parentNode.removeChild(refreshCard[0]);
        i++;
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
      imgDOM.addEventListener("mouseover", addShadow);
      imgDOM.addEventListener("mouseout", removeShadow);
      document.getElementById("card-container-" + String(i)).appendChild(imgDOM);
    }
    dealButton.classList.add("hide");
    swapButton.classList.remove("hide");
    betRaiseButton.classList.add("hide");
    betLowerButton.classList.add("hide");
    notification.classList.remove("win");
    notification.innerHTML = "Select the cards that you want to discard"
  }else if(currentBet === 0){
    notification.innerHTML = "Please bet above 0 chips";
  }else {
    notification.innerHTML = "You do not have enough chips!";
  }
}

//function to swap the discarded cards for new cards and check for winning hand
const swapCards = function(){
  for(let i = 0; i < 5; i++){
    document.getElementById("card-" + String(i)).removeEventListener("click", selectCard);
    if(document.getElementById("card-" + String(i)).classList.contains("selected")){
      let grabNewCard = (allCards.splice(Math.floor(Math.random() * (allCards.length)), 1));
      currentHand.splice(i, 1, grabNewCard[0]);
      document.getElementById("card-" + String(i)).classList.remove("selected")
      document.getElementById("card-" + String(i)).src = currentHand[i].image;
    }
  }
  swapButton.classList.add("hide");
  dealButton.classList.remove("hide");
  betRaiseButton.classList.remove("hide");
  betLowerButton.classList.remove("hide");
  for(let j = 0; j < 5; j++){
    document.getElementById("card-" + String(j)).removeEventListener("mouseover", addShadow);
    document.getElementById("card-" + String(j)).removeEventListener("mouseout", removeShadow);
  }
  let winningHand = checkWinningHand(currentHand);
  switch(winningHand){
    case "ROYAL STRAIGHT FLUSH":
      notification.innerHTML = winningHand;
      notification.classList.add("win");
      totalChips = totalChips + (currentBet * 251);
      totalChipsDOM.innerHTML = totalChips;
      break;

    case "STRAIGHT FLUSH":
      notification.innerHTML = winningHand;
      notification.classList.add("win");
      totalChips = totalChips + (currentBet * 26);
      totalChipsDOM.innerHTML = totalChips;
      break;

    case "FOUR OF A KIND":
      notification.innerHTML = winningHand;
      notification.classList.add("win");
      totalChips = totalChips + (currentBet * 21);
      totalChipsDOM.innerHTML = totalChips;
      break;

    case "FULL HOUSE":
      notification.innerHTML = winningHand;
      notification.classList.add("win");
      totalChips = totalChips + (currentBet * 11);
      totalChipsDOM.innerHTML = totalChips;
      break;

    case "FLUSH":
      notification.innerHTML = winningHand;
      notification.classList.add("win");
      totalChips = totalChips + (currentBet * 5);
      totalChipsDOM.innerHTML = totalChips;
      break;

    case "STRAIGHT":
      notification.innerHTML = winningHand;
      notification.classList.add("win");
      totalChips = totalChips + (currentBet * 4);
      totalChipsDOM.innerHTML = totalChips;
      break;

    case "THREE OF A KIND":
      notification.innerHTML = winningHand;
      notification.classList.add("win");
      totalChips = totalChips + (currentBet * 2);
      totalChipsDOM.innerHTML = totalChips;
      break;

    case "TWO PAIRS":
      notification.innerHTML = winningHand;
      notification.classList.add("win");
      totalChips = totalChips + (currentBet * 2);
      totalChipsDOM.innerHTML = totalChips;
      break;

    default:
      notification.innerHTML = "You didn't win anything, try again.";
      break;
  }
}

//function to allow the user to select the card to discard
let selectCard = function(){
  if(this.classList.contains("selected")){
    this.classList.remove("selected");
    for(let i = 0; i < currentHand.length; i++){
      if(this.id === "card-" + String(i)){
      this.src = currentHand[i].image;
      }
    }
  }else {
    this.src = "images/red_back.png";
    this.classList.add("selected");
  }
}

//function that contains all the winning condition
let checkWinningHand = function (hand){
  //create a sorted hand for usage
  let sortedHand = [...hand];
  sortedHand.sort(function(a, b){return a.value-b.value});

  //royal straight flush
  if(sortedHand[0].suit === sortedHand[1].suit && sortedHand[0].suit === sortedHand[2].suit && sortedHand[0].suit === sortedHand[3].suit && sortedHand[0].suit === sortedHand[4].suit){
    if(sortedHand[0].value === 10 && sortedHand[1].value === 11 && sortedHand[2].value === 12 && sortedHand[3].value === 13 && sortedHand[4].value === 14){
      return "ROYAL STRAIGHT FLUSH";
    }
  }

  //straight flush
  if(sortedHand[4].value - sortedHand[3].value === 1 && sortedHand[3].value - sortedHand[2].value === 1 && sortedHand[2].value - sortedHand[1].value === 1 && sortedHand[1].value - sortedHand[0].value === 1){
      if(sortedHand[0].suit === sortedHand[1].suit && sortedHand[0].suit === sortedHand[2].suit && sortedHand[0].suit === sortedHand[3].suit && sortedHand[0].suit === sortedHand[4].suit){
        return "STRAIGHT FLUSH";
      }
  }

  //Four of a kind
  if(sortedHand[0].value === sortedHand[1].value && sortedHand[1].value === sortedHand[2].value && sortedHand[2].value === sortedHand[3].value){
    return "FOUR OF A KIND";
  }
  if(sortedHand[1].value === sortedHand[2].value && sortedHand[2].value === sortedHand[3].value && sortedHand[3].value === sortedHand[4].value){
    return "FOUR OF A KIND";
  }

  //full house
  if(sortedHand[0].value === sortedHand[1].value && sortedHand[1].value === sortedHand[2].value && sortedHand[3].value === sortedHand[4].value){
    return "FULL HOUSE";
  }
  if(sortedHand[0].value === sortedHand[1].value && sortedHand[2].value === sortedHand[3].value && sortedHand[3].value === sortedHand[4].value){
    return "FULL HOUSE";
  }

  //flush
  if(hand[0].suit === hand[1].suit && hand[0].suit === hand[2].suit && hand[0].suit === hand[3].suit && hand[0].suit === hand[4].suit){
    return "FLUSH";
  }

  //straight
  if(sortedHand[4].value - sortedHand[3].value === 1 && sortedHand[3].value - sortedHand[2].value === 1 && sortedHand[2].value - sortedHand[1].value === 1 && sortedHand[1].value - sortedHand[0].value === 1){
    return "STRAIGHT";
  }

  //three of a kind
  let threeOfAKindCheck = 0;
  for(let i = 0; i < hand.length - 1; i++){
    for(let j = i + 1; j < hand.length; j++){
      if(hand[i].value === hand[j].value){
        for(let k = j + 1; k < hand.length; k++){
          if(hand[j].value === hand[k].value){
            threeOfAKindCheck++;
          }
        }
      }
    }
  }
  if(threeOfAKindCheck === 1){
    return "THREE OF A KIND";
  }

 //two pairs
  let twoPairsCheck = 0;
  for(let i = 0; i < hand.length - 1; i++){
    for(let j = i + 1; j < hand.length; j++){
      if(hand[i].value === hand[j].value){
        twoPairsCheck++;
      }
    }
  }
  if(twoPairsCheck === 2){
    return "TWO PAIRS";
  }
  //No win
  return "You didn't win anything, try again.";
}

//function for the user to raise the bet
const betRaise = function(){
  if(currentBet < 1000){
    currentBet = currentBet + 100;
    currentBetDOM.value = currentBet;
    currentBetDOM.innerHTML = currentBet;
  }
}

//function for the user to lower the bet
const betLower = function(){
  if(currentBet > 0){
    currentBet = currentBet - 100;
    currentBetDOM.value = currentBet;
    currentBetDOM.innerHTML = currentBet;
  }
}

//function to add shadow on image upon hover
const addShadow = function(){
  this.classList.add("hover-shadow");
}

//function to remove shadow on image upon hover
const removeShadow = function(){
  this.classList.remove("hover-shadow");
}

//add event listeners to the DOMs
dealButton.addEventListener("click", dealFiveCards);
swapButton.addEventListener("click", swapCards);
betRaiseButton.addEventListener("click", betRaise);
betLowerButton.addEventListener("click", betLower);