const days = {
    1: 'Monday',
    2: "Tuesday",
    3: "Wednesday",
    4: "Thursday",
    5: "Friday",
    6: "Saturday",
    7: "Sunday"
}
 
const returnDay = (number) => {
    if(number < 1 || number > 7) {
        return null;
    }
    return (days[number])
}

// Alternative Solution
const returnDay = (num) => {
    const days = [null, 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
      if(num < 1 || num > 7) {
          return days[0];
      }
      return (days[num]);
  }

// Could this be a third alternative? 

function returnDay(){
    var day;
    switch(new Date().getDay()){
      case 1: 
        day = "Monday";
        break;
      case 2: 
        day = "Tuesday";
        break;
      case 3: 
        day = "Wednesday";
        break;
      case 4:
        day = "Thursday";
        break;
      case 5:
        day = "Friday";
        break;
      case 6:
        day = "Saturday";
        break;
      case 7:
        day = "Sunday";
        break;
      default:
      day = "null";
        }
}
