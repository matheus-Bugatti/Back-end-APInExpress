import { update } from '../../models/profileModel.js'

export const editProfileController = async (req, res) => {
    const id = req.params.id
    const profile = req.body

    const result = await update(+id, profile)
    res.json({
        message: `Usuário de ${id} editado com sucesso!`,
        profile: result
    })
}