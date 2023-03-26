// get references to the button and container
var addButton = document.getElementById("add-object-btn");
var container = document.getElementById("container");

// add a click event listener to the button
addButton.addEventListener("click", function() {
  // create a new object (in this case, a paragraph element)
  var newObject = document.createElement("p");
  newObject.textContent = "This is a new object!";

  // add the new object to the container
  container.appendChild(newObject);
});