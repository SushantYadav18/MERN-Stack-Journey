

//type conversion means changing the data type of a value to another data type. In JavaScript, 
// there are two types of type conversion: 
// implicit and explicit.

// Implicit type conversion, also known as type coercion, 
// occurs when JavaScript automatically converts a value from one data type to another.

//convert a string to a number

 let price = "200"

let numricalPrice = Number(price);

console.log(typeof price)
console.log(typeof numricalPrice);

console.log(numricalPrice);
console.log(price);
 

// convert a number to a string

 let age = 100;

  let ageText = String(age);

  console.log(age)
  console.log(typeof age)

  console.log(ageText);
  console.log(typeof ageText);

  // convert a value to a boolean
   console.log(Boolean(1));
   console.log(Boolean (0))


   //Implicit Conversion

   let x = 10;
   let y = "20";

   let result = x + y;

   console.log(result);
   console.log(typeof result);

   let a = 10;
   let b = "20";

   let result1 = a * b;

   console.log(result1);
   console.log(typeof result1);     


