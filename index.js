import express from 'express';

const porta = 3000;
const host = '0.0.0.0';

var listaUsuarios = [];
const app = express();

app.use(express.static('./publico'));

app.use('/cadastrarUsuario', (req,resp)=>{
    const nome = req.query.nome;
    const sobrenome = req.query.sobrenome;
    const usuario = req.query.usuario;
    const cidade = req.query.cidade;
    const estado = req.query.estado;
    const cep = req.query.cep;

    listaUsuarios.push({
        nome: nome,
        sobrenome: sobrenome,
        usuario: usuario,
        cidade: cidade,
        estado: estado,
        cep: cep
    });
    resp.write('<html>');
    resp.write('<head>');
    resp.write('<title>Resultado do cadastro</title>');
    resp.write('<meta charset="utf-8">');
    resp.write('</head>');
    resp.write('<body>');
    resp.write(`<h1>Usuário ${nome} ${sobrenome} efetuado com sucesso!<h1>`);
    resp.write('<a href="/cadastroUsuario.html">Continuar cadastrando...</a>');
    resp.write('<br>');
    resp.write('<a href="/listarUsuarios">Listar Usuários</a>');
    resp.write('</body>');
    resp.write('</html>');
    resp.end();
});

app.use('/listarUsuarios', (req,resp)=>{
    resp.write('<html>');
    resp.write('<head>');
    resp.write('<title>Lista de usuários</title>');
    resp.write('<meta charset="utf-8">');
    resp.write('<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">');
    resp.write('</head>');
    resp.write('<body>');
    resp.write('<div class="container">');
    resp.write('<h1>Lista de Usuários:</h1>');
    resp.write('<table class="table table-striped">');
    resp.write('<tr>');
    resp.write('<th>Nome</th>');
    resp.write('<th>Sobrenome</th>');
    resp.write('<th>Usuário</th>');
    resp.write('<th>Cidade</th>');
    resp.write('<th>Estado</th>');
    resp.write('<th>CEP</th>');
    resp.write('</tr>');
    for(let i = 0; i < listaUsuarios.length; i++)
    {
        resp.write('<tr>');
        resp.write(`<td>${listaUsuarios[i].nome}`);
        resp.write(`<td>${listaUsuarios[i].sobrenome}`);
        resp.write(`<td>${listaUsuarios[i].usuario}`);
        resp.write(`<td>${listaUsuarios[i].cidade}`);
        resp.write(`<td>${listaUsuarios[i].estado}`);
        resp.write(`<td>${listaUsuarios[i].cep}`);
        resp.write('</tr>');
    }
    resp.write('</table>');
    resp.write('</div>');
    resp.write('<a href="/">Voltar</a>');
    resp.write('</body>');
    resp.write('<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>');
    resp.write('</html>');
    resp.end();
});

app.listen(porta, host, () => {
    console.log(`Servidor executando na porta htpp://${host}:${porta}`);
})