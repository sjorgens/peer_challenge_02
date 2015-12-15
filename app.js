var classNames = ["Altamir", "Amber", "Anthony", "Brooks", "Charlie", "Chris", "Eric", "Jeremy", "Joe", "Kenzie", "Liz", "Mark", "Matthew", "Natalie", "Nathan","Paul","Robby","Sam","Scott","Zack"];
var personCounter = 0;

$(document).ready(function(){
	$("#container").append("<button class='create'>Create</button>");
	$("#container").on("click", '.create', revealPerson);
	$("#container").on('click', '.remove', removePerson);
});

function revealPerson (){
	if (personCounter < classNames.length){
		$("#container").append('<div class="student"></div>');

		$el =  $("#container").children().last();

		$el.append('<p>' + classNames[personCounter] + '</p>');
		$el.append('<button class="remove">Remove</button>');

		$el.hide().slideDown();

		personCounter++;
	} else {
		personCounter = 0;
		$('.student').remove();
	}
}

function removePerson (){
	// Calling it a win
	if ($(this).parent().css('opacity') == 1) {
		$(this).parent().animate({opacity: 0.05});
	} else {
		$(this).parent().animate({opacity: 1});
	}
}