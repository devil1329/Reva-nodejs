const mongoose = require('mongoose')

const connection = mongoose.connect(process.env.DB)
	.then(db => {
		console.log("database connected");
		return db;
	}).catch(err => {
		console.error(`Error connecting to database: ${err}`);
	})

module.exports = connection;