import React from 'react'
import './recipes.css'

const Recipes = (props) => {
  return (
    <div className='recipe'>
      {props.recipes.map((recipe) => {
        return (
          <div key={recipe.id} className='items'>
            <img className='recipeImg' src={recipe.image} alt={recipe.title} />
            <div className='recipeDetails'>
              <div className='recipeTitle'>{recipe.title}</div>
              <div className='recipeTime'>
                This dish takes: {recipe.readyInMinutes} minutes
              </div>
              {/* <div className='recipeSteps'>{recipe.analyzedInstructions}</div> */}
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default Recipes
