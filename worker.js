/* -----------------------------Worker.JS--------------------------*/

// Waits for any activity from the page
/*
self.onmessage = function(e) {
    if(e.data !== undefined) {
    // Do work
    var total = e.data + ' World';
        // Posting back to the page
        self.postMessage(total)
    }
}
    // Terminate with: worker.terminate()*/
    const { workerData, parentPort }
    = require('worker_threads')

console.log('Technical Articles on '
                + workerData);

parentPort.postMessage(
{ fileName: workerData, status: 'Done' })
