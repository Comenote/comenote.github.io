const mongoose = require("mongoose");
const Notes = mongoose.model("Notes", {
	noteTitle: String,
	noteDescript: String,
    author: { 
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }
});

module.exports = Notes;
module.exports.CreateNotes = (NoteInfo,callback) => {
    NoteInfo.save(callback);
};