import { HttpStatus } from '@nestjs/common';
import * as dayjs from 'dayjs';
export function JsonResponse(httpCode, data) {
  let dataObject: any = {};
  console.log('=dat', data)
  switch (httpCode) {
    case HttpStatus.OK:
      dataObject = data;
      dataObject.status = true;
      break;
    case HttpStatus.BAD_REQUEST:
      dataObject = data;
      dataObject.status = false;
      break;
    default:
      dataObject = data;
      dataObject.status = false;
      break;
  }
  return { httpCode, data: dataObject };
}

export function responseListConvertDateFormat(list: Array<any>) {
  const paseJson = JSON.parse(JSON.stringify(list));
  const result = paseJson.map((item) => ({
    ...item,
    createdAt: dayjs(item.createdAt).format('DD/MM/YYYY'),
    updatedAt: dayjs(item.updatedAt).format('DD/MM/YYYY'),
  }));
  return result;
}
