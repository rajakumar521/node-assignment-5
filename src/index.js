var http = require("http");
const httpServer = http.createServer((req, res) => {
    if (req.url == "/welcome") {
        res.writeHead(200, { 'Content-type': 'text/plain' })
        res.write("Welcome to Dominos!");
        res.end();
    }
    else if (req.url == "/contact") {
        res.writeHead(200, { 'Content-type': 'text/plain' })
        res.end(JSON.stringify({
            phone: '18602100000',
            email: 'guestcaredominos@jublfood.com'
        }))
    }
    else {
        res.writeHead(404, {
            'Content-type': 'text/plain'
        })
        res.end("Page not Fond");
    }

})


//module.exports = httpServer;

httpServer.listen(8081, () => {
    console.log(`Port running on server 8081`);
})