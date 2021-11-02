const router = require('express').Router();
const { Workout } = require('../models');

// GET Workouts
router.get('/api/workouts', async (req, res) => {
    Workout.aggregate([
        { $match: {} },
        { $addFields: {
            totalDuration: {
                $sum: $exercises.duration 
            } 
        } 
    }
    ]).then((data) => {
        res.json(workoutdb)
    }).catch(err => {
        res.status(400).json(err);
    });
});

module.exports = router;