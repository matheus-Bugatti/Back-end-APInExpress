import { remove } from '../../models/profileModel.js'

export const deleteProfileController = async (req, res) => {
    const id = req.params.id

    const result = await remove(+id) // o + converte o dado para number igual o Number(x) ou parseInt(x), sendo que elas vem em string

    res.json({
        message: `Usuario com ID ${id} deletado com sucesso!`
    })
}