var input = document.getElementById('input');
var modulo = document.getElementById('modulo');
var btn = document.getElementById('button');
var result = document.getElementById('result');

btn.onclick = function() {
	if (validateNumber(input.value, modulo.value)){
		result.innerHTML = "valid";
	}
	else {
		result.innerHTML = "invalid";
	}
}

function validateNumber(number, modulo) {
	var number_array = number.split('');
	for (i = number_array.length-1; i >= 0; i--) {
		if (isNaN(number_array[i])) {
			number_array.splice(i,1);
		}
	}
	if (number_array.length >= 6 && number_array.length <= 14) {
		var total = 0;
		var weight = number_array.length
		for (i = 0; i < number_array.length; i++) {
			total += number_array[i] * weight;
			weight--
		}
		if (total % modulo == 0) {
			return true;
		}
		else {
			return false;
		}
	}
	else {
		return false;
	}
	
}
