import React from 'react'
import './form.css'

const Form = (props) => {
  return (
    <div className='form'>
      <form onSubmit={props.getRecipe}>
        <input type='text' name='recipeName' />
        <button>Search</button>
      </form>
    </div>
  )
}

export default Form
