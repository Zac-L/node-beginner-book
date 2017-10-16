
// const exec = require('child_process').exec;
const querystring = require('querystring');
const fs = require('fs');


function start(response, postData) {
    console.log('Request handler "start" was called.'); // eslint-disable-line

    let body = '<html>' +
        '<head>' +
        '<meta http-equiv="Content-Type" content="text/html; ' +
        'charset=UTF-8" />' +
        '</head>' +
        '<body>' +
        '<form action="upload" method="post">' +
        '<textarea name="text" rows="20" cols="60"></textarea>' +
        '<input type="submit" value="Submit text" />' +
        '</form>' +
        '</body>' +
        '</html>';

    response.writeHead(200, {'Content-Type': 'text/html'});
    response.write(body);
    response.end();
        

    // exec('find /',
    //     { timeout: 10000, maxBuffer: 20000*1024 }, 
    //     function (error, stdout, stderr) {
    //         response.writeHead(200, {'Content-Type': 'text/plain'});
    //         response.write(stdout);
    //         response.end();
    //     });
}

function upload(response, postData) {
    console.log('Request handler "upload" was called'); // eslint-disable-line
    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.write('You have sent: ' + 
    querystring.parse(postData).text);
    response.end();
}

function show(response) {
    console.log('request handler "show" was called'); // eslint-disable-line
    response.writeHead(200, {'Content-Type': 'image/png'});
    fs.createReadStream('/tmp/test.png').pipe(response);
}

module.exports.start = start;
module.exports.upload = upload;
module.exports.show = show;