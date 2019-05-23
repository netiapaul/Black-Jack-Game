// the bening of the game

let suits=['Hearts','Clubs','Diamonds','Spades'];
let values=['Ace','King','Queen','Jack','Ten','Nine','Eight','Seven','Six','Five','Four','Three','Two'];

// create a function to add the cards and suits to the empty deck array

let createdeck=()=>{

    let deck=[];

    for (let suitIdx = 0; suitIdx < suits.length; suitIdx++) {
    
        for (let valueidx = 0; valueidx < values.length; valueidx++) {
            
            let card={

                suit:suits[suitIdx],
                value:values[valueidx]
            };

            deck.push(card)
            
        }
        
    }

    return deck;
}

let deck =createdeck();

// next card is availabe by removing the first card in the deck list

let getNextCard=()=>{

    return deck.shift();

};



let getCardString=(card)=>{

    return card.value + ' of ' + card.suit;

};


let playerCards=[getNextCard(),getNextCard()]

console.log('Welcome to Blackjack');

console.log('You are dealt:');
console.log(" " + getCardString(playerCards[0]));
console.log(" " + getCardString(playerCards[1]));



