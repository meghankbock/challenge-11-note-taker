const router = require("express").Router();
const notes = require("../../db/db");

const {
    validateNote,
    createNewNote,
    findById,
    deleteNote,
} = require("../../lib/notes");

router.get("/notes", (req, res) => {
    res.json(notes);
});

router.post("/notes", (req, res) => {

    if (!validateNote(req.body)) {
        res.status(400).send("Please enter a valid note title and description.");
    } else {
        const newNote = createNewNote(req.body, notes);
        res.json(newNote);
    }
});

router.delete("/notes/:id", (req, res) => {
    const result = deleteNote(req.params.id, notes);
    res.json(result);
});

module.exports = router;