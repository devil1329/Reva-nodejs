const router = require('express').Router();
const loginController = require('../controller/login')
const registerController = require('../controller/register')
const animeController = require('../controller/anime')

router.route('/reva/api/v1/anime/register')
        .post(registerController.registerUser)

router.route('/reva/api/v1/anime/login')
        .post(loginController.loginUser)

router.route('/reva/api/v1/anime/get-anime/:animeFor')
        .get(animeController.fetchData)

module.exports = router;