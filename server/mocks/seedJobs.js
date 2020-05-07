const JobModel = require('./../models/Job');
const jobMocks = require('./job.mocks');

module.exports = async () => {
    const jobsPromises = [];
    jobMocks.forEach((job) => {
        const jobModel = new JobModel(job);
        jobsPromises.push(jobModel.save());
    });
    await Promise.all(jobsPromises);
};