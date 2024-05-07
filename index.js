import express from 'express';
import path from 'path';

const porta = 3000;
const host = '0.0.0.0';

var listaUsuarios = [];
var listaCliente = [];
var listaProduto = [];
var listaFornecedor = [];
var listaAluno = [];
const app = express();

app.use(express.static(path.join(process.cwd(),'./publico')));

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
    resp.write('<title>Resultado do cadastro de usuário</title>');
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

app.use('/cadastrarCliente', (req,resp)=>{
    const usuario = req.query.usuario;
    const email = req.query.email;
    const telefone = req.query.telefone;
    const senha = req.query.senha;
    const confirmarsenha = req.query.confirmarsenha;

    listaCliente.push({
        usuario: usuario,
        email: email,
        telefone: telefone,
        senha: senha,
        confirmarsenha: confirmarsenha
    });
    resp.write('<html>');
    resp.write('<head>');
    resp.write('<title>Resultado do cadastro de cliente</title>');
    resp.write('<meta charset="utf-8">');
    resp.write('</head>');
    resp.write('<body>');
    resp.write('<h1>Cliente cadastrado com sucesso!<h1>');
    resp.write('<a href="/cadastroCliente.html">Continuar cadastrando...</a>');
    resp.write('<br>');
    resp.write('<a href="/listarClientes">Listar Cliente</a>');
    resp.write('</body>');
    resp.write('</html>');
    resp.end();
});

