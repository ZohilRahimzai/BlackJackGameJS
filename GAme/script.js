let num1 = randomCard();
let num2 = randomCard();
let cards = [num1, num2];
let sum1 = 0;
let hasBlackJack = false;
let isAlivenow = true;
let message = "";
let four = document.getElementById("three");
let ttsum = document.getElementById("tsum");
let tcards = document.getElementById("four");




function randomCard() {

let randoNumber = Math.floor (Math.random() * 13 ) + 1;

    if (randoNumber > 10) {
        return 10;

    }else if ( randoNumber === 1) {


        return 11;


    }else  {

        return randoNumber;

    }

        

}




function startGame() {

    renderGame();

}

function renderGame() {

   

    if(sum1 <= 20) {

        message = "Do you want to draw a new card"

    } else if (sum1 === 21) {

        message = "Wohoo!  you have got a blckjack"
        
    } else (

        message = "you are out of the game"

    )

    //console.log(message);
    ttsum.innerText = "Sum: " + sum1;
    tcards.innerText = "Cards: "

    for (let i = 0;  i < cards.length; i++)  {

       tcards.textContent += cards[i] + " | " ; 

    }


    four.innerText = message;

}

function newcard() {

    let card3 = Math.floor (Math.random() * 13 ) + 1;
    sum1 += card3;

    cards.push(card3);

    console.log(cards);

    renderGame();



}






