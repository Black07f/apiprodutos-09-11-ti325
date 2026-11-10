
const fs = require('fs')

// path = caminho
const path = require ('path');

//1. Define o caminho do arquivo produto
const arquivosProdutos = path.join(__dirname, '..','..', 'database', 'produtos.json');

const produtoModel = {
    //1 Lê todos os produtos do arquivo JSON
    buscarTodos: () =>{
        if (!fs.readFileSync(arquivosProdutos, 'utf-8')){
            return [];
        }
        const conteudo = fs.readFileSync(arquivosProdutos, 'utf-8')
        return conteudo.trim() ? JSON.parse(conteuo) : [];
    },
    //2. Salva um novo produto no arquivo JSON
    salvar: (novoProduto) =>{
        const ListaProdutos = produtoModel.buscarTodos
        //3.Adicionar o novo produto na lista
    ListaProdutos.push(novoProduto);

     //4.Salvar
    fs.writeFileSync(arquivosProdutos, JSON.stringify(ListaProdutos, null, 2))
    return novoProduto
    }
}
module.exports = produtoModel;
    
