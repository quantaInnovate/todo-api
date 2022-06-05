export class ListQuery {
  orderby: string;
  sorted: string;
  tag: string;
  constructor(orderby: string, sorted: string, tag: string) {
    this.orderby = orderby;
    this.sorted = sorted;
    this.tag = tag;
  }
}
