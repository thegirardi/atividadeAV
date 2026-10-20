
const http = require('http');
const fs = require('fs');
const path = require('path');

http.createServer((req, res) => {
  fs.readFile(path.join(__dirname, 'index.html'), (err, content) => {
    if (err) {
      res.writeHead(500);
      res.end('Erro ao carregar index.html');
      return;
    }

    res.writeHead(200, {
      'Content-Type': 'text/html; charset=utf-8'
    });
    res.end(content);
  });
}).listen(3000, () => {
  console.log('[CLIENTE] Frontend ativo na porta 3000');
});
