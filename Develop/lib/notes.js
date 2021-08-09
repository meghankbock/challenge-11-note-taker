const fs = require("fs");
const path = require("path");
const uuid = require("uuid");

function createNewNote(body, notesArray) {
    const note = body;
    note.id = uuid.v4();
    notesArray.push(note);
    fs.writeFileSync(
        path.join(__dirname, '../db/db.json'),
        JSON.stringify({ notes: notesArray }, null, 2)
    );
    return note;
};

function deleteNote(id, notesArray) {
    const newNotesArray = notesArray.filter(note => note.id !== id);
    fs.writeFileSync(
        path.join(__dirname, '../db/db.json'),
        JSON.stringify({ notes: newNotesArray }, null, 2)
    );
    return newNotesArray;
};

function validateNote(note) {
    if(!note.title || typeof note.title !== 'string') {
        return false;
    }
    if(!note.text || typeof note.text !== 'string') {
        return false;
    } 
    return true;
};

function findById(id, notesArray) {
    const result = notesArray.filter(note => note.id === id)[0];
    return result;
};

module.exports = {
    validateNote,
    createNewNote,
    findById,
    deleteNote,
};