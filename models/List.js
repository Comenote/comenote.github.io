const mongoose = require("mongoose");
const Lists = mongoose.model("Lists", {
    title: String,
    list: Array,
    author: { 
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }
});

module.exports = Lists;
module.exports.CreateLists = (listInfo,callback) =>{
    listInfo.save(callback);
};