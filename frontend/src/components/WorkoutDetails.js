import React from 'react'
import formatDistanceToNow from 'date-fns/formatDistanceToNow';
import { useWorkoutContext } from '../useWorkoutContext';
function WorkoutDetails({ workout }) {
  const {dispatch}=useWorkoutContext()
  const handleDelete=async()=>{
    const response=await fetch('/api/workouts/'+workout._id,{
      method:'DELETE'
    })
    const json=await response.json()
    if(response.ok){
      dispatch({type:'DELETE_WORKOUT',payload:json})
    }
  }
  return (
    <div className='workout-details'>
        <h4>Title: {workout.title}</h4>
        <p> <br/> <strong>Reps:</strong> {workout.reps} <br/> <strong>load:</strong> {workout.load}
        <p>Created: {formatDistanceToNow(new Date(workout.createdAt),{addSuffix:true})}</p>
        </p>
        <span className='material-symbol-outlined' onClick={handleDelete}>delete</span>
    </div>
  )
}

export default WorkoutDetails