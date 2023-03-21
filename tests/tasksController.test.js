require('dotenv').config();

const { default: mongoose } = require('mongoose');
const supertest = require('supertest');
const Task = require('../models/Tasks');
const { app, server } = require('../app');
const { getTasks } = require('./helpers');

const api = supertest(app);

describe('Create a new TASK', () => {
  beforeEach(async () => {
    await Task.deleteMany({});

    const task = new Task({ name: 'Compras Test', description: 'Esta es una descripción para test' });

    await task.save();
  });

  test('Should create a new TASK', async () => {
    const startTasks = await getTasks();

    const newTask = {
      name: 'Compras TEST',
      description: 'Esta es una descripcion para las compras TEST',
    };

    await api
      .post('/tasks')
      .send(newTask)
      .expect(201)
      .expect('Content-Type', /application\/json/);

    const endTasks = await getTasks();

    expect(endTasks).toHaveLength(startTasks.length + 1);

    const tasksName = endTasks.map((task) => task.name);
    expect(tasksName).toContain(newTask.name);
  });

  test('Should not create a new TASK / correct error msg', async () => {
    const startTasks = await getTasks();

    const newTask = {
      name: 'Compras TEST',
      description: 'Esta es una descripcion para las compras TEST',
    };

    const result = await api
      .post('/tasks')
      .send(newTask)
      .expect(409)
      .expect('Content-Type', /application\/json/);

    expect(result.body.error).toContain('Expect Task to be unique');

    const endTasks = await getTasks();
    expect(endTasks).toHaveLength(startTasks.length);
  });

  afterAll(() => {
    mongoose.connection.close();
    server.close();
  });
});

describe('GET all Tasks', () => {
  test('Should return tasks as JSON', async () => {
    await api
      .get('/tasks')
      .expect(200)
      .expect('Content-Type', /application\/json/);
  });

  afterAll(() => {
    mongoose.connection.close();
    server.close();
  });
});
