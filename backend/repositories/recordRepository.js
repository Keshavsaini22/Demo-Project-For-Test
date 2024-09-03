const BaseRepository = require("./baseRepository");
const { Record } = require("../models");

class RecordRepository extends BaseRepository {

    constructor(payload) {
        super({ payload });
    }

}

module.exports = new RecordRepository({ model: Record })