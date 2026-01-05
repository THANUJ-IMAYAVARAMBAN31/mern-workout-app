const Workout = require('../models/workoutmodel')
const mongoose = require('mongoose')

exports.createworkout= async(req, res) => {
    const { title, reps, load } = req.body

    let emptyfields = []

    if(!title){
        emptyfields.push('title')
    }else if(!reps){
        emptyfields.push('reps')
    }else if(!load){
        emptyfields.push('load')
    }

    if(emptyfields.length > 0){
        return res.status(400).json({error: 'Please fill in all fields', emptyfields})
    }

    try{
        const workout = await Workout.create({title, reps, load})
        res.status(201).json(workout)
    }
    catch(error){
        res.status(400).json({error: error.message})
    }

    res.json({ message: 'Create a new workout' })
};

exports.getworkouts= async(req, res) => {
    try{
        const workouts = await Workout.find({}).sort({createdAt: -1})
        res.status(200).json(workouts)

        if(!mongoose.mongoose.Types.ObjectId.isValid(id)){
            return res.status(404).json({error: 'No such workout'})
        }

        if(!workouts){
            return res.status(400).json({error: 'No workouts found'})
        }
    }
    catch(error){
        res.status(400).json({error: error.message})
    }
};  

exports.getworkoutbyid= async(req, res) => {
    const { id } = req.params
    const workout = await Workout.findById(id)
    if(!mongoose.mongoose.Types.ObjectId.isValid(id)){
            return res.status(404).json({error: 'No such workout'})
        }
    if(!workout){
        return res.status(400).json({error: 'No such workout'})
    }
    res.status(200).json(workout)
}

exports.deleteworkoutbyid= async(req, res) => {
    const { id } = req.params
    const workout = await Workout.findByIdAndDelete(id)
    if(!mongoose.mongoose.Types.ObjectId.isValid(id)){
            return res.status(404).json({error: 'No such workout'})
        }
    if(!workout){
        return res.status(400).json({error: 'No such workout'})
    }
    res.status(200).json(workout)
}

exports.updateworkoutbyid= async(req, res) => {
    const { id } = req.params
    const workout = await Workout.findByIdAndUpdate(id, {...req.body})
    if(!mongoose.mongoose.Types.ObjectId.isValid(id)){
            return res.status(404).json({error: 'No such workout'})
        }
    if(!workout){
        return res.status(400).json({error: 'No such workout'})
    }
    res.status(200).json(workout)
}