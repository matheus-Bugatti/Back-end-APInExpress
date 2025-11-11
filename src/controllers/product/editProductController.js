import { update } from "../../models/productModel.js"

export const editProductController = async (req, res) => {
    const id = req.params.id
    const product = req.body

    if (req.userLogged.id !== id) {
        return res.status(403).json({ message: 'Você não tem permissão pra editar esse perfil' })
    }

    const result = await update(+id, product)
    res.json({
        message: `Produto de ${id} editado com sucesso!`,
        product: result
    })
}