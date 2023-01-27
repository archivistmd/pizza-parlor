//business logic
function Pie(size, sauce, topping1, topping2, toppingAdd) {
  this.size = size;
  this.sauce = sauce;
  this.topping1 = topping1;
  this.topping2 = topping2;
  this.toppingAdd = toppingAdd;
}

Pie.prototype.addToppings = function(toppings) {
  this.toppingAdd = toppings;
}
//user logic