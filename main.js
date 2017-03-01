var result = document.querySelector('p');
var button = document.querySelector('button');


if (window.Worker) {
	var myWorker = new Worker("worker.js");

	button.onclick = function() {
	  myWorker.postMessage('test');
	  console.log('Message posted to worker');
	};

	myWorker.onmessage = function(e) {
		result.textContent = e.data;
		console.log('Message received from worker');
	};
}
