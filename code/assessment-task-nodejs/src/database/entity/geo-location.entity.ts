import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class GeoLocation {
  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @Column({
    type: "varchar",
    length: 512,
    nullable: false,
  })
  longitude!: string;

  @Column({
    type: "varchar",
    length: 512,
    nullable: false,
  })
  latitude!: string;

  @Column({
    type: "longtext",
    nullable: false,
  })
  location!: string;
}
