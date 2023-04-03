import React from "react";

const MealCard = ({meal}) => {
    console.log(meal);

    const { strMealThumb, strMeal, strInstructions, strCategory, strArea} = meal;
    
  
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
        <figure className="card w-96 bf-base-100 shadow-xl">
            <img className="h-[200px" src={strMealThumb} alt="Shoes" /></figure>
        <div className="card-body">
         <div className="flex justify-between items-center">
            <div>
            <h2 className="card-title">{strMeal}</h2>
            Category <div className="badge badge-primary"> :{strCategory}</div>
            </div>
            Orgin <div className="badge badge-outline"> :{strArea}</div>
         </div>
          <p className="text-start">{strInstructions.slice(0,100)}...<span className="text-grey-5000 font-bold cursor-pointer">Read more</span>{" "}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div> 
    )
};

export default MealCard;