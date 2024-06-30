const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function speedDetector() {

  rl.question("Whats you speed?: ", (speed) => {
    speed = parseInt(speed, 10);

    if(isNaN(speed)){
      console.log("Input a valid Number")
      speedDetector();
    } else if (speed <= 70) {
      console.log("Ok");
      rl.close();
    } else {
      const highSpeed = speed - 70;
      const demeritPoints = Math.floor(highSpeed / 5);
  
      if(demeritPoints > 12) {
        console.log("license suspended");
        rl.close();
      } else {
        console.log(`Points: ${demeritPoints}`);
        rl.close();
      }
    }
  });
}

speedDetector();