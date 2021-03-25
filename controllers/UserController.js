//Controller for user
//Get USer model
const User = require('../models/User');

//Find all Users.
exports.findAll = async function (req, res, next) {
    res.status(200)
        .json(await User.find());
};

//Find User by _id.
exports.findById = async function (req, res, next) {
    try {
        const user = await User.findOne({ _id: req.params.id })
        res.status(200)
            .json(user)
    } catch {
        res.status(404)
            .json({ message: "Usuario no existe." })
    }
};

//Create User.
exports.create = async function (req, res, next) {
    const user = new User(
        {
            name: req.body.name
        }
    );

    try {
        await user.save();

        res.status(200)
            .json(
                {
                    message: "Usuario creado correctamente."
                }
            )
    } catch (err) {
        res.status(500)
            .json(
                {
                    message: "Error al crear usuario."
                }
            )
    }
};

//Delete User.
exports.delete = async function (req, res, next) {
    try {
        await User.deleteOne({ _id: req.params.id })
        res.status(200)
            .json(
                {
                    message: "Usuario eliminado correctamente"
                }
            )
    } catch {
        res.status(404)
            .json(
                {
                    message: "Usuario no existe."
                }
            )
    }
};
