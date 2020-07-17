const connectionPool = require('./configLogic');
const MySQLData = require('../Library/MySQLData');

module.exports = class MainLogic extends MySQLData{

	constructor (req, resp) {
		super();
		this.req = req;
		this.resp = resp;
	}

	async getCustomers() {
		try {
			console.log("Try in Main Logic.. Hello world..");
		}
		catch (err) {
			console.log("Catch in Main Logic.. Hello world.." + err);
		}
	}

	static create(req, resp) {
		let useCase = new MainLogic(req, resp);
		return useCase;
	}
}