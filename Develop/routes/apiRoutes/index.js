const router = require("express").Router();

const {
    validateNote,
    createNewNote,
    findById,
    deleteNote,
} = require("../../lib/notes");

const { notes } = require("../../db/db");

router.get("/notes", (req, res) => {
    res.json(notes);
});

router.post("/notes", (req, res) => {

    if (!validateNote(req.body)) {
        res.status(400).send("Please enter a note.");
    } else {
        const newNote = createNewNote(req.body, notes);
        res.json(newNote);
    }
});

router.delete("/notes/:id", (req, res) => {
    const newNotesArray = deleteNote(req.params.id, notes);
    res.json(newNotesArray);
});

module.exports = router;