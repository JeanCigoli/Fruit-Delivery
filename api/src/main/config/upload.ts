import multer from 'multer';
import {
  fileFilter,
  handleFileName,
  megaBytesToBytes,
  uploadsPath,
} from '../../utils/upload';

const multerConfig = {
  fileFilter,
  limits: {
    fileSize: megaBytesToBytes(1),
  },
  storage: multer.diskStorage({
    destination: uploadsPath,
    filename: handleFileName,
  }),
};

const upload = multer(multerConfig);

export default upload;
