import { create } from '../../models/profileModel.js'


export const createProfileController = async (req, res) => {
    const profile = req.body //Requisição para oq o usuário mandou

    const result = await create(profile)

    res.json({
        message: 'Usuario criado com sucesso!',
        profile: result
    })
}