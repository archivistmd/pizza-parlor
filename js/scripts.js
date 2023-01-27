//business logic
function Pie(size, sauce, cheese, toppingAdd) {
  this.size = size;
  this.sauce = sauce;
  this.cheese = cheese;
  this.toppingAdd = toppingAdd;
}

Pie.prototype.addSize = function(sizeSelect) {
  this.size = sizeSelect;
}

Pie.prototype.addSauce = function(sauced) {
  this.sauce = sauced;
}

Pie.prototype.addCheese = function(cheeseMe) {
  this.cheese = cheeseMe;
}

Pie.prototype.addToppings = function(toppings1, toppings2) {
  let allToppings = [];
  allToppings.push(toppings1); 
  allToppings.push(toppings2);
  this.toppingAdd = allToppings; 
}
//user logic