//Change Fun Facts to a different fact with a set interval

const FACT_CHANGE_INTERVAL = 7000;
const FACT_ID = "fun-fact";
const FACTS = ["In college, I was the president, vice president, \
                tresurer, secretary, events coordinator, and a mentor for several \
                different organizations.",
             "I love getting involved in the community. Last year, I've \
                volunteered to give out christmas trees to low income households and organized \
                a program that encourages high school students to pursue engineering.",
             "Corgis are used to herd cattle and are the smallest dogs used for herding.",
             "My favorite place in New York is at the Brooklyn Bridge Park."];

var i = 1;
var currFact = document.getElementById(FACT_ID);

setInterval(() => {
    if (i > FACTS.length - 1){
        i = 0;
    }
    currFact.innerHTML = FACTS[i];
    i++;
        
}, FACT_CHANGE_INTERVAL);
