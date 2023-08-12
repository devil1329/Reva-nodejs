const mongoose = require('mongoose');

const animeSchema = new mongoose.Schema({
    anime_description: { type: String, required: true },
    anime_for: { type: String, required: true },
    anime_img: { type: String, required: true },
    anime_name: { type: String, required: true },
});

const anime = mongoose.model('anime', animeSchema);

module.exports = anime;
