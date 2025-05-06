import multer from "multer";
import { Request } from "express";
import path from "path";
import { v4 as uuidv4 } from "uuid";
import sharp from "sharp";
import fs from "fs";

const uploadDir = path.join(__dirname, "../../public/uploads");
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
}

const storage = multer.memoryStorage();

const fileFilter = (req: Request, file: Express.Multer.File, cb: Function) => {
  if (file.mimetype.startsWith("image/")) {
    cb(null, true);
  } else {
    cb(new Error("Not an image! Please upload an image."), false);
  }
};

export const upload = multer({
  storage: storage,
  fileFilter: fileFilter,
  limits: {
    fileSize: 5 * 1024 * 1024,
  },
});

export const processAndSaveImage = async (
  file: Express.Multer.File
): Promise<string> => {
  const filename = `${uuidv4()}${path.extname(file.originalname)}`;
  const filepath = path.join(uploadDir, filename);

  await sharp(file.buffer)
    .resize(400, 400, {
      fit: "cover",
      position: "center",
    })
    .jpeg({ quality: 90 })
    .toFile(filepath);

  return `/uploads/${filename}`;
};
