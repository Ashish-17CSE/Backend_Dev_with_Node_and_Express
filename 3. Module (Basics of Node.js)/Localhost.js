const http = require('http');

const PORT = 4000;

const server = http.createServer((request, response) => {
    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.end('Hello, my name is Ashish!\n');
});

server.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});
