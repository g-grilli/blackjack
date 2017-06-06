$(document).ready(function() {
	$('#play-again').hide();
 });   
count = 0;
var deck = [{ point: 13, suit: 'hearts' },
{ point: 12, suit: 'hearts' },
{ point: 11, suit: 'hearts' },
{ point: 10, suit: 'hearts' },
{ point: 9, suit: 'hearts' },
{ point: 8, suit: 'hearts' },
{ point: 7, suit: 'hearts' },
{ point: 6, suit: 'hearts' },
{ point: 5, suit: 'hearts' },
{ point: 4, suit: 'hearts' },
{ point: 3, suit: 'hearts' },
{ point: 2, suit: 'hearts' },
{ point: 1, suit: 'hearts' },
{ point: 13, suit: 'spades' },
{ point: 12, suit: 'spades' },
{ point: 11, suit: 'spades' },
{ point: 10, suit: 'spades' },
{ point: 9, suit:  'spades' },
{ point: 8, suit: 'spades' },
{ point: 7, suit: 'spades' },
{ point: 6, suit: 'spades' },
{ point: 5, suit: 'spades' },
{ point: 4, suit: 'spades' },
{ point: 3, suit: 'spades' },
{ point: 2, suit: 'spades' },
{ point: 1, suit: 'spades' },
{ point: 13, suit: 'diamonds' },
{ point: 12, suit: 'diamonds' },
{ point: 11, suit: 'diamonds' },
{ point: 10, suit: 'diamonds' },
{ point: 9, suit:  'diamonds' },
{ point: 8, suit: 'diamonds' },
{ point: 7, suit: 'diamonds' },
{ point: 6, suit: 'diamonds' },
{ point: 5, suit: 'diamonds' },
{ point: 4, suit: 'diamonds' },
{ point: 3, suit: 'diamonds' },
{ point: 2, suit: 'diamonds' },
{ point: 1, suit: 'diamonds' },
{ point: 13, suit: 'clubs' },
{ point: 12, suit: 'clubs' },
{ point: 11, suit: 'clubs' },
{ point: 10, suit: 'clubs' },
{ point: 9, suit:  'clubs' },
{ point: 8, suit: 'clubs' },
{ point: 7, suit: 'clubs' },
{ point: 6, suit: 'clubs' },
{ point: 5, suit: 'clubs' },
{ point: 4, suit: 'clubs' },
{ point: 3, suit: 'clubs' },
{ point: 2, suit: 'clubs' },
{ point: 1, suit: 'clubs' }
];
playerTotal = [];
dealerTotal = [];
function shuffleArray(array) {
	for (var i = array.length - 1; i > 0; i--) {
    	var j = Math.floor(Math.random() * (i + 1));
    	var temp = array[i];
    	array[i] = array[j];
    	array[j] = temp;
		}
	return array;
 }

 function deal() {
 	var playerHand = [];
 	var cardOne = deck.pop();
 	playerHand.push(cardOne);
 	return playerHand;
 }

 function getCardImageUrl(cardOne) {
	 console.log(cardOne);
	 var pname = cardOne.point;
	 if (pname == 1) {
	 	pname = 'ace';
	 }
	 if (pname == 13) {
	 	pname = 'king';
	 }
	 if (pname == 12) {
	 	pname = 'queen';
	 }
	 if (pname == 11) {
	 	pname = 'jack';
	 }
	 var pic = "<img src='static/" + pname + "_of_" + cardOne.suit + ".png'>";
	 return pic;
}
function playerPoints(cardOne) {
	console.log(cardOne);
	var points = Number(cardOne.point);
	if (points > 10) {
		points = 10;
	}
	return points;
}


function dealerPoints(cardOne) {
	console.log(cardOne);
	var points = Number(cardOne.point);
	if (points > 10) {
		points = 10;
	}
	return points;
}

/* DEAL BUTTON */
$('#deal-button').click(function () {
   deck = shuffleArray(deck);
   pRunningTotal = 0;
   dRunningTotal = 0;
   var pHandOne = deal();
   var pT1 = playerPoints(pHandOne[0]);
   var pPicOne = getCardImageUrl(pHandOne[0]);
   var pHandTwo = deal();
   var pT2 = playerPoints(pHandTwo[0]);
   var pPicTwo = getCardImageUrl(pHandTwo[0]);
   var dHandOne = deal();
   var dT1 = dealerPoints(dHandOne[0]);
   var dPicOne = getCardImageUrl(dHandOne[0]);
   var dHandTwo = deal();
   var dT2 = dealerPoints(dHandTwo[0]);
   var dPicTwo = getCardImageUrl(dHandTwo[0]);
   pRunningTotal = pT1 + pT2;
   dRunningTotal = dT1 + dT2;
   $("#player-hand").append(pPicOne,pPicTwo);
   $("#player-points").text(pRunningTotal);
   $("#dealer-hand").append(dPicOne,dPicTwo);
   $("#dealer-points").text(dRunningTotal);
   $('#messages').text("Would like to HIT or STAND?")
});

/* HIT BUTTON */
$('#hit-button').click(function () {
	$('#messages').text("Player Hits!")
	if (pRunningTotal <= 21) {
	 	pHandOne = deal();
	    pT1 = playerPoints(pHandOne[0]);
	    pPicOne = getCardImageUrl(pHandOne[0]);
	    pRunningTotal = pRunningTotal + pT1;
	    console.log(pRunningTotal, pT1, pHandOne);
	    $("#player-hand").append(pPicOne);
	    if (pRunningTotal <= 21){
	    	$("#player-points").text(pRunningTotal);
	    	$('#messages').append(" Would you like to HIT or STAND? ")
	    }
	    else {
	    	$("#player-points").text("BUSTED WITH " + pRunningTotal);
	    }
	}
 });
/* STAND BUTTON */

$('#stand-button').click(function () { 
 	while (dRunningTotal < pRunningTotal && dRunningTotal < 21) {
	 	var dHandOne = deal();
	 	var dT1 = dealerPoints(dHandOne[0]);
	    var dPicOne = getCardImageUrl(dHandOne[0]);
	    dRunningTotal = dT1 + dRunningTotal;
    	$("#dealer-hand").append(dPicOne);
    	if (dRunningTotal <= 21) {
    		$("#dealer-points").text(dRunningTotal);
    	}
    	else {
    		$("#dealer-points").text("DEALER BUSTED WITH " + dRunningTotal);
    	}
 	}
 });
 





















