function defineSuit(card) {
    if (card.includes('♣')) {
        return 'clubs';    
    }
    if (card.includes('♦')) {
        return 'diamonds';    
    }  
    if (card.includes('♥')) {
        return 'hearts';    
    }  
    if (card.includes('♠')) {
        return 'spades';    
    }      
}

deck = ['2♣','3♣','4♣','5♣','6♣','7♣','8♣','9♣','10♣','J♣','Q♣','K♣','A♣',
  '2♦','3♦','4♦','5♦','6♦','7♦','8♦','9♦','10♦','J♦','Q♦','K♦','A♦',
  '2♥','3♥','4♥','5♥','6♥','7♥','8♥','9♥','10♥','J♥','Q♥','K♥','A♥',
  '2♠','3♠','4♠','5♠','6♠','7♠','8♠','9♠','10♠','J♠','Q♠','K♠','A♠'];

console.log(defineSuit('2♣')); 
console.log(defineSuit('6♦')); 
console.log(defineSuit('7♥')); 
console.log(defineSuit('Q♠')); 

