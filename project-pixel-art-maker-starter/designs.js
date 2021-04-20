// Global Variables
const submitButton = document.getElementById("sizePicker");
const container = document.getElementById("pixelCanvas")

var gridHeight = document.getElementById("inputHeight").value;
var gridWidth = document.getElementById("inputWidth").value;
var colorPicker = document.getElementById("colorPicker");

//Event Listener, first checks to see if button is present
if (submitButton) {
	submitButton.addEventListener('submit', function() {
		// Stops the refresh
		event.preventDefault()

		// Clears away old grid
		while(container.hasChildNodes()) {
			container.removeChild(container.lastChild)
		}

		gridHeight = document.getElementById("inputHeight").value;
		gridWidth = document.getElementById("inputWidth").value;
		makeGrid()
	})
}

//Makes Grid and Updates Cell Color (Using an Event Listener)
function makeGrid() {
	for (let r = 0; r < gridHeight; r++) {
		let row = container.insertRow();

		for (h = 0; h < gridWidth; h++) {
			let cell = row.insertCell();

			cell.addEventListener("click", function() {
				this.style.background = colorPicker.value;
			})
		}
	}
}
