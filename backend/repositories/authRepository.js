const BaseRepository = require("./baseRepository");
const { User } = require("../models");
class AuthRepository extends BaseRepository {

  constructor(payload) {
    super(payload);
  }

}

module.exports = new AuthRepository({ model: User })