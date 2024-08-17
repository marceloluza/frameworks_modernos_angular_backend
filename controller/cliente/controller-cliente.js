module.exports = () => {
    const controller = {};
    const clientes = [];    

    controller.listar = (req, res) => {        
        res.status(200).json(clientes);
    };

    controller.buscarPorId = (req, res) => {               
        res.status(200).json(clientes.filter(cliente => cliente.id == req.param("id"))[0]);
    };

    controller.salvar = (req, res) => {    
        const cliente = req.body;        
        clientes.push(cliente);

        cliente.id = clientes.length;
        res.status(201).json(cliente);
    };

    controller.excluir = (req, res) => {                
    };
    
    return controller;
}
