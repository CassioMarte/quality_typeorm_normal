import "reflect-metadata";
import express from "express";
import { AppDataSource } from "./database/datasource";
import cors from "cors";
import dotenv from "dotenv";
import { userRoutes } from "./routes/User.routes";

dotenv.config();

export const createApp = async () => {
  if (!AppDataSource.isInitialized) {
    await AppDataSource.initialize();
    console.log("Database initialized");
  }
  const app = express();
  app.use(express.json());
  app.use(cors());

  app.use("/users", userRoutes);

  return app;
};
