const ImageKit = require("@imagekit/nodejs").default;
const { toFile } = require("@imagekit/nodejs");

const imagekit = new ImageKit({
  privateKey: process.env.IMAGEKIT_PRIVATE_KEY,
});

const uploadImage = async (file, fileName, folder) => {
  try {
    const result = await imagekit.files.upload({
      file: await toFile(file.buffer, file.originalname),
      fileName,
      folder,
    });

    return {
      url: result.url,
      fileId: result.fileId,
    };
  } catch (error) {
    console.error("ImageKit Error:", error);
    throw error;
  }
};

module.exports = uploadImage;