# Pizza Menu

#### By **Mesha Devan**

#### An independent project done for Epicodus. The user can access the website for the pizza company "Toppings-R-Us" where a user can choose one or more individual toppings (cheese, pepperoni, artichoke, anchovy, etc.), a size to order a pizza, and see the final cost.

#### The objective was to:
* Allow the user to choose toppings and size for the pizza they'd like to order.
* Create a pizza object constructor with properties for toppings and size.
* Create a prototype method for the cost of a pizza depending on the selections chosen. Use your own formula for this.


## Technologies Used

* CSS
* JavaScript
* HTML
* Markdown

## Setup/Installation Requirements

* The portfolio can be viewed at the coresponding [GitHub Pages](https://archivistmd.github.io/pizza-parlor).

Or you may clone the project to your desktop by using the following command:

* git clone [https://github.com/archivistmd/pizza-parlor.git]
* After cloning, the directions are as followed:
* Open the pizza menu directory.
* Open the file named index.html with the browser of your choice (i.e. firefox, chrome, ect.)

## Tests: TDD
Test 1
Test: "Should return five properties for size, sauce, topping1, topping2, toppingAdd in the pie object
Code:
const myPie = new Pie("personal","light","bronto","artichoke",["deepmushroom"]); 
Expected Output: 
Pie {size: "personal", sauce: "light", toppingw: "bronto", topping2:"artichoke",toppingAdd: ["deepmushroom"]}

Test 2
Test: "It will add the specified topping in the correct property to the Pie object.
Code: 
let myPie = new Pie();
myPie.addToppings("bronto");
Expected Output: Pie
{ size: undefined, sauce: undefined, topping1: undefined, topping2: undefined, toppingAdd: "bronto" }

Test 3
Test: It will add multiple toppings to the correct property of the Pie object as specified.
Code:
let myPie = new Pie();
myPie.addToppings("bronto", "deepmushroom");
Expected Output:
Pie { size: undefined, sauce: undefined, topping1: undefined, topping2: undefined, toppingAdd: ["bronto", "deepmushroom"]}

Test 4
Test: It should add the sauce choice specified to the Pie object
Code:
let myPie = new Pie();
myPie.addSauce("medium");
Expected Output:
Pie { { size: undefined, sauce: medium, topping1: undefined, topping2: undefined, toppingAdd:}

## Known Bugs

* Results not showing

## License

MIT License

Copyright (c) 2023 Mesha Devan