import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from "typeorm";

@Entity()
export class Transaction {
  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @Column()
  senderUserId!: string;

  @Column()
  receiverUserId!: string;

  @Column()
  bankCode!: string;

  @Column("decimal", { precision: 10, scale: 2 })
  amount!: number;

  @Column({ default: "PENDING" })
  status!: "PENDING" | "COMPLETED" | "FAILED";

  @CreateDateColumn()
  createdAt!: Date;
}
