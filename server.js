import app from "./src/app.js";

const PORT = 3000;
const ROTAS = {
    "/": "Curso de Node.js",
    "/livros": "Entrei na rota livros",
    "/batata": "Entrei na rota batata",
};

app.listen(PORT, () => {
    console.log('Servidor Online!');
});