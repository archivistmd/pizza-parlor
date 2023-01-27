//business logic
function Pie() {
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
    this.sizeCost = 5;
  } else if (this.size === "small") {
    this.sizeCost = 10;
  } else if (this.size === "medium") {
    this.sizeCost = 15;
  } else if (this.size === "large") {
    this.sizeCost = 20;
  } else if (this.size === "xlarge") {
    this.sizeCost = 25;
  } else if (this.size === "xxlarge") {
    this.sizeCost = 35;
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

Pie.prototype.calculateTotalCost = function() {
  let total = this.sizeCost + this.toppingCost
  return total;
}



//user logic
function handleFormSubmission(event) {
  event.preventDefault();
  let pie = new Pie();
  const size = document.getElementById("size").value;
  const sauce = document.getElementById("sauce").value;
  const cheese = document.getElementById("cheese").value;
  const toppingAdd = document.querySelectorAll("input[name=toppingAdd]checked");
  const toppingAddArray = Array.from(toppingAdd);

  toppingAddArray.forEach(function(toppings) {
    pie.addToppingAdd(toppings);
  });
  pie.addSize(size);
  pie.addSauce(sauce);
  pie.addCheese(cheese);
  let total = pie.calculateTotalCost();
}

window.addEventListener("load", function() {
  documument.querySelector("form#pizza-order").addEventListener("submit", handleFormSubmission);
});