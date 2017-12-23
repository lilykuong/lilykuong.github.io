/**
	Change Fun Facts to a different fact with a set interval
	*/
	var fact1 = "In college, I was the president, vice president, \
	tresurer, secretary, events coordinator, and a mentor for several \
	different organizations.";

	var fact2 = "I love getting involved in the community. Last year, I've \
	volunteered to give out christmas trees to low income households and organized \
	a program that encourages high school students to pursue engineering.";

	var fact3 = "Corgis are used to herd cattle and are the smallest dogs used \
	for herding.";

		var fact4 = "My favorite place in New York is at the Brooklyn Bridge Park."

	var currFact = document.getElementById("fun-fact");

	var facts = [fact1, fact2, fact3, fact4];
	var i = 1;

	setInterval(() => {
		if (i > facts.length - 1){
			i = 0;
		}
		currFact.innerHTML = facts[i];
		i++;
	}, 7000)

/**
	Change the color of the progess bar for CSS and being a wonderful human
	*/
	$(function() { 
		$("#progress-bar-css").addClass("progress-bar-css");
		$("#progress-bar-human").addClass("progress-bar-human");
	});

