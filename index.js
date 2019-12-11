const express = require('express');

const server = express();

server.use(express.json()); //metodo para o express entender o json como tipo de body

// Query params = ?teste=1
// Route params = /users/1
// Request body = {"name" : "dudu", "email":"dudu@teste.com"}

//CRUD - Create, Read, Update, Delete

const users = ['Moral', 'Dudu', 'Victor'];

server.get('/teste', (req, res) =>{
    const nome = req.query.nome;

    return res.json({message: `Hello ${nome}`});
})

server.get('/users/:index', (req, res) =>{
    //const id = req.params.id;

    const { index } = req.params;

    return res.json(users[index]);
})

server.get('/users', (req, res) =>{
    return res.json(users);
})

server.post('/users', (req, res) =>{
    const {name} = req.body;

    users.push(name);

    return res.json(users);
})

server.put('/users/:index', (req, res) =>{
    const {index} = req.params;
    const {name} = req.body;

    users[index] = name;

    return res.json(users);
})

server.delete('/users/:index', (req, res) =>{
    const {index} = req.params;

    users.splice(index, 1);

    return res.send('Sucesso!');
})

server.listen(3000);