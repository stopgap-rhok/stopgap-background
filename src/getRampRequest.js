'use strict';
const Utils = require("./utils/Utils");
const RampRequest = require("./models/RampRequest");
const DatabaseService = require("./services/DatabaseService");

module.exports.getRampRequest = (request, response) => {
    const database = new DatabaseService();
    
    // Get the Parameters
    /* rampRequestId: 0 */
    let rampRequestId = Utils.getQueryOrBodyParam(request, "rampRequestId");

    // Get the Request and File
    const rampRequest = database.getByRequestId(rampRequestId);

    // Return our JSON Response
    const jsonReturn = {
        request: rampRequest,
    };
    response.status(200).send(JSON.stringify(jsonReturn));
};