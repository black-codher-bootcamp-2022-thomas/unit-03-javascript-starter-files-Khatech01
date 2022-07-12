import displayPopulation from "./birmingham.js";
import { fruits } from "./fruit.js";
import createListOfFruits from "./giveMeFruits.js";


// function myFunction() {
    var button = document.createElement("button");
    var textNode = document.createTextNode("Show Population");
    button.appendChild(textNode);
    button.onclick = displayPopulation;
    document.body.appendChild(button);
//   }