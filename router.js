
function route(handle, pathname, response, request) {
    console.log('About to route a request for ' + pathname); // eslint-disable-line

    if(typeof handle[pathname] === 'function') {
        handle[pathname](response, request);
    }
    else {
        console.log('No request handler found for ' + pathname); // eslint-disable-line
        response.writeHead(404, {'Content-Type': 'text/html'});
        response.write('404 Not Found');
        response.end();
    }
}

module.exports.route = route;