const http = require('http');

const server = http.createServer((req, res) => {
    console.log('run...')
    res.setHeader('Content-Type', 'text/html');
    res.write('hello');
    res.end();
})

server.listen(3000, 'localhost', () => {
    console.log('node js running..');
})