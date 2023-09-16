const bodyParser = require('body-parser');
const express = require('express');
const fs = require('fs');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

// Serve the home page
app.get("/", (req, res) => {
    fs.readFile('UserChat.txt', 'utf8', (err, data) => {
        if (err) {
            console.log(err);
            data = 'No Chat Exists';
        }        
        res.send(`${data}
            <form action="/" method="POST">
                <input type="text" name="message" id="message">
                <input type="hidden" name="username" id="username" value="${req.query.username || ''}">
                <br/>
                <button type="submit">Send</button>
            </form>
        `);
    });
});

// Handle the post request when a user sends a message
app.post("/", (req, res) => {
    const username = req.body.username;
    const message = req.body.message;
    console.log(`${username} : ${message}\n`);

    // If you use "fs.writeFile" in place of "fs.appendFile" in this code, 
    // it will overwrite the existing content of the 'UserChat.txt' file with each new message 
    // instead of appending the new message to the end of the file. 
    // This means that each time a user sends a message, 
    // it will replace the previous content with the new message.

    fs.appendFile("UserChat.txt", `${username} : ${message}\n`, (error) => {
        if (error) {
            console.log(error);
        }
        res.redirect(`/?username=${username}`);
    });
});

// Serve the login page
app.get("/login", (req, res) => {
    res.send(`
        <form action="/login" method="POST">
            <input type="text" name="username" placeholder="username" id="username">
            <br />
            <button type="submit">Login</button>
        </form>
    `);
});

// Handle the post request when a user logs in
app.post("/login", (req, res) => {
    const username = req.body.username;

    res.redirect(`/?username=${username}`);
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
