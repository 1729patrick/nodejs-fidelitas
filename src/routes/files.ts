import { Router } from "express";
import multer from "../helpers/multer";
import authMiddleware from "../middlewares/auth";
import { celebrate, Joi, Segments } from "celebrate";
import showFile from "../services/files/showFile";
import uploadFile from "../services/files/uploadFile";

const router = Router();

router.route("/show/:bucketName/:fileName").get(
  celebrate({
    [Segments.PARAMS]: Joi.object().keys({
      bucketName: Joi.string().required(),
      fileName: Joi.string().required(),
    }),
  }),
  showFile
);

router.use(authMiddleware);
router.post(
  "/upload",
  multer(),
  celebrate({
    [Segments.BODY]: Joi.object().keys({
      type: Joi.string().valid("product", "profile", "general").required(),
    }),
  }),
  uploadFile
);

export default router;
