const multer = require("multer");

const storage = multer.memoryStorage();

const fileFilter = (req, file, cb) => {
  if (
    file.fieldname === "profileImage" ||
    file.fieldname === "icon"
  ) {
    const allowed = ["image/jpeg", "image/png", "image/jpg", "image/svg+xml"];

    if (allowed.includes(file.mimetype)) {
      cb(null, true);
    } else {
      cb(new Error("Image must be jpg, png or svg"), false);
    }
  } else if (
    file.fieldname === "aadharCard" ||
    file.fieldname === "certificate"
  ) {
    const allowed = [
      "image/jpeg",
      "image/png",
      "image/jpg",
      "application/pdf",
    ];

    if (allowed.includes(file.mimetype)) {
      cb(null, true);
    } else {
      cb(new Error("Documents must be jpg, png or pdf"), false);
    }
  } else {
    cb(new Error("Invalid file field"), false);
  }
};
const upload = multer({
  storage,
  limits: {
    fileSize: 5 * 1024 * 1024,
  },
  fileFilter,
});

module.exports = upload;
