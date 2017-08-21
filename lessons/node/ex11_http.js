const http = require('http');

const server = http.createServer(function(req, res){
	res.writeHead(200, {"Content-Type": "text/html"})
	res.end('<h1>Acho que é melhor o express!');
});

server.listen(1111, function(){
	console.log('Server running...');
})
