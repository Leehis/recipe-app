import React from 'react'

const Recipes = (props) => {
  return (
    <div>
      {props.recipes.map((recipe) => {
        return (
          <div key={recipe.id} className='items'>
            <img src={recipe.image} alt={recipe.title} />
            <p>{recipe.title}</p>
          </div>
        )
      })}
    </div>
  )
}

export default Recipes
