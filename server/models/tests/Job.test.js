const mongoose = require('mongoose');
const JobModel = require('./../Job');
const mocks = require('./../../mocks/job.mocks');

const testJobData = mocks[0];

beforeAll(async () => {
    await mongoose.connect(
      global.__MONGO_URI__,
      { useNewUrlParser: true, useCreateIndex: true },
      (err) => {
        if (err) {
          console.error(err);
          process.exit(1);
        }
      }
    );
});

afterAll(async (done) => {
    await mongoose.connection.close();
    done();
});

it('should have a Job model', () => {
    expect(JobModel).toBeDefined();
});

it('can save a job', async () => {
    const job = new JobModel(testJobData);
    const savedJob = await job.save();

    expect(savedJob._id).toBeDefined();
    expect(savedJob.description).toBe(testJobData.description);
});

it('should not allow invalid models', async () => {
    const invalidTestJobData = Object.assign({}, testJobData);
    invalidTestJobData.title = undefined;
    let error;
    try {
        const job = new JobModel(invalidTestJobData);
        const savedJob = await job.save();
        expect(savedJob._id).toBeDefined();
    } catch (err) {
        error = err;
    }

    expect(error.message).toBe('Job validation failed: title: Path `title` is required.');
});
