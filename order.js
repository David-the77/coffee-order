const customerName = "Amina";
const drink = "latte";
const size = "large";
let quantity = 2;
const isMember = true;
const hour = 12;
 
if (hour <= 8 || hour >= 16) {
  console.log("Sorry, we are closed");
} else {
   console.log("We are open");
  let price = 0;
  let onMenu = true;
 
  switch (drink) {
    case "espresso":
      price = 3.0;
      break;
    case "latte":
      price = 4.5;
      break;
    case "mocha":
      price = 4.75;
      break;
    case "cold brew":
      price = 4.75;
      break;
    default:
      console.log("Not on the menu");
      onMenu = false;
  }
 
  if (onMenu) {
    if (size === "small") {
      price = price - 0.5;
    } else if (size === "large") {
      price = price + 0.75;
    }
 
    const subtotal = price * quantity;
    let afterDiscounts = subtotal;
 
    if (quantity >= 3) {
      afterDiscounts = afterDiscounts * 0.9;
    }
    if (isMember === true) {
      afterDiscounts = afterDiscounts * 0.95;
    }
 
    const tax = afterDiscounts * 0.08;
    const total = afterDiscounts + tax;
 
    console.log("===== EMBER & OAK =====");
    console.log(`Customer: ${customerName.toUpperCase()}`);
    console.log(`${quantity} ${quantity === 1 ? "drink" : "drinks"}: ${size} ${drink}`);
    console.log(`Subtotal: $${subtotal.toFixed(2)}`);
    if (isMember === true) {
      console.log("Member discount: 5%");
    }
    console.log(`Tax: $${tax.toFixed(2)}`);
    console.log(`Total: $${total.toFixed(2)}`);
  }
}