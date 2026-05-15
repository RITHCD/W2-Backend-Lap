// server.js
const http = require('http');

const server = http.createServer((req, res) => {
    const url = req.url;
    const method = req.method;

    console.log(`Received ${method} request for ${url}`);

    let statusCode = 404;
    let headers = { 'Content-Type': 'text/plain' };
    let responseText = '404 Not Found';

    switch (url) {
        case '/':
            if (method === 'GET') {
                statusCode = 200;
                headers = { 'Content-Type': 'text/html' };
                responseText = `
                    <html>
                        <head><title>Home</title></head>
                        <body>
                            <h1>Welcome to the Home Page</h1>
                            <p>This is a simple Node.js server.</p>
                        </body>
                    </html>
                `;
            }
            break;
        case '/about':
            if (method === 'GET') {
                statusCode = 200;
                responseText = 'About us: at CADT, we love node.js!';
            }
            break;
        case '/contact-us':
            if (method === 'GET') {
                statusCode = 200;
                responseText = 'You can reach us via email...';
            }
            break;
        case '/products':
            if (method === 'GET') {
                statusCode = 200;
                responseText = 'Buy one get one...!';
            }
            break;
        case '/projects':
            if (method === 'GET') {
                statusCode = 200;
                responseText = 'Here are our awesome projects';
            }
            break;
        default:
            break;
    }

    res.writeHead(statusCode, headers);
    res.end(responseText);
});

server.listen(3000, () => {
    console.log('Server is running at http://localhost:3000');
});
