import { Injectable, HttpStatus } from '@nestjs/common';
import { CreateNoteDto } from './dto/create-note.dto';
import { Note } from '../note/entities/note.entity';
import { Tag } from '../tag/entities/tag.entity';
import { JsonResponse } from '../utils/httpRespose';
import * as dayjs from 'dayjs';
@Injectable()
export class NoteService {
  async create(createNoteDto: CreateNoteDto) {
    const { title, content, tags } = createNoteDto;
    interface Note {
      dic: { [name: string]: any };
    }
    const noteObject: Note = {
      dic: {
        title: title,
        content: content,
        tags: tags,
        createdAt: dayjs(),
      },
    };

    const isEmptyObj = Object.values(noteObject).some(
      (el) => el == (undefined || ''),
    );

    let result: {};
    if (!isEmptyObj) {
      const note = await Note.create(noteObject.dic);
      if (noteObject.dic.tags) {
        const tagList = noteObject.dic.tags
          .split(',')
          .map((x) => ({ note_id: note.id, name: x, createdAt: dayjs() }));
        await Tag.bulkCreate(tagList);
      }
      if (note) {
        result = JsonResponse(HttpStatus.OK, {
          status: true,
          message: 'success',
        });
      }
    } else {
      result = JsonResponse(HttpStatus.BAD_REQUEST, {
        status: true,
        message: 'failure',
      });
    }
    return result;
  }

  async findAll(query: any) {
    let result: any;
    try {
      const option: any = {
        model: Tag,
      };
      if (query.tag) {
        option.where = { name: query.tag };
      }
      const data = await Note.findAll({
        include: [option],
        order: [[query.orderby || 'createdAt', query.sorted || 'desc']],
      });
      result = JsonResponse(HttpStatus.OK, data);
    } catch (error) {
      result = JsonResponse(HttpStatus.BAD_GATEWAY, {
        status: false,
        message: error.message,
      });
    }
    return result;
  }
  async findOne(id: number) {
    let result: any;
    try {
      const data = await Note.findOne({ where: { id: id } });
      result = JsonResponse(HttpStatus.OK, data);
    } catch (error) {
      result = JsonResponse(HttpStatus.BAD_GATEWAY, {
        status: false,
        message: error.message,
      });
    }
    return result;
  }
}
