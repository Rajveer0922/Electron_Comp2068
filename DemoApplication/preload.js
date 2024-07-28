const { contextBridge } = require('electron');
const Note = require('./db');

contextBridge.exposeInMainWorld('api', {
  saveNote: async (note) => {
    try {
      const newNote = new Note({
        content: note,
      });
      await newNote.save();
    } catch (e) {
      console.error("Error saving note: ", e);
    }
  },
  deleteNote: async (id) => {
    try {
      await Note.findByIdAndDelete(id);
    } catch (e) {
      console.error("Error deleting note: ", e);
    }
  },
  updateNote: async (id, newContent) => {
    try {
      await Note.findByIdAndUpdate(id, { content: newContent });
    } catch (e) {
      console.error("Error updating note: ", e);
    }
  },
  getNotes: async () => {
    try {
      const notes = await Note.find();
      return notes;
    } catch (e) {
      console.error("Error fetching notes: ", e);
      return [];
    }
  }
});
