import { create } from '../../models/productModel.js'

export const createProductController = async (req, res) => {
    const product = req.body

    const result = await create(product)
    console.log("ID do usuario", req.userLogged.id)
    res.json({
        message: 'Produto criado com sucesso!',
        product: result
    })
}