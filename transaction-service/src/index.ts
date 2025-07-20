import "reflect-metadata";
import express from "express";
import dotenv from "dotenv";
import { AppDataSource } from "./config/data-source";
import transactionRoutes from "./routes/transactionRoutes";

dotenv.config();
const app = express();
const port = process.env.PORT || 3003;

app.use(express.json());
app.use("/transactions", transactionRoutes);

AppDataSource.initialize()
  .then(() => {
    console.log("📦 DB connected");
    app.listen(port, () => console.log(` Transaction Service running on port ${port}`));
  })
  .catch((error) => console.error(" DB connection error:", error));
