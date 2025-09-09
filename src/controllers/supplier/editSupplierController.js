export const editSupplierSupplierController = (req, res) => {
    const id = req.params.id
    const dados = req.body
    res.json({
        message: `Fornecedor de ${id} editado com sucesso!`,
        supplier: dados
    })
}