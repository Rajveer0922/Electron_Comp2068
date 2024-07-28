const { contextBridge } = require('electron');

contextBridge.exposeInMainWorld('api', {
  saveNote: (note) => {
    let notes = JSON.parse(localStorage.getItem('notes')) || [];
    notes.push(note);
    localStorage.setItem('notes', JSON.stringify(notes));
  },
  deleteNote: (index) => {
    let notes = JSON.parse(localStorage.getItem('notes')) || [];
    notes.splice(index, 1);
    localStorage.setItem('notes', JSON.stringify(notes));
  },
  updateNote: (index, newNote) => {
    let notes = JSON.parse(localStorage.getItem('notes')) || [];
    notes[index] = newNote;
    localStorage.setItem('notes', JSON.stringify(notes));
  },
  getNotes: () => {
    return JSON.parse(localStorage.getItem('notes')) || [];
  }
});
