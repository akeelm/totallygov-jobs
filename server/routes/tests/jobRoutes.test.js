const request = require('supertest');
const app = require('./../../../app');
const jobMocks = require('./../../mocks/job.mocks');

it('should get a response', async () => {
    const response = await request(app).get('/api/jobs');
    expect(response.statusCode).toBe(200);
});

it('should seed the data',  async () => {
    const response = await request(app).get('/api/jobs');
    expect(response.body.length).toBe(jobMocks.length);
});