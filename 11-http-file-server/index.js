const http = require('http');
const fs = require('fs');

if(process.argv.length < 3) {
    console.error('Please specify a port and a file to stream.');
    return;
}

const port = process.argv[2];
const file = process.argv[3];

const server = http.createServer((request, response) => {
    const fileContent = fs.readFileSync(file).toString();
    response.write(fileContent);
    response.end();
});

server.listen(port);