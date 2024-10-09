// const name = console.log('Amdalat');

const express = require('express');
const app = express();
const port = 4000;

const users = [
    {id:1, name:'john doe', email:'johndoe@email.com'},
    {id:1, name:'jane smith', email:'janesmith@email.com'},
    {id:1, name:'alice johnson', email:'alicejohnsonemail.com'},
    {id:1, name:'bob brown', email:'bobbrown@email.com'},
];

app.get('/users', (req, res) => {
    res.json(users);
});

app.get('/', (req, res) => {
    res.send('Welcome to our app')
});

app.get('/about', (req, res) => {
    res.send('Welcome to About page!')
});

app.get('/service', (req, res) => {
    res.send('Welcome to Service page!')
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`)
})
