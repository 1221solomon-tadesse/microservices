import "reflect-metadata";
import express from "express";
import dotenv from "dotenv";
import { AppDataSource } from "./config/data-source";
import userRoutes from "./routes/userRoutes";

dotenv.config();
const app = express();
const port = process.env.PORT || 3001;

app.use(express.json());
app.use("/users", userRoutes);

AppDataSource.initialize()
  .then(() => {
    console.log(" Databas connected");
    app.listen(port, () => console.log(` Server running on port ${port}`));
  })
  .catch((error) => console.error(" DB connection error:", error));
