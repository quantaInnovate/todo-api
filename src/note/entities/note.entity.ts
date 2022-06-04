import {
  Table,
  Column,
  Model,
  PrimaryKey,
  AutoIncrement,
  CreatedAt,
} from 'sequelize-typescript';
@Table({ tableName: 'notes' })
export class Note extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column
  id: number;
  @Column
  title: string;
  @Column
  content: string;
  @CreatedAt
  @Column({ field: 'created_at' })
  createdAt: Date;
}
