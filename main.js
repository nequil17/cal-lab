$(document).ready(function() { 

});

var key = document.getElementsByClassName('num');

$(document).mousedown(function(e) {
    $('span').css('background-color', 'yellow');
    $(document).mouseup(function(e) {
        $('span').css('background-color', '');
    });
});

$('span').on('click', numerals);
var mathArray = [];


function numerals() {
    var number = $(this).text();
    var id = $(this).attr('id')
        if ($.isNumeric(number) || number == ".") {
            $('#readout').append(number);
            mathArray.push(number);
        } else if (number == "c") {
            $('#readout').empty();
            mathArray.length = 0;
        } else if (id == "result") {
            compute();
        } else if (id == 'multiply', 'divide', 'add', 'subtract') {
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