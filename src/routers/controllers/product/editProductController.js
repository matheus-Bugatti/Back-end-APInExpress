export const editProductController = (req, res) => {
    const id = req.params.id
    const dados = req.body
    res.json({
        message: `Produto de ${id} editado com sucesso!`,
        product: dados
    })
}