const http = require('http');
const url = require('url');


function start(route, handle) {
    function onRequest(request, response) {
        const pathname = url.parse(request.url).pathname;
        console.log('Request for ' + pathname + ' received'); // eslint-disable-line

        route(handle, pathname);

        response.writeHead(200, {'Content-Type': 'text/plain'});
        response.write('hello world');
        response.end();
        
    }

    http.createServer(onRequest).listen(8888);

console.log('Node Server is running!'); // eslint-disable-line
}

module.exports.start = start;
