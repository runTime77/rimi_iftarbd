
import { useEffect, useState } from 'react';
import './App.css';
import MealCard from './MealCard';

function App() {

  const [meals, setMeals] = useState([])
  const [mealName, setMealName] = useState("");


  useEffect(() => {
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${mealName}`)
    .then(res =>res.json())
    .then(data => {
     setMeals(data.meals);
    })
  },[mealName]); 

  const search = (event) => {
    console.log(event.target.value);
    setMealName(event.target.value);
  }
  return (
    <div className="App">
      <div className="px-[100px] mt-[50px]">
      <input 
      onChange={}
      type="text" placeholder="Search here your food" className="input input-bordered w-full" />
      </div>
   <div className= "grid grid-cols-3 gap-5 p-20">
      {meals?.map((meal) => (
        <MealCard meal={meal}></MealCard>
      ))}
   </div>
    </div>
  );
}

export default App;
