const router = require('express').Router();
const { Workout } = require('../models');

// GET Workouts
router.get('/api/workouts', async (req, res) => {
    const workouts = await Workout.find();
    try {
        res.json(workouts);
    } catch (err) {
        res.status(400).json(err);
    }
});

module.exports = router;