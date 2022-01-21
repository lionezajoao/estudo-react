const express = require('express');
const Clients = require('../controllers/Clients');
const Account = require('../controllers/Accounts');
const app = express();

app.use(express.static('public'));
app.get('/', (req, res) => res.sendFile('./index.html', { root: '.' }));
app.get('/submitNewClient', (req, res) => {
    Clients.signUp(req.query.name, req.query.regs)
})
app.listen(8081, ()=> console.log("Example app listening at http://localhost:8081"))