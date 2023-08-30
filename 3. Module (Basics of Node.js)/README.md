# Node.js Server Example

This folder contains a collection of Node.js server examples that showcase various concepts and functionalities using the built-in `http` module. Each example focuses on different aspects of creating and handling HTTP servers in Node.js.

## Description

This project serves as an educational resource to help you understand the fundamentals of creating a web server using Node.js and implementing routing for different URLs.

## Table of Contents

1. [localhost.js](https://github.com/Ashish-17CSE/Backend_Dev_with_Node_and_Express/blob/master/3.%20Module%20(Basics%20of%20Node.js)/Localhost.js): Basic HTTP server example.
2. [routes.js](https://github.com/Ashish-17CSE/Backend_Dev_with_Node_and_Express/blob/master/3.%20Module%20(Basics%20of%20Node.js)/routes.js): Request handling logic.
3. [Sending_Responses.js](https://github.com/Ashish-17CSE/Backend_Dev_with_Node_and_Express/blob/master/3.%20Module%20(Basics%20of%20Node.js)/Sending_Responses.js): Server setup and response sending.
4. [Request_or_Response.js](https://github.com/Ashish-17CSE/Backend_Dev_with_Node_and_Express/blob/master/3.%20Module%20(Basics%20of%20Node.js)/Request_and_%20Response.js): Handling requests with custom responses.

## Features

- Creation of a simple web server using Node.js's `http` module.
- Handling different routes and URLs with customized responses.
- Parsing and processing POST requests with form data.
- Demonstrating routing logic for sending appropriate responses.

## Examples

### `localhost.js`

This file contains code to create a basic HTTP server that listens on a specified port. It responds with a simple greeting message.

![localhost.js Example](https://github.com/Ashish-17CSE/Backend_Dev_with_Node_and_Express/assets/68491332/04de010c-ca4e-4092-aeea-b898af6eb494)

### `routes.js`

This file defines the request handling logic for the server. It exports a function `RequestHandler` responsible for processing incoming requests and generating appropriate responses.

- The root route `'/'` responds with an HTML form where users can input a message.
- When a message is submitted via the form, the `/message` route with the `POST` method is used to process the form data.
- The incoming data is received as chunks, and the code constructs the message by concatenating these chunks.
- The message is then extracted and written to a `message.txt` file.
- A redirect response is sent back to the root route `'/'`.

### `Sending_Responses.js`

This file sets up an HTTP server using the `http` module and imports the `routes.js` file to define the request handling logic. The server listens on port `3000`.

- The `someText` property from the imported `routes` module is logged to the console.
- The HTTP server is created using the `RequestHandler` function from the `routes.js` module.
- The server listens on port `3000`.

### `Request_or_Response.js`

This file presents a basic HTTP server that responds differently based on the URL path. Users can access routes like `/home`, `/about`, and `/node` to receive specific messages. For any other route, a default response is sent.

Feel free to explore and modify these examples to enhance your understanding of building Node.js servers.

Created by [Ashish](https://github.com/Ashish-17CSE)
