module.exports = () => {
    const controller = {};
    const produtos = [];    

    controller.listar = (req, res) => {        
        res.status(200).json(produtos);
    };

    controller.buscarPorId = (req, res) => {               
        res.status(200).json(produtos.filter(produto => produto.id == req.param("id"))[0]);
    };

    controller.salvar = (req, res) => {    
        const produto = req.body;        
        produtos.push(produto);

        produto.id = produtos.length;
        res.status(201).json(produto);
    };

    controller.excluir = (req, res) => {                
    };
    
    return controller;
}
