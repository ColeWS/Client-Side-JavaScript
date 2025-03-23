// grab button and output elements
var order = document.getElementById("order");
var output = document.getElementById("output");
var studentInfo = document.getElementById("studentInfo");

// pizza class
class Pizza {
    // constructor for a pizza object
    constructor(size, doughType, doughShape, sauceType, toppings) {
        this.size = size;
        this.doughType = doughType;
        this.doughShape = doughShape;
        this.sauceType = sauceType;
        this.toppings = toppings;
    }

    // method for displaying the customers final pizza
    description() {
        return `Your ${this.size} ${this.doughType} ${this.doughShape} pizza has ${this.sauceType} sauce and is topped with ${this.toppings}.`;
    }
}

// event listener on the order button
order.addEventListener("click", function() {
    // grab all the customer inputs
    var size = document.getElementById("size").value;
    var doughType = document.getElementById("dough").value;
    var doughShape = document.getElementById("shape").value;
    var sauceType = document.getElementById("sauce").value;
    var toppings = document.getElementById("toppings").selectedOptions;

    // create an array for the customer topping selections
    var selectedToppings = [];
    // iterate through all the selections pushing them to the selectedToppings array
    for (i = 0; i < toppings.length; i++) {
        selectedToppings.push(toppings[i].value);
    }

    // create a pizza object
    let pizza = new Pizza(size, doughType, doughShape, sauceType, selectedToppings);

    // display student info and the pizza order on the page
    studentInfo.textContent = "Name: Cole Winkler-Sawdon | Student ID: 1258159";
    output.textContent = pizza.description();
});