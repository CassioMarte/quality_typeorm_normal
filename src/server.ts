import "reflect-metadata";
import express from "express";
import { AppDataSource } from "./database/datasource";
import cors from 'cors'
import dotenv from 'dotenv'


AppDataSource.initialize().then(() => {
  console.log("Database has been initialized ");

  const app = express();
  app.use(express.json())
  app.use(cors())
  dotenv.config()


  app.listen(process.env.PORT || 3000, () => {
    console.log("Running on welcome");
  });
}).catch((err)=>{
  console.error(`Error during database initialization, ${err}`)
  process.exit((1))
});

