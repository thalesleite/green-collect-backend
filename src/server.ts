import express, { response } from 'express';

const app = express();

app.get('/users', (request, response) => {
   console.log('List of users...');

   response.json([
      'Thales',
      'Joao',
      'Pedro'
   ]);
});

app.listen(3333);