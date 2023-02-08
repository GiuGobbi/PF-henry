const { allUsers } = require("../../utils/allUsersUtil")

const getById = async (req, res) => {
    try {
        const idUser = req.params.id
        const allUser = await allUsers()
        const user = await allUser.find((e) => e.user_id.toString() == idUser)
        await user ?
        res.status(200).json(user) :
        res.status(404).send('User ID not found')
    } catch (error) {
        console.error(error)
        res.status(404).send('Error getting user ID')
    }
}

module.exports = {
    getById
}