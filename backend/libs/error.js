
class badRequest extends Error {
  constructor(message) {
        super(message);
  }
}

class notFound extends Error {
  constructor(message) {
        super(message);
  }
}

class noContent extends Error {
     constructor(message) {
           super(message);
     }
  }

class conflict extends Error {
  constructor(message) {
        super(message);
  }
}

class internalServerError extends Error {
  constructor(message) {
        super(message);
  }
}

module.exports = {
   badRequest,
   notFound,
   conflict,
   internalServerError,
   noContent,
}

