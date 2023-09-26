// This is the main function it perfomrs data capture

function calculateSalary() {
    //Prompting the user to enter basic salary
    const basicSalary = parseFloat(prompt("Enter your gross salary in KES:"));

    //Validating data entered is in correct format i.e it is a number
    if (!isNaN(basicSalary)) {
       
      const grossSalary = basicSalary;

      //Calls a nhif function that calculates the nhif deductions  
      let nhifDeductions = getNhif(grossSalary );

    //Calls a nssf function that calculates the nssf deductions
      let nssfDeductions = getNssf(basicSalary);
      //calculating house levy (1.5 % of the gross salary)
      let houseLevy = 0.015*grossSalary;
      // Calculate Payee (Tax)
      const taxableIncome = grossSalary-nssfDeductions-  houseLevy;
      let payee = 0;
      if (taxableIncome <= 24000) {
        payee = 0.1 * taxableIncome;
      } else if (taxableIncome <= 32333) {
        payee = 0.25 * (taxableIncome - 24000) + 2400;
      } else if (taxableIncome <= 40333) {
        payee = 0.3 * (taxableIncome - 32333) + 5600;
      } else {
        payee = 0.3 * (taxableIncome - 40333) + 11233;
      }
      
      //deducting personal relief the tax payable
      let personalRelief = 2400;
       let tax = payee - personalRelief;
      

      // Calculate Net Salary
      const netSalary = grossSalary - tax - nhifDeductions - nssfDeductions-houseLevy;


      //converting the amount to number format
      let grossnum = grossSalary.toLocaleString('en-US', { style: 'currency', currency: 'KES' }) //gross salary number format
      let taxnum = tax.toLocaleString('en-US', { style: 'currency', currency: 'KES' })  //total tax number format
      let nhifnum = nhifDeductions.toLocaleString('en-US', { style: 'currency', currency: 'KES' }) //nhif number format
      let nssfnum = nssfDeductions.toLocaleString('en-US', { style: 'currency', currency: 'KES' }) //nssf number format
      let housenum = houseLevy.toLocaleString('en-US', { style: 'currency', currency: 'KES' }) //house levy number format
      let netSalarynum = netSalary.toLocaleString('en-US', { style: 'currency', currency: 'KES' }) //net sslary number format

      alert(`Gross Salary: ${grossnum}\nPayee (Tax): ${taxnum}\nNHIF Deductions:${nhifnum}\nNSSF Deductions: ${nssfnum}\nHouse Levy: ${housenum}\nNet Salary: ${netSalarynum}`);
     
    } else {
        // displays error if data entered not a number
      alert("Invalid input! Please enter valid numeric values for salary and benefits.");
    }
  }

   //This function calculates NssfDeductions
  function getNssf(basicSalary){
    // Assuming that the rate is constant
    const nssfRate = 0.12;

    return 1080;
  }
  //This function calculates NhifDeductions
  function getNhif(grossSalary ){
    let nhifDeductions = 0;

    if (grossSalary <= 5999) {
        nhifDeductions = 150;
      } else if (grossSalary <= 7999) {
        nhifDeductions = 300;
      }else if (grossSalary <= 11999) {
        nhifDeductions = 400;
      }else if (grossSalary <= 14999) {
        nhifDeductions = 500;
      }else if (grossSalary <= 19999) {
        nhifDeductions = 600;
      }else if (grossSalary <= 24999) {
        nhifDeductions = 750;
      }else if (grossSalary <= 29999) {
        nhifDeductions = 850;
      } else if (grossSalary <= 34999) {
        nhifDeductions = 900;
      }else if (grossSalary <= 39999) {
        nhifDeductions = 950;
      }else if (grossSalary <= 44999) {
        nhifDeductions = 1000;
      }else if (grossSalary <= 49999) {
        nhifDeductions = 1100;
      }else if (grossSalary <= 59999) {
        nhifDeductions = 1200;
      }else if (grossSalary <= 69999) {
        nhifDeductions = 1300;
      }else if (grossSalary <= 79999) {
        nhifDeductions = 1400;
      }else if (grossSalary <= 89999) {
        nhifDeductions = 1500;
      }else if (grossSalary <= 99999) {
        nhifDeductions = 1600;
      }else{
        nhifDeductions = 1700;
      }
      return nhifDeductions;
  }
  
  calculateSalary();
