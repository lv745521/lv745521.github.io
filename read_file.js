import { readFile } from 'node:fs';

readFile(/Document/Site web, (err, data) => {
  if (err) throw err;
  console.log(data);
});