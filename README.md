# web_worker
Single WebSocket for multiple tabs - POC
Create a single web socket connection via web worker so that all tabs could communicate through the same connection.

Learnings:
I used SharedWorker to implement this.
There are many servers to start at the directory itself which serves the respective directory
-python server
-http server
-xampp server
-npm install -i serve
Among the above, I prefer serve from npm which is good

-files used: s1.html, main.js, worker1.js, server.js

Demo Steps:
First start the server by running node server.js
Serve the current directory using ‘serve’ command
Go to the specified URL by serve package and end point is s1
Open one more tab of the same page and start sending messages. One will be able to see the messages in both the pages, which is implemented by shared worker.

Tricky things about SharedWorker:
It doesn't work with normal file:/// prototype
I used npm package "serve" to serve the current directory  
SharedWorker and Worker are very beautiful concepts. there is lot more to explore

