 // 1.getElementById()
 let mainHeading = document.getElementById("mainHeading");

 // 2.querySelector() for first item
 let firstItem = document.querySelector(".item1");

 // 3.querySelectorAll() for all list items
 let allItems = document.querySelectorAll(".item1");

 // 4.createElement()
 let newItem = document.createElement("li");
 newItem.textContent = "Oranges";

 // 5.appendChild()
 let shoppingList = document.getElementById("shoppingList");
 shoppingList.appendChild(newItem);

 // 6.removeChild()
 shoppingList.removeChild(newItem);

 // 7. element.setAttribute()
 let apple = document.getElementById("item1");
 document.getElementById("setAttributesButton"); {
     apple.setAttribute("data-type", "fruit");
     apple.setAttribute("color", "red");
 }
 
 // 8. getAttribute()
 console.log(apple.getAttribute(""));  // "red"

 // 9. style
 let modifyButton = document.getElementById("modifyButton");
 modifyButton.style.backgroundColor = "lightblue";
 modifyButton.style.fontSize = "18px";

 // 10.addEventListener()
 modifyButton.addEventListener("click", function () {
     alert("DOM has been modified!");
 });

 // 11. window.onload
 window.onload = function () {
     console.log("Page fully loaded");
 };

 //12.PreventDefault
 document.getElementById("linkList").addEventListener("click", function(event) {
     event.preventDefault();
     alert("Not Permitted");
 });