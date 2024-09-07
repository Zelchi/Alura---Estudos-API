import express from "express";

const app = express();
app.use(express.json());

const livros = [
    {
        id: 1,
        titulo: "O Senhor dos Anéis"
    },
    {
        id: 2,
        titulo: "O Hobbit"
    },
];

function buscaLivros(id) {
    return livros.findIndex(livro => livro.id === Number(id));
}

app.get("/", (req, res) => {
    res.status(200).send("Curso de Node.js");
});

app.get("/livros", (req, res) => {
    res.status(200).json(livros);
});

app.get("/livros/:id", (req, res) => {
    const index = buscaLivros(req.params.id);
    if (index !== -1) {
        res.status(200).json(livros[index]);
    } else {
        res.status(404).send("Livro não encontrado.");
    }
});

app.post("/livros", (req, res) => {
    livros.push(req.body);
    res.status(201).send("Livro cadastrado!");
});

app.put("/livros/:id", (req, res) => {
    const index = buscaLivros(req.params.id);
    if (index !== -1) {
        if (req.body.titulo) {
            livros[index].titulo = req.body.titulo;
            res.status(200).json(livros[index]);
        } else {
            res.status(400).send("O campo 'titulo' é obrigatório.");
        }
    } else {
        res.status(404).send("Livro não encontrado.");
    }
});

app.delete("/livros/:id", (req, res) => {
    const index = buscaLivros(req.params.id);
    if (index !== -1) {
        livros.splice(index, 1);
        res.status(200).send('Deletado!')
    } else {
        res.status(404).send("Livro não encontrado.");
    }
})

export default app;