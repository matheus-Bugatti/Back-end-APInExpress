import express from 'express'
const app = express()
const port = 3333

app.use(express.json()) //transforma as strings de body em objeto pro JS

//icajicajdiajcdaijdoancifwnaiwcnfaiwcdnawicdawndcuawndiucanw

app.get('/', (req, res) => {
    console.log('foi feito um get na raiz /')
    res.json({ message: 'olá mundito json!' })
});

//icajicajdiajcdaijdoancifwnaiwcnfaiwcdnawicdawndcuawndiucanw

app.get('/produto', (req, res) => {
    console.log('foi feito um get no /produto')
    res.json({ produto: 'exemplo' })
})
app.post('/produto', (req, res) => {
    //pegar dado dos produto
    console.log('foi feito um post no /produto')
    res.json({ produto: 'criado com sucesso!' })
});

//icajicajdiajcdaijdoancifwnaiwcnfaiwcdnawicdawndcuawndiucanw

// /user get(pega info do usuario(da pra usar no navegador)), post(cria um usuario), put(atualiza o usuario)
app.get('/user', (req, res) => {
    console.log('foi feito um get na /user')
    res.json({ message: 'olá usuario!' })
})
app.post('/user', (req, res) => {
    console.log('foi feito um post no /user')
    res.json({ usuario: 'criado com sucesso!' })
})
app.put('/user', (req, res) => {
    console.log('foi feito um put no /user')
    res.json({ usuario: 'editado com sucesso!' })
})
app.delete('/user', (req, res) => {
    console.log('foi feito um delete no /user')
    res.json({ usuario: 'deletado com sucesso!' })
});

//icajicajdiajcdaijdoancifwnaiwcnfaiwcdnawicdawndcuawndiucanw
//EXERCICIO C.R.U.D.
// CREATE, READ, UPDATE, DELETE

//CREATE
app.post('/profile', (req, res) => {
    const dados = req.body
    //console.log(dados) //demonstra os dados cadastrados em body no terminal
    res.json({ usuario: 'Usuário foi criado' })
})

//READ
app.get('/profile', (req, res) => {
    console.log('Foi feito um GET(read) em /profile')
    res.json({ usuario: 'Olá usuário' })
})

//UPDATE
app.put('/profile', (req, res) => {
    const dados = req.body
    console.log(dados)
    res.json({ usuario: 'Usuário foi atualizado' })
})

//DELETE
app.delete('/profile', (req, res) => {
    console.log('Foi feito um DELETE(delete) em /profile')
    res.json({ usuario: 'Usuário foi deletado' })
})

//icajicajdiajcdaijdoancifwnaiwcnfaiwcdnawicdawndcuawndiucanw

// port puxa a variavel assim somente precisando modificar a variavel
app.listen(port, () => {
    console.log(`API Rodando em http://localhost:${port}`)
})
