function lastSurvivor(letters, coords) {
    let newLetters = letters.split('');
    for(let i = 0; i < coords.length; i++) {
      newLetters.splice(coords[i],1);    
      }
      return newLetters.join('');
    }