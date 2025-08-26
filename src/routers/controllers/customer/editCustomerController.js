export const editCustomerController = (req, res) => {
    const id = req.params.id
    const dados = req.body
    res.json({
        message: `Cliente de ${id} editado com sucesso!`,
        customer: dados
    })
}