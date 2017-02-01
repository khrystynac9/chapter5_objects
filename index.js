 function bla(car) {
   if (car.mileage > 10000) {
       return false;
   }  else if (car.year > 1960) {
       return false; 
   } 
   return true; 
 }
 
 var car = {
     make: 'web motors',
     model: 'taxi',
     year: 1955,
     color: "yellow",
     passenger: 4,
     convertible: false,
     mileage: 1341
 };
 
 var choice = bla(car);
 if (choice) {
    console.log("You gotta check out this " + car.make + " " + car.model);
 } else {
     console.log("You shoud really pass on the " + car.make + " " + car.model);
 }
 
 
 
 
 var fiat = {
     make: "Fiat",
     model: "500",
     passengers: 2,
     color: "red"
 };

 
 function preQual(fiat) {
    if (fiat.passengers > 2) {
        return false;
    } else if (fiat.color != "red") {
        return false;
    } else {
        return true;
    }
 }
 
 var check = preQual(fiat);
 if (check) {
     console.log("take " + fiat.make + " " + fiat.model);
 } else {
      console.log("don't take " +fiat.make + " " + fiat.model);
 }
 
 