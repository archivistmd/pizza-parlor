//business logic
function Pie(size, sauce, topping1, topping2, toppingAdd) {
  this.size = size;
  this.sauce = sauce;
  this.topping1 = topping1;
  this.topping2 = topping2;
  this.toppingAdd = toppingAdd;
}

Pie.prototype.addSauce = function(sauced) {
  this.sauce = sauced;
}

Pie.prototype.addToppings = function(toppings1, toppings2) {
  let allToppings = [];
  allToppings.push(toppings1); 
  allToppings.push(toppings2);
  this.toppingAdd = allToppings; 
}
//user logic