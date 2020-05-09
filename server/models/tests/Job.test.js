const JobModel = require('./../Job');
const mocks = require('./../../mocks/job.mocks');
const db = require('./../../test-db');

const testJobData = mocks[0];

beforeAll(async () => { await db.connect(); });
afterAll(async () => { await db.closeDatabase(); });

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
