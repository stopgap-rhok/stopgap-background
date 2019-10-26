const RampRequest = require("../models/RampRequest");

class DatabaseService {
    constructor() {
        this.dbData = [
            new RampRequest({
                requestId: 0,
                businessName: "My Business",
                businessAddress: "123 Example Street",
                businessDetails: "",
                metRequirements: false,
                userEmail: "user@example.com",
                userIsOwner: false,
                attachmentUrls: [],
            }),
            new RampRequest({
                requestId: 1,
                businessName: "Cabannas",
                businessAddress: "Cabana Way",
                businessDetails: "",
                metRequirements: false,
                userEmail: "example@business.com",
                userIsOwner: true,
                attachmentUrls: [],
            }),
            new RampRequest({
                requestId: 2,
                businessName: "Oni",
                businessAddress: "343 Mombassa St",
                businessDetails: "",
                metRequirements: false,
                userEmail: "613-552-1234",
                userIsOwner: true,
                attachmentUrls: [],
            })
        ];
    }

    upload(data) {
        this.dbData.push(data);
    }
    getAll() {
        return this.dbData;
    }
    getAllPaginated(skip, take) {
        return this.dbData.skip(skip).take(take);
    }

    getByRequestId(id) {
        return this.dbData[id];
    }
}

module.exports.DatabaseService = DatabaseService;