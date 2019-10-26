'use strict';
const Utils = require("./utils/Utils");
const DatabaseUtil = require("./utils/DatabaseUtil");
const RampRequest = require("./models/RampRequest");

module.exports.http = (request, response) => {
    const database = new DatabaseUtil();
    const data = database.GetAll();
    response.status(200).send(JSON.stringify(data));
};