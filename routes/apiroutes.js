const router = require('express').Router();
const { Workout } = require('../models');

// GET Workouts
router.get('/api/workouts', (req, res) => {
    Workout.aggregate([
        { $match: {} },
        { $addFields: {
            totalDuration: {
                $sum: '$exercises.duration' 
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

// Update (PUT) Specific Workouts
router.put('/api/workouts/:id', (req, res) => {
    Workout.findByIdAndUpdate(req.params.id, { $push: {
        exercises: req.body
    }}).then(workoutdb => {
        res.json(workoutdb);
    }).catch(err => {
        res.status(400).json(err);
    });
});

module.exports = router;