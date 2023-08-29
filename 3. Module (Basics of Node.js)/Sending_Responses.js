// Understanding Requests --> Video

const http = require('http');
// const fs = require('fs');

/*
const server = http.createServer((req, res) => {
    // console.log(req);
    // console.log(req.url, req.method, req.headers);
    
    const url = req.url;
    const method = req.method;
    // ## Routing Requests --> 9th video ## //
    if (url === '/') {
        res.write('<html>');
        res.write('<head><title>Enter Message</title></head>');
        res.write('<body> <form action="/message" method="POST"> <input type="text" name="message"> <button type="submit">Send</button> </form> </body>');
        res.write('</html>');
        return res.end();
    }
    // ## Redirecting Requests --> 10th video ## //
    if (url === '/message' && method === 'POST') {
        // ## Parsing Request Bodies --> 11th Video ## //
        const body = [];
        req.on('data', (chunk) => {
            console.log(chunk);
            body.push(chunk);
        })
        return req.on('end', () => {
            const parsendBody = Buffer.concat(body).toString();
            const message = parsendBody.split('=')[1];
            fs.writeFileSync('message.txt', message, err => {
                res.statusCode = 302;
                res.setHeader('Location', '/');
                return res.end();
            });
        })
    }
    // ## Sending Responses --> 7th video ## //
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>My First Page</title></head>');
    res.write('<body>');
    res.write('<h1>Hello from my node.js Server!</h1>');
    res.write('</body>');
    res.write('</html>');
    res.end();
});*/


// Importing the route.js file
const routes = require('./routes'); // './File_name' --> Because "route" is not a global module.

console.log(routes.someText);

const server = http.createServer(routes.handler);

server.listen(3000);


