module.exports = () => {
    const controller = {};
    const produtos = [];    

    controller.listar = (req, res) => {        
        res.status(200).json(produtos);
    };

    controller.buscarPorId = (req, res) => {               
        const produto = produtos.find(produto => produto.id == req.params.id);
        if (produto) {
            res.status(200).json(produto);
        } else {
            res.status(404).json({ error: "Produto não encontrado." });
        }
    };

    controller.salvar = (req, res) => {    
        const produto = req.body;

        const novoId = produtos.length > 0 ? Math.max(...produtos.map(p => p.id)) + 1 : 1;
        produto.id = novoId;

        produtos.push(produto);
        res.status(201).json(produto);
    };

    controller.excluir = (req, res) => {   
        const id = parseInt(req.params.id);    
        console.log(`Tentando excluir produto com ID: ${id}`);

        const index = produtos.findIndex(produto => produto.id === id);

        if (index !== -1) {
            produtos.splice(index, 1); 
            console.log(`Produto com ID ${id} foi excluído.`);
            res.status(204).send(); 
        } else {
            console.log(`Produto com ID ${id} não foi encontrado.`);
            res.status(404).json({ error: "Produto não encontrado." });
        }
    };
    
    return controller;
}
