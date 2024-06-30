const readline = require('readline');  // Imports Readline module for reading input 

const rl = readline.createInterface({  // Creates an interface for reading input from the console
  input: process.stdin,
  output: process.stdout
});

function speedDetector() {  // This is  a function that checks the speed by taking in inputs from the user

  rl.question("Whats you speed?: ", (speed) => {
    speed = parseInt(speed);  // Converts the  speed values  from the user to an Intager

    if(isNaN(speed)){  // Checks weather the speed Input isnot a number  
      console.log("Input a valid Number")
      speedDetector();
    } else if (speed <= 70) {  // Statement begin from here 
      console.log("Ok");
      rl.close();
    } else {  //  Calculation regarding highSpeed
      const highSpeed = speed - 70;
      const demeritPoints = Math.floor(highSpeed / 5);
  
      if(demeritPoints > 12) {  // Checks weather demeritPoints more than 12  and prints to the console 
        console.log("license suspended");
        rl.close();
      } else {
        console.log(`Points: ${demeritPoints}`);
        rl.close();
      }
    }
  });
}

speedDetector();// calls the function