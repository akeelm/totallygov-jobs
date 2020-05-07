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
        res.json({ message: err })
    }
});

module.exports = router;
