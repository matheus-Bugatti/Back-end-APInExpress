import { create } from '../../models/customerModel.js'

export const createCustomerController = async (req, res) => {
    const customer = req.body

    const result = await create(customer)

    res.json({
        message: 'Customer criado com sucesso!',
        customer: result
    })
}