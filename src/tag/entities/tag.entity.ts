import {
  Table,
  Column,
  Model,
  PrimaryKey,
  AutoIncrement,
  CreatedAt,
} from 'sequelize-typescript';
@Table({ tableName: 'tags' })
export class Tag extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column
  id: number;
  @Column
  note_id: string;
  @Column
  title: string;
  @CreatedAt
  @Column({ field: 'created_at' })
  createdAt: Date;
}
