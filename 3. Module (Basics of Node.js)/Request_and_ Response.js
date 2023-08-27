const http = require('http');

const server = http.createServer((req, res) => {
    // Extract the URL path from the request
    const urlPath = req.url;

    // Set the content type of the response
    res.setHeader('Content-Type', 'text/plain');

    // Check the URL path and send custom responses
    if (urlPath === '/home') {
        res.end('Welcome home');
    } else if (urlPath === '/about') {
        res.end('Welcome to About Us page');
    } else if (urlPath === '/node') {
        res.end('Welcome to my Node Js project');
    } else {
        res.end('Hello, this is a default response');
    }
});

const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});
