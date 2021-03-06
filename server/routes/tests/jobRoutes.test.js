const request = require('supertest');
const app = require('./../../app');
const db = require('./../../test-db');

beforeAll(async () => { await db.connect(); });
afterAll(async () => { await db.closeDatabase(); });

it('should get a response', async () => {
    const response = await request(app).get('/api/jobs');
    expect(response.statusCode).toBe(200);
});

it('should seed the data',  async () => {
    const response = await request(app).get('/api/jobs');
    expect(response.body.length).toBe(5);
});

it('should be able to search the jobs', async () => {
    const response = await request(app)
      .post('/api/jobs/search')
      .send({ search: "russian" })
      .set('Content-Type', 'application/json')
      .set('Accept', 'application/json');

    expect(response.body[0].title).toBe('Spy');
});

it('should be able to get a job by id', async () => {
    const searchResponse = await request(app)
      .post('/api/jobs/search')
      .send({ search: "russian" })
      .set('Content-Type', 'application/json')
      .set('Accept', 'application/json');

    const response = await request(app).get(`/api/jobs/${searchResponse.body[0]._id}`);
    expect(response.body.title).toBe('Spy');
});

it('should be able to create a new job', async () => {
    const saveJob = await request(app)
      .post("/api/jobs/")
      .send({
        title: "test job",
        description: "It's just a test, dear.",
        author: "jest"
      })
      .set("Content-Type", "application/json")
      .set("Accept", "application/json");

      expect(saveJob.body._id).toBeDefined();
});