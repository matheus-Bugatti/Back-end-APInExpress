export const deleteProfileController = (req, res) => {
    const id = req.params.id
    res.json({
        message: `Usuario com ID ${id} deletado com sucesso!`
    })
}