export const loginController = async (req, res) => {
    // receber o email e a senha
    const { email, pass } = req.body
    // comparar se o email e a senha batem com o que está no banco de dedos
    const user = await getByEmail(email)
    if (!user) {
        return res.status(401).json({ message: '' })
    }
    // se bater, gerar um token JWT
    console.log('JWT_SECRET')
    const token = await jwt.sign({ id: user.id, email: user.email }, process.env.JWT_SECRET, { expiresIn: '1d' })

    if (!token) {
        return res.status(500).json({ message: 'Erro ao gerar token de acesso' })
    }
    // enviar o token para o cliente
    return res.status(200).json({
        profile: {
            id: user.id,
            name: user.name,
            email: user.email,
            avatar: user.avatar
        }
    })
}