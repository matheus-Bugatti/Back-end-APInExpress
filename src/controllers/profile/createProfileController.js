import { create, validateProfile } from '../../models/profileModel.js'
import bcrypt from 'bcrypt'

export const createProfileController = async (req, res) => {
    const profile = req.body

    //validar de dado
    //validateProfile recebe o objeto profile com dados do usuário e um segundo parametro deixa o ID ser opcional, ou seja validação parcial
    const validation = validateProfile(profile, { id: true })
    if (!validation.success) {
        return res.status(400).json({
            message: 'Dados invalidos',
            errors: validation.errors
        })
    }

    validation.data.pass = await bcrypt.hash(validation.data.pass, 10)

    const result = await create(validation.data)
    res.json({
        message: 'Usuário criado com sucesso!',
        profile: result
    })
}