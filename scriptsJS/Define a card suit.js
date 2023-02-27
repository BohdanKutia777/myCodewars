function defineSuit(card) {
    const mappingSignToTerm = {
     "♣": "clubs",
     "♠": "spades",
     "♦": "diamonds",
     "♥": "hearts",
   };
   const suitSign = card.slice(-1);
 
   const result = mappingSignToTerm[suitSign];
   return result;
 }