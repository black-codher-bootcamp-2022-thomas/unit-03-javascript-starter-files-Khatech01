import displayPopulation from "./birmingham.js";
import { fruits } from "./fruit.js";
import createListOfFruits from "./giveMeFruits.js";



    // var button = document.createElement("button");
    // var textNode = document.createTextNode("Show Population");
    // button.appendChild(textNode);
    // button.onclick = displayPopulation;
    // document.body.appendChild(button);

// Mini task + Task 2
 createListOfFruits(fruits.filter (fruits => fruits.length < 6))


