const http = require('http');


function start() {
    function onRequest(request, response) {
        console.log('Request received'); // eslint-disable-line
        response.writeHead(200, {'Content-Type': 'text/plain'});
        response.write('hello world');
        response.end();
        
    }

    http.createServer(onRequest).listen(8888);

console.log('Node Server is running!'); // eslint-disable-line
}

module.exports = start;