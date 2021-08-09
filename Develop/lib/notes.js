const fs = require("fs");
const path = require("path");
const uuid = require("uuid");

function createNewNote(body, notes) {
    const note = body;
    note.id = uuid.v4();
    notes.push(note);
    fs.writeFileSync(
        path.join(__dirname, '../db/db.json'),
        JSON.stringify(notes, null, 2)
    );
    return note;
};

function deleteNote(id, notes) {
    let newNotesArray = notes;
    newNotesArray.forEach(function (note) {
        if (note.id === id) {
            newNotesArray.splice(newNotesArray.indexOf(note), 1);
        }
    })
    fs.writeFileSync(
        path.join(__dirname, '../db/db.json'),
        JSON.stringify(newNotesArray, null, 2)
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

function findById(id, notes) {
    const result = notes.filter(note => note.id === id)[0];
    return result;
};

module.exports = {
    validateNote,
    createNewNote,
    findById,
    deleteNote,
};