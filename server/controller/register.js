const { User} = require('../models/users');
const bcrypt = require('bcrypt');

async function registerUser(req, res) {
	console.log("Entered register");
	try {
		console.log("Entered try block in register");

		const user = await User.findOne({ email: req.body.email });
		if (user) {
			return res.status(409).send({ message: "User already registered" });
		}

		const salt = await bcrypt.genSalt(Number(process.env.SALT));
		const hashPassword = await bcrypt.hash(req.body.password, salt);

		await new User({ ...req.body, password: hashPassword }).save();
		console.log("registered successfully");
		return res.status(201).send({ message: "Registered Successfully" });
	} catch (error) {
		console.error("Error occurred:", error);
		return res.status(500).send({ message: "Internal Server Error" });
	}
}

module.exports = {
	registerUser
};
