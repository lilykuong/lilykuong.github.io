//Change Fun Facts to a different fact with a set interval

var currFact = document.getElementById("fun-fact");

var facts = ["In college, I was the president, vice president, \
             	tresurer, secretary, events coordinator, and a mentor for several \
             	different organizations.",
             "I love getting involved in the community. Last year, I've \
                volunteered to give out christmas trees to low income households and organized \
                a program that encourages high school students to pursue engineering.",
             "Corgis are used to herd cattle and are the smallest dogs used for herding.",
             "My favorite place in New York is at the Brooklyn Bridge Park."];
var i = 1;

const SEVEN_SEC = 7000;

setInterval(() => {
    if (i > facts.length - 1){
        i = 0;
    }
    currFact.innerHTML = facts[i];
    i++;
        
}, SEVEN_SEC);
