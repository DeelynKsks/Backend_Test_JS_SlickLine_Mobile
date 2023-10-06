import { Router } from "express";
import multer from 'multer';
import GridFsStorage from 'multer-gridfs-storage';
import { connectToMongo } from "../configs/database"; // Asegúrate de reemplazar esto con la ruta correcta a tu archivo de conexión

const router = Router();

// Crear conexión a MongoDB
const conn = connectToMongo();

// Configurar almacenamiento de GridFS
const storage = new GridFsStorage({
  db: conn,
  file: (req, file) => {
    return new Promise((resolve, reject) => {
      const filename = file.originalname;
      const fileInfo = {
        filename: filename,
        bucketName: 'uploads'
      };
      resolve(fileInfo);
    });
  }
});

const upload = multer({ storage });

// Ruta para subir archivos
router.post('/enviar', upload.single('archivo'), async (req, res) => {
  // Aquí puedes manejar el archivo req.file y los datos del formulario req.body
  res.status(200).json({
    message: "Archivo subido correctamente",
    file: req.file
  });
});
