$(document).ready(function() {   
});

$('span').on('click', numerals);

var mathArray = [];
var key = document.querySelector('num');

/*Gets highlight to work*/
document.addEventListener('mousedown', function() {
    key.style.backgroundColor = 'yellow';
});

document.addEventListener('mouseup', function() {
    key.style.backgroundColor = '';
});

function numerals(){
    var number = $(this).text();
    var id = $(this).attr('id')
        if ($.isNumeric(number) || number == "."){
            $('#readout').append(number);
            mathArray.push(number);
        } else if (number == "c") {
            $('#readout').empty();
            mathArray.length = 0;
        } else if (id == "result"){
            compute();
        } else if (id == 'multiply', 'divide', 'add', 'subtract'){
            $('#readout').text(number);
            mathArray.push(number)
        } 
 }

function compute() {
    var mathString = mathArray.join("");
    var equal = eval(mathString);
    $('#readout').text(equal);
    mathArray = [];
}