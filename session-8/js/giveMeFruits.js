// This function should be used to create a list of fruit
export default function createListOfFruits(fruits) {
  // get the element we want to add our list to
  const listContainer = document.querySelector("#list-container");

  // Creating our new elements
  const title = document.createElement("h2");
  const titleText = document.createTextNode("List of fruit");
  const list = document.createElement("ul");

  // Looping through the array of Fruits to create a li for each fruit in the array
  // By looping through an array of Fruits we can add as much or as little to our list
 
  //1st option with filter
  // let newFruit = fruits.filter (fruits => fruits.length < 6)

  //2nd option with for loop
  // let newFruit =[];
  // for (let index = 0; index < fruits.length ; index++){
    
  //   if(fruits[index].length < 6){
  //     newFruit.push(fruits[index]);
  //   }
  // }

  // console.log("New fruit result "+ newFruit)

 
  newFruit.map((newFruit) => {
    const listItem = document.createElement("li");
    listItem.textContent = newFruit;
    list.appendChild(listItem);
  });


  title.appendChild(titleText);
  // Now the title and list will be displayed since we have appended it to an element in the DOM.
  listContainer.appendChild(title);
  listContainer.appendChild(list);
}
