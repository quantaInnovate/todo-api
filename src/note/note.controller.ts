import { Controller, Get, Post, Body, Param, Res, Query } from '@nestjs/common';
import { NoteService } from './note.service';
import { CreateNoteDto } from './dto/create-note.dto';
import { Response } from 'express';
import { ListQuery } from '../dto/listQuery';

@Controller('note')
export class NoteController {
  constructor(private readonly noteService: NoteService) {}

  @Post()
  create(@Body() createNoteDto: CreateNoteDto) {
    return this.noteService.create(createNoteDto);
  }

  @Get()
  async findAll(@Query() query: ListQuery, @Res() res: Response) {
    console.log('=query', query);
    const response = await this.noteService.findAll(query);
    res.status(response.httpCode).send(response.data);
  }

  @Get(':id')
  async findOne(@Param('id') id: string, @Res() res: Response) {
    const response = await this.noteService.findOne(+id);
    res.status(response.httpCode).send(response.data);
  }
}
