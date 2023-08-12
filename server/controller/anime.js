const anime = require("../models/data");

async function fetchData(req, res) {
	try {
		const animeFor = req.params.animeFor;
		const animeList = await anime.find({ anime_for: animeFor });
		res.json(animeList);
	} catch (error) {
		res.status(500).json({ message: 'Server error' });
	}
}

module.exports = {
	fetchData
}