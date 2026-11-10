const express = require('express')
const router = express.Router();

const produtoRoutes = require('./produtosRoutes');

// Associa o prefixo /produtos ao arquivo produtoRoutes
router.use('produtos', produtoRoutes);

// Associação com a rota /usuarios?



module.exports = router;