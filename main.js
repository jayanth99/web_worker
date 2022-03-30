// checking browser support for SharedWorker
if (window.SharedWorker) {
    const webSocketWorker = new SharedWorker('worker1.js');     // creating Shared Worker
    /**
     * Sends a message to the worker and passes that to the Web Socket.
     * @param {any} message 
     */
    /*const sendMessageToSocket = message => {
        webSocketWorker.port.postMessage({ 
            action: 'send', 
            value: message,
        });
    };*/

    // Event to listen for incoming data from the worker and update the DOM.
    webSocketWorker.port.addEventListener('message', ({ data }) => {
        var msg = document.getElementById('messages');
        msg.innerHTML+="<br />"+data;
    });

    // Initialize the port connection.
    webSocketWorker.port.start();
    
    // Event Handler on clicking send button
    document.getElementById('send').onclick = function() {
        var text = document.getElementById('text').value;
        
        webSocketWorker.port.postMessage({ 
            action: 'send', 
            value: text,
        });
    };

    // Get the input field
    var input = document.getElementById("text");

    // Execute a function when the user releases a key on the keyboard
    input.addEventListener("keyup", function(event) {
    // Number 13 is the "Enter" key on the keyboard
    if (event.keyCode === 13) {
        // Cancel the default action, if needed
        event.preventDefault();
        // Trigger the button element with a click
        document.getElementById("send").click();
    }
    }); 

    // Remove the current worker port from the connected ports list.
    // This way your connectedPorts list stays true to the actual connected ports, 
    // as they array won't get automatically updated when a port is disconnected.
    window.addEventListener('beforeunload', () => {
        webSocketWorker.port.postMessage({ 
            action: 'unload', 
            value: null,
        });

        webSocketWorker.port.close();
    });
} else {
    console.log("Current browser doesn't support Shared Worker");
}