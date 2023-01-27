//business logic
function Pie(size, sauce, cheese, toppingAdd) {
  this.size = undefined;
  this.sizeCost = 0;
  this.sauce = undefined;
  this.cheese = undefined;
  this.toppingAdd = [];
  this.toppingCost = 0;
}

Pie.prototype.addSize = function(sizeSelect) {
  this.size = sizeSelect;
  if (this.size === "personal") {
    this.sizeCost = "5$";
  } else if (this.size === "small") {
    this.sizeCost = "10$";
  } else if (this.size === "medium") {
    this.sizeCost = "15$";
  } else if (this.size === "large") {
    this.sizeCost = "20$";
  } else if (this.size === "xlarge") {
    this.sizeCost = "25$";
  } else if (this.size === "dragon") {
    this.sizeCost = "35$";
  }
}

Pie.prototype.addSauce = function(sauced) {
  this.sauce = sauced;
}

Pie.prototype.addCheese = function(cheeseMe) {
  this.cheese = cheeseMe;
}

Pie.prototype.addToppings = function(toppings) {
  this.toppingAdd.push(toppings);
  this.toppingCost += 2;
}

Pie.prototype.calculateToppingCost = function() {
  this.toppings.forEach()
}



//user logic