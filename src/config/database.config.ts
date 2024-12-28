import { DataSourceOptions } from "typeorm";

const databaseConfig: DataSourceOptions = {
  type: "sqlite",
  database: "./src/database/database.sqlite",
  entities: ["./src/**/*.entities.ts"],
  migrations: ["./src/migrations/*.ts"],
  logging: false,
};

const configurations = {
  production: {
    ...databaseConfig,
    database: "./src/database/database.sqlite",
    synchronize: false,
  },
  test: {
    ...databaseConfig,
    database: ":memory:",  // SQLite em memória para testes mais rápidos
    migrationsRun: true,
    synchronize: false,
    dropSchema: true,
    logging: false, 
  },
} as const;


export const getDatabaseConfig = (env: 'production' | 'test'):DataSourceOptions=>{
  return configurations[env];
}