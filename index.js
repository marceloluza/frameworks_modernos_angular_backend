const express = require('express');
var cors = require('cors');

const app = express();
const router = express.Router();

app.use(cors());
app.use(express.json());
app.use(router);

router.get('/api/getUserInfo', (req, res) => {  
  res.status(200).json({ name: 'john' });
});

const usuarios = require('./controller/usuario/router-usuario');
app.use('/api/usuario',usuarios);

const clientes = require('./controller/cliente/router-cliente');
app.use('/api/cliente',clientes);

const produtos = require('./controller/produto/router-produto');
app.use('/api/produto',produtos);


const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

module.exports = router;

