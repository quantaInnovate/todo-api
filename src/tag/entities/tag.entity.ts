import {
  Table,
  Column,
  Model,
  PrimaryKey,
  AutoIncrement,
  CreatedAt,
  BelongsTo,
  ForeignKey,
} from 'sequelize-typescript';
import { Note } from '../../note/entities/note.entity';
@Table({ tableName: 'tags', timestamps: false })
export class Tag extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column
  id: number;
  @ForeignKey(() => Note)
  @Column
  note_id: string;
  @Column
  name: string;
  @CreatedAt
  @Column({ field: 'created_at' })
  createdAt: Date;
  @BelongsTo(() => Note)
  note: Note;
}
