function points(games) {
    let counter = 0;
    for(let i = 0; i < games.length; i++) {
      let game = games[i].split('');
      if(game[0] > game[2]) {
        counter += 3;
      } else if (game[0] == game[2]){
        counter += 1;
      } else {
        counter +=0;
      }
    }
    return counter;
  }