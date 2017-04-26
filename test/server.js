const http = require('http');

const port = 5666;
const hostname = '127.0.0.1';

http.createServer((req,res) => res.end(`
Hello World,form the future!
It's ${
	new Date().getFullYear() + Math.ceil(Math.random() * 100)
} here,now is it going back there in ${new Date().getFullYear()} ? :)
	`))
.listen(port,hostname, ()=> console.info(`listening on http://${hostname}:${port}`))
