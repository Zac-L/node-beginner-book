
function route(handle, pathname) {
    console.log('About to route a request for ' + pathname); // eslint-disable-line

    if(typeof handle[pathname] === 'function') {
        handle[pathname]();
    }
    else {
        console.log('No request handler found for ' + pathname); // eslint-disable-line
    }
}

module.exports.route = route;