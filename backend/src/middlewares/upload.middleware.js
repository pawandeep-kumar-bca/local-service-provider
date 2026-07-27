const multer = require("multer");

const storage = multer.memoryStorage();

const imageTypes = [
  "image/jpeg",
  "image/jpg",
  "image/png",
  "image/svg+xml",
];

const documentTypes = [
  ...imageTypes,
  "application/pdf",
];

// Image Upload Middleware
const imageUpload = multer({
  storage,
  limits: {
    fileSize: 5 * 1024 * 1024,
  },
  fileFilter: (req, file, cb) => {
    if (imageTypes.includes(file.mimetype)) {
      return cb(null, true);
    }

    cb(new Error("Only JPG, PNG and SVG images are allowed"), false);
  },
});

// Document Upload Middleware
const documentUpload = multer({
  storage,
  limits: {
    fileSize: 5 * 1024 * 1024,
  },
  fileFilter: (req, file, cb) => {
    if (documentTypes.includes(file.mimetype)) {
      return cb(null, true);
    }

    cb(new Error("Only JPG, PNG images and PDF files are allowed"), false);
  },
});

module.exports = {
  imageUpload,
  documentUpload,
};