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
    var length = parseInt(readLine());
    var string = readLine();
    var toRotate = parseInt(readLine());

    if (string == null) {
        console.log("");
        return;
    }
    var out = encrypt(string, toRotate);
    console.log(out);

}

function encrypt(string, toRotate) {
    var output = "";

    for (var i = 0; i<string.length; i++) {
        var charBuf = string.charCodeAt(i);

        if (charBuf > 64 && charBuf < 91) {
            output += String.fromCharCode(rotate(charBuf, toRotate, 65, 90));
        }
        else if (charBuf > 96 && charBuf < 123) {
            output += String.fromCharCode(rotate(charBuf, toRotate, 97, 122));
        }
        else {
            output += String.fromCharCode(charBuf);
        }
    }
    return output;
}

function rotate (buffer, repeat, low, high) {
    while (repeat > 0) {
       if (buffer == high)
           buffer = low;
       else
           buffer++;
       repeat--;
    }
    return buffer;
}
