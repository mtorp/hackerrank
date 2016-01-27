process.stdin.resume();
process.stdin.setEncoding('ascii');

var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0;

process.stdin.on('data', function (data) {
    input_stdin += data;
});

process.stdin.on('end', function () {
    input_stdin_array = input_stdin.split("\n");
    main();
});

function readLine() {
    return input_stdin_array[input_currentline++];
}

/////////////// ignore above this line ////////////////////

function main() {
	var string = readLine();
	if (is_valid(string))
		console.log("YES");	
	else
		console.log("NO");	
}

alpha = "bcdefghijklmnopqrstuvwxyz"	

function is_valid(string) {
	var dict = get_char_dict();
	for (var i = 0; i < string.length; i++) {
		dict[string[i]]++;
	}

	if (is_already_valid(dict)) {
		return true;
	}

	var count_first = 0;
	var count_second = 0;
	var first = 0;
	var second = 0;
	var has_first = false;

	//Set first and second
	for (var i = 0; i< alpha.length; i++) {
		var count_for_i = dict[alpha.charAt(i)]; 

		if (count_for_i > 0) {
			if (!has_first) {
				first = count_for_i;
				has_first = true;	
			} else if (count_for_i!= first) {
				second = count_for_i;
				break;
			}
		}
	}


	for (var i = 0; i< alpha.length; i++) {
		var count_for_i = dict[alpha.charAt(i)]; 

		if (count_for_i == 0)
			continue;

		if (count_for_i == first)
			count_first++;
		else if (count_for_i == second) 
			count_second++;
		else
			return false; //We cannot have three distinct numbers
	}

	//Check cases without either being 1
	if (first != 1 && second != 1) {
		if (Math.abs(first-second) > 1)
			return false;
		if (count_first == 1 || count_second == 1)
			return true;
	}

	if (first == 1 && count_first == 1)
		return true;

	if (second == 1 && count_second == 1)
		return true;

	return false;
}

function is_already_valid(dict) {
	var first = dict['a'];

	for (var i = 0; i < alpha.length; i++) {
		var tempChar = alpha.charAt(i);
		if (dict[tempChar] != first && dict[tempChar] != 0)
			return false;
	}	
	return true;
}


function get_char_dict() {
	var dict = new Array();
	dict['a'] = 0;
	dict['b'] = 0;
	dict['c'] = 0;
	dict['d'] = 0;
	dict['e'] = 0;
	dict['f'] = 0;
	dict['g'] = 0;
	dict['h'] = 0;
	dict['i'] = 0;
	dict['j'] = 0;
	dict['k'] = 0;
	dict['l'] = 0;
	dict['m'] = 0;
	dict['n'] = 0;
	dict['o'] = 0;
	dict['p'] = 0;
	dict['q'] = 0;
	dict['r'] = 0;
	dict['s'] = 0;
	dict['t'] = 0;
	dict['u'] = 0;
	dict['v'] = 0;
	dict['w'] = 0;
	dict['x'] = 0;
	dict['y'] = 0;
	dict['z'] = 0;
	return dict;
}
