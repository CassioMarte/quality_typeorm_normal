import { Column, Entity, PrimaryColumn } from "typeorm";
import { v4 as uuid } from "uuid";

@Entity("users")
export class Users {
  @PrimaryColumn({ type: "uuid" })
  readonly id: string;

  @Column({ type: "varchar", length: 150 })
  name: string;

  @Column({ type: "varchar", unique: true, length: 250 })
  email: string;

  @Column({ type: "varchar" })
  phone: string;

  @Column({ type: "datetime", default: () => "now()" })
  created_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}

//  "strictPropertyInitialization": false para que o constructor não seja obrigatorio

//npx typeorm migration:create ./src/database/migrations/CreateUser

//npx ts-node ./node_modules/typeorm/cli.js migration:run --dataSource ./src/database/datasource.ts