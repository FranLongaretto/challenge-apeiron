require('dotenv').config();

const request = require('supertest');
const express = require('express');
const routes = require('../routes/routes');

const app = express();
app.use(express.json());
app.use('/', routes);

// describe('POST /tasks', () => {
//   test('Should create a new task', async () => {
//     const task = {
//       name: 'Compras',
//       description: 'Pan y queso',
//     };

//     const response = await request(app).post('/tasks').send(task);

//     expect(response.statusCode).toBe(200);
//     expect(response.body.name).toBe(task.name);
//     expect(response.body.description).toBe(task.description);
//   });
// });

describe('GET ALL /tasks', () => {
  test('Should get all tasks', async () => {
    const response = await request(app).get('/tasks');

    expect(response.statusCode).toBe(200);
  });
});
