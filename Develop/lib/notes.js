const fs = require("fs");
const path = require("path");
const uuid = require("uuid");

function createNewNote(body, noteArrays) {
    const note = body;
    note.id = uuid.v4();
    noteArrays.push(note);
    fs.writeFileSync(
        path.join(__dirname, '../data/db.json'),
        JSON.stringify({ notes: noteArrays }, null, 2)
    );
    return note;
};

function validateNote(note) {
    if(!note.title || typeof note.title !== 'string') {
        return false;
    }
    if(!note.text || typeof note.text !== 'string') {
        return false;
    } return true;
};

module.exports = {
    validateNote,
    createNewNote,
};