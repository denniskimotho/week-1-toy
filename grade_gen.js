function getGrade(mark) {
    if (mark > 79) {
      return 'A';
    } else if (mark >= 60) {
      return 'B';
    } else if (mark >= 49) {
      return 'C';
    } else if (mark >= 40) {
      return 'D';
    } else{
      return 'E';
    } 
  }
  

  function gradeCalculator() {
    const input = prompt("Enter the student's mark (between 0 and 100):");
    const mark = parseFloat(input);
  
    if (!isNaN(mark) ){
    if(mark >= 0 && mark <= 100) {
      const grade = getGrade(mark);
      alert(`The student's grade is: ${grade}`);
    } else {
      alert("Please enter a mark between 0 and 100.");
    }
  }else{
    alert("Invalid mark! Please enter a mark between 0 and 100.");
  }
}
  
  gradeCalculator();
  