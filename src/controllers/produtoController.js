const produtoModel = require('../models/produtoModel');
const peodutoModel = require('../models/produtoModel');

const produtocontroller = {
    criarProduto: (req, res) => {
        const {codigo, nome, qtde, preco} = req.body;
        // Validação simples dos campos obrigatorios
        if(!codigo || !nome || !qtde || !preco){
            return res.status(400).json({
                sucesso:false,
                mensagem: "Todos os campos (codigo, nome, qtde, preco) são obrigatorios!"
            })
        }


    // Transformar e calcular os dados
    const nomeMaiusculo = String(nome).toLocaleUpperCase();
    const quantidade = Number(qtde);
    const valorPreco = Number(qtde);
    const valorTotal = quantidade * valorPreco



    const novoProduto ={
        codigo,
        nome: nomeMaiusculo,
        quantidade: quantidade,
        preco: valorPreco,
        total: valorTotal,
        criadoEm: new Date().toISOString()

    }
    // Chama o Model para persistir no arquivo JSON
    const produtoSalvo = produtoModel.salvar(novoProduto);

    // Retorna a respota HTTP 201 (Created)
    return res.status(201).json({
        sucesso: true,
        sucesso: "Produto cadastrado com sucesso!",
        produto: produtoSalvo
    })

},
listarProdutos: (req, res) =>{
    const produtos = produtoModel.buscarTodos();
    return res.json({
        sucesso: true,
        total: produtos.length,
        produtos
    })
}

}