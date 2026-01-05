const express = require('express')
const router = express.Router()
const Workout = require('../models/workoutmodel')
const { createworkout, getworkouts, getworkoutbyid, deleteworkoutbyid, updateworkoutbyid } = require('../controllers/workoutcontroller')

router.get('/',getworkouts)

router.get('/:id',getworkoutbyid)

router.post('/', createworkout)

router.delete('/:id', deleteworkoutbyid)

router.patch('/:id', updateworkoutbyid)

module.exports = router