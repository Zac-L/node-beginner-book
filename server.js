const formidable = require('formidable');
const http = require('http');
const url = require('url');


function start(route, handle) {
    function onRequest(request, response) {
        let postData = '';
        const pathname = url.parse(request.url).pathname;
        console.log('Request for ' + pathname + ' received'); // eslint-disable-line

        request.setEncoding('utf8');
        
        request.addListener('data', postDataChunk => {
            postData += postDataChunk;
            console.log('Received POST data chunk ' + postDataChunk + '.');
        });

        request.addListener('end', () => {
            route(handle, pathname, response, postData);
        });

    }

    http.createServer(onRequest).listen(8888);
    console.log('Node Server is running!'); // eslint-disable-line
}

module.exports.start = start;
