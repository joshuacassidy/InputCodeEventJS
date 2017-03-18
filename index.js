var code = "src";
var userinput = "";
var position = code[userinput]
var  CodePosition = 0;

function success() {
  alert();
  CodePosition = 0;
}

document.addEventListener('keydown', function(e) {
  var key = e.key;

key ==  code[CodePosition] ?  (function() {
    CodePosition++
    CodePosition === code.length ?  success() : null
}())  : CodePosition = 0;

});
