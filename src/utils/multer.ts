import multer from "multer";

const storage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, "uploads");
  },
  filename(req, file, cb) {
    cb(null, new Date().toISOString() + "-" + file.originalname);
  },
});

const upload = multer({ storage, limits: { fieldSize: 25 * 1024 * 1024 } });

export default upload;
