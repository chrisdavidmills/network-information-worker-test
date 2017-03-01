var connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
connection.addEventListener('change', updateConnectionStatus);

onmessage = updateConnectionStatus;

function updateConnectionStatus(e) {
  var workerResult = 'Connection type: ' + connection.type + ', speed ' + connection.downlinkMax + 'Mbps.';
  postMessage(workerResult);
}
