import {
  Table,
  Column,
  Model,
  PrimaryKey,
  AutoIncrement,
  CreatedAt,
  HasMany,
} from 'sequelize-typescript';
import { Tag } from '../../tag/entities/tag.entity';
@Table({ tableName: 'notes', timestamps: false })
export class Note extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column
  id: number;
  @Column
  title: string;
  @Column
  content: string;
  @Column
  tags: string;
  @CreatedAt
  @Column({ field: 'created_at' })
  createdAt: Date;
  @HasMany(() => Tag)
  tag: Tag[];
}


// Note.hasMany(Tag, {
//   sourceKey: 'id',
//   foreignKey: 'note_id',
// });
// Note.belongsTo(Tag);
