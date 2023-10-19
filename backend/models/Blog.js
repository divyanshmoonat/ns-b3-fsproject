const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        min: 10
    },
    description: {
        type: String,
        required: true,
        min: 10,
    },
    image: {
        type: String,
        required: false,
        default: "",
    },
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users',
        required: true
    },
    upvotes: {
        type: Number,
        required: false,
        deafult: 0
    },
    downvote: {
        type: Number,
        required: false,
        deafult: 0
    }
}, { timestamps: true });

module.exports = mongoose.model('blogs', blogSchema);