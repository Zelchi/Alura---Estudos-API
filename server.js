import http from "http";

const PORT = 3000;
const ROTAS = {
    "/": "Curso de Node.js",
    "/livros": "Entrei na rota livros",
    "/batata": "Batatinha frita",
};

const server = http.createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end(ROTAS[req.url]);
});

server.listen(PORT, () => {
    console.log('Servidor Online!');
});