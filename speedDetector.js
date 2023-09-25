
// declaring calculateDemeritPoints() function that calculates the points 
//it takes one speed and performs the calculations
function calculateDemeritPoints(speed) {

  // declaring variable speedLimit and assigned it 70 as the default value;
  //one can change speed limit from here
    const speedLimit = 70;
  // declaring variable pointRaate and assigned it 5 as the default value;
  //one can change speed point changing rate from here
    const pointRate = 5;
  
    // Checks if the speed is below the limit
    if (speed <= speedLimit) {

      return 'Ok';
    } else {

      // if is not abovr the limit, we calculates the demerit points
      const demeritPoints = Math.round((speed - speedLimit) / pointRate);

      // check if the demerit points is greater than 12
      if(demeritPoints>=12){

      // if true, the license is suspended
        return `Your license is suspended`;
      }else{

      // if not true, it diplays the total demerit points
        return `Demerit Points: ${demeritPoints}`;
      }
     
    }
  }
  
  //The main function
  function main() {
    //Prompt the user to enter the speed of the car
    const input = prompt("Enter the car's speed :");

    //input is converted to number of type float
    const speed = parseFloat(input);

    // vailidating the user's input
    //if the input is a number demerit points is calculated
    if (!isNaN(speed)) {

      //
      // calls calculateDemeritPoints function  to calaculate demerit points
      const result = calculateDemeritPoints(speed);

      alert(result);

    } else {

      // if the input is not a number, system alerts the User

      alert("Invalid input! Please enter a valid speed.");
    }
  }

//Calling the main function for the program to run  
  main();