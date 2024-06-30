const readline = require('readline');  // Imports Readline module for reading input 

const rl = readline.createInterface({  // Creates an interface for reading input from the console
  input: process.stdin,
  output: process.stdout
});

function nhifDeduction(grossSalary) {   // Function to calculate NHIF deduction based on gross salary
  if (grossSalary <= 5999) return 150;
  else if (grossSalary <= 7999) return 300;
  else if (grossSalary <= 11999) return 400;
  else if (grossSalary <= 14999) return 500;
  else if (grossSalary <= 19999) return 600;
  else if (grossSalary <= 24999) return 750;
  else if (grossSalary <= 29999) return 850;
  else if (grossSalary <= 34999) return 900;
  else if (grossSalary <= 39999) return 950;
  else if (grossSalary <= 44999) return 1000;
  else if (grossSalary <= 49999) return 1100;
  else if (grossSalary <= 59999) return 1200;
  else if (grossSalary <= 69999) return 1300;
  else if (grossSalary <= 79999) return 1400;
  else if (grossSalary <= 89999) return 1500;
  else if (grossSalary <= 99999) return 1600;
  else return 1700;
}

function nssfDeduction(grossSalary) {  // Function to calculate NSSF deduction based on gross salary
  return grossSalary * 0.06; // 6% of gross salary
}

function payeTax(grossSalary) { // Function to calculate PAYE (tax) based on gross salary
  if (grossSalary <= 24000) return grossSalary * 0.1;
  else if (grossSalary <= 32333) return 2400 + (grossSalary - 24000) * 0.25;
  else return 2400 + 8333 * 0.25 + (grossSalary - 32333) * 0.3;
}

function calculateNetSalary(basicSalary, benefits) {
  const grossSalary = basicSalary + benefits;
  const nhif = nhifDeduction(grossSalary);
  const nssf = nssfDeduction(grossSalary);
  const paye = payeTax(grossSalary);
  
  const netSalary = grossSalary - (nhif + nssf + paye);
  // Print the details of the calculations
  console.log(`Gross Salary: ${grossSalary}`);
  console.log(`NHIF Deduction: ${nhif}`);
  console.log(`NSSF Deduction: ${nssf}`);
  console.log(`PAYE (Tax): ${paye}`);
  console.log(`Net Salary: ${netSalary}`);
  
  rl.close();
}
// This is a prompt for the user to key in data
rl.question('Enter your basic salary: ', (basicSalary) => {
  rl.question('Enter your benefits: ', (benefits) => {
    basicSalary = parseFloat(basicSalary); // Convert input to a number
    benefits = parseFloat(benefits); // Convert input to a number
    calculateNetSalary(basicSalary, benefits); // Calculate the net salary
  });
});
