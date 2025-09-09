import { getById } from "../../models/customerModel.js"

export const getByIdCustomerController = async (req, res) => {
    const id = req.params.id

    const result = await getById(+id)
    res.json({
        message: `Cliente com ID ${id} consultado com sucesso!`,
        customer: result
    })
}