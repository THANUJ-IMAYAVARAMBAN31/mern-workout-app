import React, { useEffect } from 'react'
import WorkoutDetail  from '../components/WorkoutDetails';
import Workoutform from '../components/Workoutformy';
import { useWorkoutContext } from '../useWorkoutContext';

const Homepage = () => {
  
  const {workouts,dispatch}=useWorkoutContext()
  useEffect(() => {
  const fetchWorkouts = async () => {
    const response = await fetch('https://mern-workout-app-rwmt.onrender.com')
    const json=await response.json()
      if (response.ok){
        dispatch({type:'SET_WORKOUTS',payload:json})
      }
    }
    fetchWorkouts()
  }, [dispatch])
  return (
    <div className='home'>
        <div className='workouts'>
          {workouts && workouts.map(workout => (
           <WorkoutDetail key={workout._id} workout={workout} />
          ))}
        </div>
        <Workoutform />
      </div>
  )
}

export default Homepage
