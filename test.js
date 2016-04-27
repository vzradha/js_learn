	var resultElements;
	function setDefaultText() {
		
		for (var i = 0 ; i < resultElements.length; i++) {
				var element = resultElements[i];
				element.innerText = element.getAttribute('function') + "(x) = ";		
				}		
	}

	function getUserInput() {
		var raw = document.getElementById('userInput').value.trim();
		if (raw.length == 0) {
			throw "you must enter a number";
		}

		var num = Number(raw);
		if(isNaN(num)) {
			throw raw + " is not a number"
		}

		return num;
	}

	function calResults() {
		try {
			var x = getUserInput();
			}catch(e) {
				alert('Error:' + e);
				return;
			}
		setDefaultText();
		for (var i = 0; i < resultElements.length; i++) {
			var element = resultElements[i];
			var functionName = element.getAttribute('function');
			var func = Math[functionName];
			var result = func(x);
			element.innerText = element.innerText + " " + result;
		}
	}
	window.onload = function() {
		resultElements = document.getElementsByClassName('result');
		setDefaultText();
		document.getElementById('btnCalculate')
				.addEventListener('click', calResults);
	}
