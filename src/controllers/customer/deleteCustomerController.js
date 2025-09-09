import { remove } from '../../models/customerModel.js'

export const deleteCustomerController = async (req, res) => {
    const id = req.params.id

    const result = await remove(+id)

    res.json({
        message: `Cliente com ID ${id} deletado com sucesso!`
    })
}