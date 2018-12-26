const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]


function init() {
  let index = 0

  document.body.addEventListener('keydown', function(e) {
  	if (e.which === code[index]) {
  	  	index++;

  	  	if (index === code.length) {
  	  		alert('You found the code!');

  	  		index = 0;
  	  	}
  	} else {
  		index = 0
  	}
  });

}