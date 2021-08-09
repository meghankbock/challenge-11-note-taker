const router = require("express").Router();

const {
    validateNote,
    createNewNote,
} = require("../../lib/notes");

const { notes } = require("../../db/db.json");

router.get("/api/notes", (req, res) => {
    res.json(notes);
});

router.post("/api/notes", (req, res) => {

    if (!validateNote(req.body)) {
        res.status(400).send("Please enter a note.");
    } else {
        const newNote = createNewNote(req.body, notes);
        res.json(newNote);
    }
});

module.exports = router;