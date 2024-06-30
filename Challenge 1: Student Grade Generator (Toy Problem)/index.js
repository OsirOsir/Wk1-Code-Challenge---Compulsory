const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function gradeGenerator() {
  rl.question("Please input your Marks:",(Marks) => {
    if(isNaN(Marks)) {
      console.log("Inavalid Input!");
      return gradeGenerator()
    }

    if (Marks > 79) {
      console.log("Your Grade is: A");
    } else if(Marks >= 60 && Marks <= 79) {
      console.log("Your Grade is: B" )
    } else if(Marks >= 49 && Marks <= 59) {
      console.log("Your Grade is: C" )
    } else if(Marks >= 40 && Marks <= 49) {
      console.log("Your Grade is: D" )
    } else {
      console.log("Your Grade is: E")
    }
    rl.close()
  })
}

gradeGenerator()