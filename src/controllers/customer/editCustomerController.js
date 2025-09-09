import { update } from "../../models/customerModel.js"

export const editCustomerController = async (req, res) => {
    const id = req.params.id
    const customer = req.body

    const result = await update(+id, customer)
    res.json({
        message: `Customer de ${id} editado com sucesso!`,
        customer: result
    })
}