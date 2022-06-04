import { Sequelize } from 'sequelize-typescript';
import { Note } from './note/entities/note.entity';
import { Tag } from './tag/entities/tag.entity';

export const databaseProviders = [
  {
    provide: 'SEQUELIZE',
    useFactory: async () => {
      const sequelize = new Sequelize({
        dialect: 'mysql',
        host: process.env.HOST,
        port: 3306,
        username: process.env.DATABASE_USER,
        password: process.env.DATABASE_PASSWORD,
        database: process.env.DATABASE_DATABASE,
        timezone: '+07:00',
        dialectOptions: {
          connectTimeout: 1000,
        },
        pool: {
          min: 0,
          max: 5,
          idle: 10000,
        },
        define: {
          charset: 'utf8',
          timestamps: false,
        },
      });
      sequelize.addModels([Note, Tag]);
      await sequelize.sync();
      return sequelize;
    },
  },
];
