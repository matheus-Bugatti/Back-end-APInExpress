import { list } from "../../models/customerModel.js"

export const listCustomerController = async (req, res) => {
    const result = await list()
    res.json({
        message: 'Clientes consultados com sucesso!',
        customer: result
    })
}