function getGrades(inputSelector) {
    // get grades from the input box
    const grades = document.querySelector(inputSelector);
    // split them into an array (String.split(','))
    const gradeArray = grades.value.split(',');
    // clean up any extra spaces, and make the grades all uppercase. (Array.map())
    // return grades
    const cleanGrades = gradeArray.map((item) => {
        return item.trim().toUpperCase();
    } )
    return cleanGrades;
  }

  
  function lookupGrade(grade) {
    // converts the letter grade to it's GPA point value and returns it
    if (grade === 'A') {
        return 4;
    } else if (grade === 'B') {
        return 3;
    } else return 0

  }
  
  function calculateGpa(grades) {
    // gets a list of grades passed in
    // convert the letter grades to gpa points
    // calculates the GPA
    // return the GPA
  }
  
  function outputGpa(gpa, selector) {
    // takes a gpa value and displays it in the HTML in the element identified by the selector
  }
  
  function clickHandler() {
    // when the button in our html is clicked:
    // get the grades entered into the input
    const grades = getGrades('#grades');
    console.log(grades);
    // calculate the gpa from the grades entered
    // display the gpa
  }


  document.querySelector('#submitButton').addEventListener('click', clickHandler);