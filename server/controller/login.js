const {User} = require('../models/users')
const Joi = require('joi')
const bcrypt = require('bcrypt')

async function loginUser(req, res){
	try {
        const { error } = validate(req.body);
        if(error)
        {
            return res.status(400).send({ message: error.details[0].message});
        }

        const user = await User.findOne({email: req.body.email});
        if(!user)
            return res.status(401).send({message: "Invalid Credentials"})

        const validPassword = await bcrypt.compare(
            req.body.password, user.password
        )

        if(!validPassword)
        {
            console.log("invalid Credentials")
            return res.status(401).send({ message: "Invalid Email or Password"})
        }

        const token = user.generateAuthToken();
        res.status(200).send({data: token, message: " Logged in Successfully"})
        
    } catch (error) {
        res.status(500).send({message: "Internal server error"});
    }
}

const validate = (data) => {
	const schema = Joi.object({
		email:Joi.string().email().required().label("email"),
		password : Joi.string().min(3).max(30).required().label("password")
	})
	return schema.validate(data);
}

module.exports = {
    loginUser
}