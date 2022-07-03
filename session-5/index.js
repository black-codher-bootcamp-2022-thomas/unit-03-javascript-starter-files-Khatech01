/* function if */
function getGrade (total) {

    if( total > 90 ) {
        return ('A+')
    };

    if( total > 80 && total <= 90) {
        return ('A')
    };

    if( total > 70 && total <= 80 ) {
        return ('B')
    };

    if( total > 60 && total <= 70 ) {
        return ('C')
    };

    if( total > 50 && total <= 60) {
        return ('D')
    };

    if( total > 40 && total <= 50 ) {
        return ('E')
    };

    if( total > 30 && total <= 40 ) {
        return ('F')
    };

    if( total < 30 ) {
        return ('Fail')
    };
};

console.log(getGrade(65));

/* function SWITCH */
function getGradeSwtich(total) {
  switch (total > 0) {
    case total > 90:
      console.log("A+"); //for information
      return "A+"; // for user visibility
      break;

    case total > 80 && total <= 90:
      console.log("A");
      return "A";
      break;

    case total > 70 && total <= 80:
      console.log("B");
      return "B";
      break;

    case total > 60 && total <= 80:
      console.log("C");
      return "C";
      break;

    case total > 50 && total <= 60:
      console.log("D");
      return "D";
      break;

    case total > 40 && total <= 50:
      console.log("E");
      return "E";
      break;

    case total > 30 && total <= 40:
      console.log("F");
      return "F";
      break;

    case total < 30:
      console.log("Fail");
      return "Fail";
      break;
  }
}
console.log("GetgetGradeSwitch",getGradeSwtich(3));