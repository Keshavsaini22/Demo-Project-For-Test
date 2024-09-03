const { Sequelize } = require("../models");
const { BAD_REQUEST, NOT_FOUND, CONFLICT, INTERNAL_SERVER_ERROR } = require("./constants");
const { badRequest, notFound, conflict, noContent } = require("./error");

exports.errorHandler = (error) => {
  switch (true) {
    case error instanceof Sequelize.ValidationError:
      error.message = getErrorMessage(error);
      return BAD_REQUEST;
    case error instanceof badRequest:
      return BAD_REQUEST;
    case error instanceof notFound:
      return NOT_FOUND;
    case error instanceof noContent:
      return NO_CONTENT;
    case error instanceof conflict:
      return CONFLICT;
    default:
      return INTERNAL_SERVER_ERROR;
  }
};

const getErrorMessage = (error) => {
  const error_messages = error.errors.map(err => err.message);
  return error_messages.join(', ');
};
