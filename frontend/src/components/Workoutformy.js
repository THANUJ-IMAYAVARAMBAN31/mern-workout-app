import React, { useState } from 'react'
import { useWorkoutContext } from '../useWorkoutContext';

function Workoutform() {

  const { dispatch } = useWorkoutContext()

  const [title, setTitle] = useState('')
  const [load, setLoad] = useState('')
  const [reps, setReps] = useState('')
  const [error, setError] = useState(null)
  const [emptyfields, setEmptyFields] = useState([])

  const handlesubmit = async (e) => {
    e.preventDefault()

    const workout = { title, load, reps }

    const response = await fetch('https://mern-workout-app-rwmt.onrender/api/workouts.com', {
      method: 'POST',
      body: JSON.stringify(workout),
      headers: {
        'Content-Type': 'application/json'
      }
    })

    const json = await response.json()

    if (!response.ok) {
      setError(json.error)
      setEmptyFields(json.emptyfields)
    }

    if (response.ok) {
      setTitle('')
      setLoad('')
      setReps('')
      setError(null)
      setEmptyFields([])
      dispatch({ type: 'CREATE_WORKOUT', payload: json })
    }
  }

  return (
    <form className='create' onSubmit={handlesubmit}>
      <h3>Add a New Workout</h3>

      <label>Workout Title:</label>
      <input
        className={emptyfields.includes('title') ? 'error' : ''}
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <label>Load (kg):</label>
      <input
        className={emptyfields.includes('load') ? 'error' : ''}
        type="number"
        value={load}
        onChange={(e) => setLoad(e.target.value)}
      />

      <label>Reps:</label>
      <input
        className={emptyfields.includes('reps') ? 'error' : ''}
        type="number"
        value={reps}
        onChange={(e) => setReps(e.target.value)}
      />

      <button>Add Workout</button>
      {error && <div className="error">{error}</div>}
    </form>
  )
}

export default Workoutform
