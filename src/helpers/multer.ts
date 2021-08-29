import multer from "multer";
import { resolve } from "path";

const upload = multer({ dest: resolve(__dirname, "..", "..", "tmp", "files") });

export default () => upload.single("file");
