import 'reflect-metadata'
import { DataSource } from "typeorm";
import { getDatabaseConfig } from "../config/database.config";

const env = process.env.NODE_ENV === 'test' ? 'test' : 'production'

export const AppDataSource = new DataSource(getDatabaseConfig(env))
