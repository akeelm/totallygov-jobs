const express = require('express');
const router = express.Router();
const Job = require('../models/Job');
const seedJobs = require('./../mocks/seedJobs');

// GET JOBS
router.get('/', async (req, res) => {
    try {
        let jobs = await Job.find();

        // Seed if no jobs
        if (jobs.length === 0) {
            await seedJobs();
            jobs = await Job.find();
        }

        res.json(jobs);
    } catch (err) {
        res.json({ message: err });
    }
});


// SEARCH JOBS
router.post('/search', async (req, res) => {
    const searchStr = req.body.search;
    try {
        const jobs = await Job.find({
          $or: [
              { title: new RegExp(searchStr, "i") },
              { description: new RegExp(searchStr, "i") },
              { author: new RegExp(searchStr, "i") }
            ],
        });

        res.json(jobs);
    }
    catch (err) {
        res.json({ message: err });
    }
});


// SPECIFIC JOB
router.get('/:jobId', async (req, res) => {
    try {
        const job = await Job.findById(req.params.jobId);
        res.json(job);
    } catch (err) {
        res.json(err);
    }
});


// CREATE JOB
router.post('/', async (req, res) => {
    try {
        let jobs = await Job.find({
            description: req.body.description,
        });

        if (jobs.length > 0) return res.json(jobs[0]);
    } catch (err) {
        res.json(err);
    }

    const job = new Job({
        title: req.body.title,
        description: req.body.description,
        author: req.body.author
    });

    try {
        const savedJob = await job.save();
        res.json(savedJob);
    } catch (err) {
        res.json(err);
    }
});

module.exports = router;
