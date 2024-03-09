import logger from 'morgan';
import express from 'express';
const sh = express();

import docs from "./route/docs.js";
import api from "./route/api.js";

sh.use(logger('dev'));
sh.get('/', (req, res) => {
  res.redirect('/playground')
})
sh.use('/', docs);
sh.use('/api', api);

sh.listen(8000, async () => {
  console.log({
    status: 'Active',
    message: 'powered by https://github.com/pitucode'
  })
});
