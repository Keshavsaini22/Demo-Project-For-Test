const multer = require('multer');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './uploads'); 
  },
  filename: function (req, file, cb) {
    cb(null, `${Date.now()}-${file.originalname}`); 
  }
});

const upload = multer({
  storage: storage,
  limits: { fileSize: 1024 * 1024 * 5 }
});

const uploadMiddleware = upload.fields([
  { name: 'docs', maxCount: 5 },  
//   { name: 'documents', maxCount: 3 }  
]);

module.exports = uploadMiddleware;