app.use('/listarClientes', (req,resp)=>{
    resp.write('<html>');
    resp.write('<head>');
    resp.write('<title>Lista de cliente</title>');
    resp.write('<meta charset="utf-8">');
    resp.write('<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">');
    resp.write('</head>');
    resp.write('<body>');
    resp.write('<div class="container">');
    resp.write('<h1>Lista de Cliente:</h1>');
    resp.write('<table class="table table-striped">');
    resp.write('<tr>');
    resp.write('<th>Usuário</th>');
    resp.write('<th>E-mail</th>');
    resp.write('<th>Telefone</th>');
    resp.write('</tr>');
    for(let i = 0; i < listaCliente.length; i++)
    {
        resp.write('<tr>');
        resp.write(`<td>${listaCliente[i].usuario}`);
        resp.write(`<td>${listaCliente[i].email}`);
        resp.write(`<td>${listaCliente[i].telefone}`);
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

app.use('/cadastrarProduto', (req,resp)=>{
    const email = req.query.email;
    const senha = req.query.senha;
    const endereco = req.query.endereco;
    const bairro = req.query.bairro;
    const cidade = req.query.cidade;
    const estado = req.query.estado;
    const cep = req.query.cep;
    const produto = req.query.produto;
    const diasentrega = req.query.diasentrega;

    listaProduto.push({
        email: email,
        senha: senha,
        endereco: endereco,
        bairro: bairro,
        cidade: cidade,
        estado: estado,
        cep: cep,
        produto: produto,
        diasentrega: diasentrega
    });
    resp.write('<html>');
    resp.write('<head>');
    resp.write('<title>Resultado do cadastro de produto</title>');
    resp.write('<meta charset="utf-8">');
    resp.write('</head>');
    resp.write('<body>');
    resp.write('<h1>Produto cadastrado com sucesso!<h1>');
    resp.write('<a href="/cadastroProduto.html">Continuar cadastrando...</a>');
    resp.write('<br>');
    resp.write('<a href="/listarProdutos">Listar Produto</a>');
    resp.write('</body>');
    resp.write('</html>');
    resp.end();
});

app.use('/listarProdutos', (req,resp)=>{
    resp.write('<html>');
    resp.write('<head>');
    resp.write('<title>Lista de produtos</title>');
    resp.write('<meta charset="utf-8">');
    resp.write('<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">');
    resp.write('</head>');
    resp.write('<body>');
    resp.write('<div class="container">');
    resp.write('<h1>Lista de Produto:</h1>');
    resp.write('<table class="table table-striped">');
    resp.write('<tr>');
    resp.write('<th>E-mail</th>');
    resp.write('<th>Endereço</th>');
    resp.write('<th>Bairro</th>');
    resp.write('<th>Cidade</th>');
    resp.write('<th>Estado</th>');
    resp.write('<th>CEP</th>');
    resp.write('<th>Produto</th>');
    resp.write('<th>Dias da entrega</th>');
    resp.write('</tr>');
    for(let i = 0; i < listaProduto.length; i++)
    {
        resp.write('<tr>');
        resp.write(`<td>${listaProduto[i].email}`);
        resp.write(`<td>${listaProduto[i].endereco}`);
        resp.write(`<td>${listaProduto[i].bairro}`);
        resp.write(`<td>${listaProduto[i].cidade}`);
        resp.write(`<td>${listaProduto[i].estado}`);
        resp.write(`<td>${listaProduto[i].cep}`);
        resp.write(`<td>${listaProduto[i].produto}`);
        resp.write(`<td>${listaProduto[i].diasentrega}`);
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

app.use('/cadastrarFornecedor', (req,resp)=>{
    const email = req.query.email;
    const razaosocial = req.query.razaosocial;
    const cnpj = req.query.cnpj;
    const endereco = req.query.endereco;

    listaFornecedor.push({
        email: email,
        razaosocial: razaosocial,
        cnpj: cnpj,
        endereco: endereco
    });
    resp.write('<html>');
    resp.write('<head>');
    resp.write('<title>Resultado do cadastro de Fornecedor</title>');
    resp.write('<meta charset="utf-8">');
    resp.write('</head>');
    resp.write('<body>');
    resp.write('<h1>Fornecedor cadastrado com sucesso!<h1>');
    resp.write('<a href="/cadastroFornecedor.html">Continuar cadastrando...</a>');
    resp.write('<br>');
    resp.write('<a href="/listarFornecedores">Listar Fornecedores</a>');
    resp.write('</body>');
    resp.write('</html>');
    resp.end();
});

app.use('/listarFornecedores', (req,resp)=>{
    resp.write('<html>');
    resp.write('<head>');
    resp.write('<title>Lista de Fornecedores</title>');
    resp.write('<meta charset="utf-8">');
    resp.write('<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">');
    resp.write('</head>');
    resp.write('<body>');
    resp.write('<div class="container">');
    resp.write('<h1>Lista de Fornecedor:</h1>');
    resp.write('<table class="table table-striped">');
    resp.write('<tr>');
    resp.write('<th>E-mail</th>');
    resp.write('<th>Razão Social</th>');
    resp.write('<th>CNPJ</th>');
    resp.write('<th>Endereço</th>');
    resp.write('</tr>');
    for(let i = 0; i < listaFornecedor.length; i++)
    {
        resp.write('<tr>');
        resp.write(`<td>${listaFornecedor[i].email}`);
        resp.write(`<td>${listaFornecedor[i].razaosocial}`);
        resp.write(`<td>${listaFornecedor[i].cnpj}`);
        resp.write(`<td>${listaFornecedor[i].endereco}`);
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

app.use('/cadastrarAluno', (req,resp)=>{
    const usuario = req.query.usuario;
    const ra = req.query.ra;
    const cpf = req.query.cpf;
    const email = req.query.email;
    const senha = req.query.senha;

    listaAluno.push({
        usuario: usuario,
        ra: ra,
        cpf: cpf,
        email: email,
        senha: senha
    });
    resp.write('<html>');
    resp.write('<head>');
    resp.write('<title>Resultado do cadastro de Aluno</title>');
    resp.write('<meta charset="utf-8">');
    resp.write('</head>');
    resp.write('<body>');
    resp.write('<h1>Aluno cadastrado com sucesso!<h1>');
    resp.write('<a href="/cadastroAluno.html">Continuar cadastrando...</a>');
    resp.write('<br>');
    resp.write('<a href="/listarAlunos">Listar Aluno</a>');
    resp.write('</body>');
    resp.write('</html>');
    resp.end();
});

app.use('/listarAlunos', (req,resp)=>{
    resp.write('<html>');
    resp.write('<head>');
    resp.write('<title>Lista de Alunos</title>');
    resp.write('<meta charset="utf-8">');
    resp.write('<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">');
    resp.write('</head>');
    resp.write('<body>');
    resp.write('<div class="container">');
    resp.write('<h1>Lista de Alunos:</h1>');
    resp.write('<table class="table table-striped">');
    resp.write('<tr>');
    resp.write('<th>Usuário</th>');
    resp.write('<th>RA</th>');
    resp.write('<th>CPF</th>');
    resp.write('<th>Email</th>');
    resp.write('</tr>');
    for(let i = 0; i < listaAluno.length; i++)
    {
        resp.write('<tr>');
        resp.write(`<td>${listaAluno[i].usuario}`);
        resp.write(`<td>${listaAluno[i].ra}`);
        resp.write(`<td>${listaAluno[i].cpf}`);
        resp.write(`<td>${listaAluno[i].email}`);
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