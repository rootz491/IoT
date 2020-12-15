/*			code to control SERVOs...

function handleRotation(event)
{
	updown = Math.round(event.gamma);
	leftright = Math.round(event.beta);
}

function requestPermission()
{
	if (typeof(DeviceMotionEvent) !== 'undefined' && typeof(DeviceMotionEvent.requestPermission) === 'function')
	{
    	output.innerHTML = "iOS 13+ device";
    	DeviceMotionEvent.requestPermission().
    	then(response => {
        	if (response === 'granted') {
            	output.innerHTML = "iOS 13+ device (Permission granted)";
            	window.addEventListener('deviceorientation', handleRotation);
        	}
        	else {
            	output.innerHTML = "iOS 13+ device (Permission denied)";
        	}
        	finishRequest();
    	}).catch(console.error);
	}
	else
	{
    	output.innerHTML = "Non-iOS 13 device";
    	window.addEventListener('deviceorientation', handleRotation);
    	finishRequest();
	}
}


//			code to communicate with backend
*/

// let form = document.forms[0].onsubmit = getData;

/*
function sendToFlask()
{
	const xhr = new XMLHttpRequest();
	const data = new FormData();
	
	data.append("updown", updown);
	data.append("leftright", leftright);

	xhr.open("POST", "message");
	xhr.send(data);
}
*/
// ---------------------------------------------------------
//	SEND A SIMPLE REQUEST. 

function reqListener () {
  console.log(this.responseText);
}

var oReq = new XMLHttpRequest();
oReq.addEventListener("load", reqListener);
oReq.open("GET", "http://www.example.org/example.txt");
oReq.send();

// ---------------------------------------------------------
//	MONITORING PROGRESS OF REQUEST

var oReq = new XMLHttpRequest();

oReq.addEventListener("progress", updateProgress);
oReq.addEventListener("load", transferComplete);
oReq.addEventListener("error", transferFailed);
oReq.addEventListener("abort", transferCanceled);
oReq.addEventListener("loadend", loadEnd);

oReq.open("GET", "http://www.example.org/example.txt");
oReq.send();

// progress on transfers from the server to the client (downloads)
function updateProgress (oEvent) {
  if (oEvent.lengthComputable) {
    var percentComplete = oEvent.loaded / oEvent.total * 100;
    // ...
  } else {
    // Unable to compute progress information since the total size is unknown
  }
}


function loadEnd(e) {
  console.log("The transfer finished (although we don't know if it succeeded or not).");
} 

function transferComplete(evt) {
  console.log("The transfer is complete.");
}

function transferFailed(evt) {
  console.log("An error occurred while transferring the file.");
}

function transferCanceled(evt) {
  console.log("The transfer has been canceled by the user.");
}