const router = require('express').Router();
const { Workout } = require('../models');

// GET Workouts
router.get('/api/workouts', (req, res) => {
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

// POST Workouts
router.post('/api/workouts', (req, res) => {
    body = req.body;
    Workout.create(body).then(workoutdb => {
        res.json(workoutdb);
    }).catch(err => {
        res.status(400).json(err);
    });
});

module.exports = router;