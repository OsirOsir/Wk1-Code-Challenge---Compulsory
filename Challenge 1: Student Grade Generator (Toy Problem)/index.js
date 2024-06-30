const readline = require('readline');  // Imports Readline module for reading input 

const rl = readline.createInterface({  // Creates an interface for reading input from the console
  input: process.stdin,
  output: process.stdout
});

function gradeGenerator() { // Function that generates the grade based on input marks
  rl.question("Please input your Marks:",(Marks) => { // Prompts the user for input
    if(isNaN(Marks)) {// Checks if the input is not a number
      console.log("Inavalid Input!");// Outputs an error message
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
    rl.close()// Closes the readline interface
  })
}

gradeGenerator()// Calls or envoks the function to start the grade generation process