import { DataSource } from "typeorm";


export const AppDataSource = new DataSource({
  type:'sqlite',
  database: './src/database/database.sqlite',
  entities: ["./src/**/*.entities.ts"],
  migrations: ['./src/migrations/*.ts'],
  logging: false
})
