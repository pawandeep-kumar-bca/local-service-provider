const ImageKit = require("@imagekit/nodejs").default;
const { toFile } = require("@imagekit/nodejs");

const imagekit = new ImageKit({
  privateKey: process.env.IMAGEKIT_PRIVATE_KEY,
});

// Upload File
const uploadFile = async (file, fileName, folder) => {
  try {
    const result = await imagekit.files.upload({
      file: await toFile(file.buffer, file.originalname),
      fileName,
      folder,
    });

    return {
      url: result.url,
      fieldId: result.fileId,
    };
  } catch (error) {
    console.error("ImageKit Upload Error:", error);
    throw error;
  }
};

// Delete File
const deleteFile = async (fileId) => {
  if (!fileId) return;

  try {
    await imagekit.files.delete(fileId);
  } catch (error) {
    console.error("ImageKit Delete Error:", error);
    throw error;
  }
};

module.exports = {
  uploadFile,
  deleteFile,
};