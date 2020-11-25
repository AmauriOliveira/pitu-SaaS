import 'express-async-errors';

import app from './app';

import database from './database';

database.sync(); // somente em dev, não use em produção o {force :true} pq reseta o banco toda vez

const port = process.env.PORT || 3333;

app.listen(port, () => {
  console.log(`Server running at ${port}`);
});
