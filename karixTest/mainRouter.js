require('rootpath')();
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const MainLogic = require('./MainLogic');

const router = express.Router({
	mergePrams: true
});

router.get('/getCustomers', async (req, resp) => {
	try {
		let useCase = MainLogic.create(req, resp);
		await useCase.getCustomers();
	}
	catch (err) {
		let code = err.code ? err.code : 400
        resp.json({ status : code , message: err.message });
	}
});

module.exports = router;