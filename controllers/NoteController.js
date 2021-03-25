//Controller for note
//Get Note model
const Note = require('../models/Note');

//Find all Notes.
exports.findAll = async function (req, res, next) {

    res.status(200)
        .json(
            await Note.find()
            .sort({_id: 'desc'})
            .populate('user')
            
            );
};

//Find Note by _id.
exports.findById = async function (req, res, next) {
    try {
        const note = await Note.findOne({ _id: req.params.id })
        res.status(200)
            .json(note)
    } catch {
        res.status(404)
            .json({ message: "Note not found." })
    }
};

//Create Note.
exports.create = async function (req, res, next) {
    const note = new Note(
        {
            user: req.body.user,
            title: req.body.title,
            content: req.body.content,
            created: req.body.created,
            addes: Date.now()
        }
    );

    try {
        await note.save();

        res.status(200)
            .json(
                {
                    message: "Note added."
                }
            )
    } catch (err) {
        res.status(500)
            .json(
                {
                    message: "Can not add note."
                }
            )
    }
};

//Edit Note.
exports.edit = async function (req, res, next) {
    try {
        var note = await Note.findOne({ _id: req.params.id })

        note.title = req.body.title;
        note.content = req.body.content;
        note.user = req.body.user;
         
        await note.save()
        res.status(200)
            .json(
                {
                    message: "Note updated"
                }
            )
    } catch (err) {
        res.status(404)
        res.send({ error: "Note doesn't exist." })
    }
};

//Delete Note.
exports.delete = async function (req, res, next) {
    try {
        await Note.deleteOne({ _id: req.params.id })
        res.status(200)
            .json(
                {
                    message: "Note deleted."
                }
            )
    } catch {
        res.status(404)
            .json(
                {
                    message: "Note not found."
                }
            )
    }
};