const fs = require('fs');

const RequestHandler = (req, res) => {
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
    
}


// module.exports = RequestHandler;

// OR
    /*
    module.exports = {
        handler : RequestHandler,
        someText : 'Some hard coded text',
    }*/

//  OR
    // module.exports.handler = RequestHandler;
    // module.exports.someText = 'Some hard coded text';

// OR
exports.hendler = RequestHandler;
exports.someText = "Some hard coded text";