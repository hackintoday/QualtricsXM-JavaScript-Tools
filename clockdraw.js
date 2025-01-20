/*
Add the following to the HTML view for the question to generate a centered drawing box with a clear button on the bottom right corner.
<style type="text/css">.drawing-container {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 80vh;
    }
    @media (max-width: 600px) {
        .drawing-container {
            height: 60vh;
        }
    }
</style>
<div class="drawing-container">
<div style="position: relative; width: 100%; max-width: 400px;"><canvas width="400" style="border:2mm solid black; width: 100%; height: auto;" id="drawingCanvas" height="400"></canvas><button style="position: absolute; bottom: 10px; right: 10px;" id="clearButton">Clear</button></div>
</div>
<input type="hidden" name="canvasImage" id="canvasImage">
*/

// Add this to the JavaScript view of your Qualtrics question
// Create embedded data variable named canvasImage
Qualtrics.SurveyEngine.addOnload(function() {
	this.hidePreviousButton();
	
	  var canvas = document.getElementById('drawingCanvas');
    var context = canvas.getContext('2d');
    var clearButton = document.getElementById('clearButton');
    var canvasImage = document.getElementById('canvasImage');
    var isDrawing = false;


    canvas.addEventListener('mousedown', startDrawing);
    canvas.addEventListener('mousemove', draw);
    canvas.addEventListener('mouseup', stopDrawing);
    canvas.addEventListener('touchstart', startDrawing);
    canvas.addEventListener('touchmove', draw);
    canvas.addEventListener('touchend', stopDrawing);
    clearButton.addEventListener('click', clearCanvas);

    function startDrawing(event) {
        isDrawing = true;
        context.beginPath();
        context.moveTo(getX(event), getY(event));
        event.preventDefault();
    }

    function draw(event) {
        if (isDrawing) {
            context.lineTo(getX(event), getY(event));
            context.stroke();
        }
        event.preventDefault();
    }

    function stopDrawing(event) {
        if (isDrawing) {
            isDrawing = false;
            canvasImage.value = canvas.toDataURL();
            Qualtrics.SurveyEngine.setEmbeddedData('canvasImage', canvasImage.value);
        }
        event.preventDefault();
    }

    function clearCanvas() {
        context.clearRect(0, 0, canvas.width, canvas.height);
        canvasImage.value = '';
    }

    function getX(event) {
        var rect = canvas.getBoundingClientRect();
        if (event.touches && event.touches.length > 0) {
            return (event.touches[0].clientX - rect.left) * (canvas.width / rect.width);
        } else {
            return (event.clientX - rect.left) * (canvas.width / rect.width);
        }
    }

    function getY(event) {
        var rect = canvas.getBoundingClientRect();
        if (event.touches && event.touches.length > 0) {
            return (event.touches[0].clientY - rect.top) * (canvas.height / rect.height);
        } else {
            return (event.clientY - rect.top) * (canvas.height / rect.height);
        }
    }
});
