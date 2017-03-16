var container = 'some value';
var cash = 1000;


function update_wallet(value) {
	$('.wallet').html(value);
}

function charge_card(amount, item) {
	if (cash >= amount){
		cash = cash - amount;
		update_wallet(cash);
		$('.purchases').append(item + ', ');
	} else {
		alert('not enough money');
	}
}

$('.item').click(function() {
	var amount = $(this).data('amount');
	var item = $(this).data('item');
	charge_card(amount, item);
});

update_wallet(cash);






//alert(container[0]);

/*
strings - anything in quotes
numbers - 0-9, integers vs. whole numbers vs. floats (which contains decimals)
boolean - true or false
array - dresser drawers, contain multiple strings/numbers/etc.

variable - var (something that can be changed)

you only have to define a variable once - so for example, defining var container
at the top and then just using "container" from that point on

console.log helps show your progress

function print_text() {
	$('body').append(container);
}

print_text(); 

^THIS ADDS TO WHAT IS ALREADY ON THE BODY PAGE AS OPPOSED TO OVERWRITING IT
(which you would do with .html instead of .append)

*/ 
