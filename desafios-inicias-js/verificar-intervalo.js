let number = gets();

function verifyInterval(interval){
  let message = false;

  message = interval >= 0 && interval <= 25 ? 'Intervalo [0,25]' : message;
  message = interval > 25 && interval <= 50 ? 'Intervalo (25,50]' : message;
  message = interval > 50 && interval <= 75 ? 'Intervalo (50,75]' : message;
  message = interval > 75 && interval <= 100 ? 'Intervalo (75,100]' : message;
  message = message ? message : 'Fora de intervalo';
  
  print(message);
}

verifyInterval(number);