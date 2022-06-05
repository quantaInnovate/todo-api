export class CreateNoteDto {
  id: number;
  title: string;
  content: string;
  tags: string;
  constructor(id: number, title: string, content: string, tags: string) {
    this.id = id;
    this.title = title;
    this.content = content;
    this.tags = tags;
  }
}
