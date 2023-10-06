import express from "express";
import morgan from "morgan";

import dotenv from "dotenv"
dotenv.config()

import { connectToMongo } from "./src/configs/database.js";

const app = express();

app.listen(3000, () => {
    connectToMongo();
    console.log("Servidor corriendo en http://localhost:3000");
})
