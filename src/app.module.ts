import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { NoteModule } from './note/note.module';
import { ConfigModule } from '@nestjs/config';
import { databaseProviders } from './database.provider';
import { TagModule } from './tag/tag.module';

@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true }), NoteModule, TagModule],
  controllers: [AppController],
  providers: [...databaseProviders, AppService],
})
export class AppModule {}
