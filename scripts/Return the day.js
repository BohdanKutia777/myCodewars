const whatday = num => {
    if(num >= 8 || num <= 0) {
    return 'Wrong, please enter a number between 1 and 7';
  }
   return ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][num - 1]; 
  } 