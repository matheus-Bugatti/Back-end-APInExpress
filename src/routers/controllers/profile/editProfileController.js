export const editProfileController = (req, res) => {
    const id = req.params.id
    const dados = req.body
    res.json({
        message: `Usuário de ${id} editado com sucesso!`,
        profile: dados
    })
}