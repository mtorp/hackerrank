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
    var t = parseInt(readLine());
    for(var a0 = 0; a0 < t; a0++){
        var str = readLine();

		if (is_funny(str)) 
			console.log("Funny");
		else
			console.log("Not Funny");
    }

}

function is_funny(str) {
	var funny = true;
	var str_rev = str.split("").reverse().join("");
	for (var i = 1; i < str.length; i++) {

		var s_diff = Math.abs(str.charCodeAt(i) - str.charCodeAt(i-1)); 
		var r_diff = Math.abs(str_rev.charCodeAt(i) - str_rev.charCodeAt(i-1)); 

		if (s_diff != r_diff) 
			funny = false;	
	}
	return funny;
}
