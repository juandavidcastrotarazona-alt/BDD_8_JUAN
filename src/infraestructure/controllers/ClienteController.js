const GetClientesUseCase = require('../../application/use-cases/GetClientesUseCase');
const CreateClienteUseCase = require('../../application/use-cases/CreateClienteUseCase');

class ClienteController {
    constructor(clienteRepositorio) {
        this.getClientesUseCase = new GetClientesUseCase(clienteRepositorio);
        this.createClienteUseCase = new CreateClienteUseCase(clienteRepositorio);
    }

    async getClientes(req, res) {
        try {
            const clientes = await this.getClientesUseCase.execute();

            res.status(200).json({
                success: true,
                data: clientes
            });
        } catch (error) {
            res.status(500).json({
                success: false,
                error: error.message
            });
        }
    }

    async createCliente(req, res) {
        try {
            const newCliente = await this.createClienteUseCase.execute(req.body);

            res.status(201).json({
                success: true,
                data: newCliente
            });
        } catch (error) {
            res.status(400).json({
                success: false,
                error: error.message
            });
        }
    }
}

module.exports = ClienteController;