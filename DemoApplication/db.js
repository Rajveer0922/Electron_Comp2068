const mongoose = require('mongoose');

const connectionString = 'mongodb+srv://rajajitsandhu23:0LldnSPYEARE3wVz@cluster0.20k54ny.mongodb.net/your_database_name?retryWrites=true&w=majority';

mongoose.connect(connectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const noteSchema = new mongoose.Schema({
  content: String,
});

const Note = mongoose.model('Note', noteSchema);

module.exports = Note;
