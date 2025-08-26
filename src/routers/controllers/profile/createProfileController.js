export const createProfileController = (req, res) => {
    const dados = req.body
    res.json({
        message: 'Usuario criado com sucesso!',
        profile: dados
    })
}