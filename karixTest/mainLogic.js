const configurationLogic = require('./configLogic');
const MySQLData = require('../Library/MySQLData');
const axios = require('axios');
const { response } = require('express');
const CircularJSON = require('circular-json');
// var
//   CircularJSON = require('circular-json'),
//   obj = { foo: 'bar' },
//   str
// ;

module.exports = class MainLogic extends MySQLData {

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
                "name" : "",
                "api-version" : "2.0"
            }
            let apiAction = "account";
            const getAccount = await axios.get(configurationLogic.baseUrl + apiAction, {
                params: reqPrams,
                withCredentials: true,
                auth: configurationLogic.authConfig
            });
            this.resp.json({'statusCode' : 200 , 'data' : getAccount.data})
            
		}
		catch (err) {
			console.log("Catch in Main Logic.. Hello world.." + err);
		}
    }
    
    async createSubAccount () {
        try {
            let reqPrams = this.req.body;
            let apiAction = "account";
            console.log(this.req.body);
            const createSubAccount = await axios.post(configurationLogic.baseUrl + apiAction, reqPrams ,{
                withCredentials: true,
                auth: configurationLogic.authConfig
            });
            const str = CircularJSON.stringify(createSubAccount);
            this.resp.json({'statusCode' : 200, 'data' : createSubAccount.data});
            
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