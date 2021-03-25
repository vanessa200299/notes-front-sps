//Controller for user
//Get User and Note model
const User = require('../models/User');
const Note = require('../models/Note');

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
            .json({ message: "User not found." })
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
                    message: "User added."
                }
            )
    } catch (err) {
        res.status(500)
            .json(
                {
                    message: "Can not add user."
                }
            )
    }
};

//Delete User.
exports.delete = async function (req, res, next) {
    try {
        const notesUser = await Note.find()
            .where('user')
            .equals(req.params.id);

        if (notesUser.length) {
            res.status(400)
                .json({
                    message: `Cannot delete user has ${notesUser.length} associated notes`
                })
        } else {
            await User.deleteOne({ _id: req.params.id })
            res.status(200)
                .json(
                    {
                        message: "User deleted"
                    }
                )
        }

    } catch {
        res.status(404)
            .json(
                {
                    message: "User not found."
                }
            )
    }
};
