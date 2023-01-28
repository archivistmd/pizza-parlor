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
function getResults (event) {
  event.preventDefault();

  const paragraph = document.createElement("p");
  const h2 = document.createElement("h2");
  const size = document.getElementById("size").value;
  const sauce = document.getElementById("sauce").value;
  const cheese = document.getElementById("cheese").value;
  let toppingAdd = document.querySelectorAll("input[name=toppingAdd]:checked");
  let toppingArray = Array.from(toppingAdd);

  const toppings = [];
  toppingArray.forEach(function(element) {
    toppings.push(element.value);
  });

  let pie = new Pie(size, sauce, cheese, toppingAdd);
  
  h3.append("Order Check!");
  paragraph.append("This rings you up at: ${pizzaOrder.getCost()}. Enjoy!");
  document.body.append(h2,paragraph);
  }

window.addEventListener("load", function () {
  const form = documument.querySelector("form#pizza-order");
  form.addEventListener("submit", getResults);
  console.log(button);
});