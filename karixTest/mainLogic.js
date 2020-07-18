const connectionPool = require('./configLogic');
const MySQLData = require('../Library/MySQLData');
const axios = require('axios');
const { response } = require('express');
const CircularJSON = require('circular-json');
// var
//   CircularJSON = require('circular-json'),
//   obj = { foo: 'bar' },
//   str
// ;

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
    
    async getAccount() {
		try {
            let reqPrams = {
                "offset" : 0,
                "limit" : 0,
                "name" : "chandra154",
                "api-version" : "2.0"
            }
            let authConfig = {
                username: "15fab3de-4aa0-4638-9a5e-db0ffa769e69",
                password: "985a91df-222f-469a-8d9d-a1a1e400ab5d"
            }
            const getAccount = await axios.get('https://api.karix.io/account', {
                params: reqPrams,
                withCredentials: true,
                auth: authConfig
            });
            const str = CircularJSON.stringify(getAccount);
            this.resp.json({'data' : JSON.parse(str)});
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