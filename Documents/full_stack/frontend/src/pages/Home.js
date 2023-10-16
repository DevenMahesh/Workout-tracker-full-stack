import { useEffect, useState } from 'react'
import WorkoutDetails from '../components/WorkoutDetails';
import WorkoutForm from '../components/WorkoutForm';
import { useWorkoutContext } from '../hooks/useWorkoutContext';

const Home= () => {

   const {workouts, dispatch } = useWorkoutContext()
   useEffect(()=> {
     const fetchWorkouts = async () => {
       
      const response = await fetch("/api/workouts")
      //console.log(response);
        const json = await response.json()
           
        //console.log(json);

        if(response.ok) {
          dispatch({type: 'SET_WORKOUTS', payload: json })

    
        }
        console.log(workouts);

     }

     fetchWorkouts()
     console.log(workouts);


   }, [dispatch])
    return (
      <div className="home">

        <div className="workouts">
           
          {workouts && workouts.map((workout) => (
             <WorkoutDetails key={workout._id} workout={workout}> </WorkoutDetails>
          ))} 
        </div>
           
           <WorkoutForm></WorkoutForm>


      </div>

    );
}
export default Home;