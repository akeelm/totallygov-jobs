const JobModel = require('./../models/Job');
const jobMocks = require('./job.mocks');

module.exports = () => {
    jobMocks.forEach((job) => {
        const jobModel = new JobModel(job);
        jobModel.save();
    });
};