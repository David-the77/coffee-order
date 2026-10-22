const customerName = "Amina"; 
const drink = "latte";   // espresso, latte, mocha or cold brew 
const size = "large"; 
   // small, medium or large 
let quantity = 7; 
const isMember = true; 
const hour = 9;       
   // the hour of the day, from 0 to 23 

   console.log(customerName, drink, size, quantity); 


   // Rule 1 : Check the oprning hours//

   if (hour >= 8 && hour < 16) {
      console.log("We are open!"); 
   } else {
      console.log(" Sorry, we are closed!"); 
   }
   

   // Rule 2 : Check the drink size and quantity //

   let price; 

   switch (drink) {
      case "espresso":
         if (size === "small") 
            price = 3.00;
            break;
         case "latte":
           price = 4.50 ;
         break;
         case "mocha":
            price = 4.75; 
            break;
         case  "cold brew":
            price = 4.75; 
            break;

            default:
            console.log("Not on the menu.");
            price = 0;
            break;
      }


      // Rule 3 : adjust price for sizes//
      if (size === "small") {
         price = price - 0.50; // take 0.50 off the price// 
      } else if (size === "large") {
         price = price + 0.75; // add 0.75 to the price//
      }
      else {
         // price stays the same for medium size//
      }

   
      console.log("The final price for the drink is:$ " + price);

      // rule 4 (subtotal)//
      let subtotal = price*quantity;

      // rule 5 (discounts)//

      let amountdue = subtotal;

      if (quantity >= 3) {
         amountdue= amountdue -(amountdue* 0.10);
      }

      if (isMember ===true) {
         amountdue = amountdue -(amountdue*0.05);
      }

      console.log("subtotal: $" + subtotal);
      console.log("amount due after discounts: $" + amountdue);

      // rule 6 tax
      let tax = amountdue * 0.08;

      let total = amountdue + tax;

          // Rule 7: Print the receipt
    
    // 1. Make the name all capitals
    let capitalizedName = customerName.toUpperCase();

    // 2. Use a ternary to check if it's 1 drink or multiple drinks
    let drinkWord = quantity === 1 ? "drink" : "drinks";

    // 3. Print the receipt using template literals
    console.log(`
    ===== EMBER & OAK =====
    Customer: ${capitalizedName}
    ${quantity} ${drinkWord}: ${size} ${drink}
    Subtotal: $${subtotal.toFixed(2)}
    Tax: $${tax.toFixed(2)}
    Total: $${total.toFixed(2)}
    `);

    
