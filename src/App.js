import Form from './components/Form'
import React, { Component } from 'react'
import './App.css'

const API_KEY = 'b7840a7ee1d04613b1f328f09de5c6eb'

class App extends Component {
  state = {
    recipes: [],
  }

  getRecipe = async (e) => {
    const recipeName = e.target.elements.recipeName.value
    console.log(recipeName)
    e.preventDefault()
    //if the api isn't called because the application is run from a local server then prefix the link with 'https:cors-anywhere.herokuapp.com/'
    const apiCall = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?query=${recipeName}&apiKey=${API_KEY}`
    )

    const data = await apiCall.json()
    this.setState({ recipes: data.results })
    console.log(this.state.recipes)
  }

  render() {
    return (
      <div className='app'>
        <header className='appHeader'>
          <h1 className='title'>Recipe Search</h1>
        </header>
        <Form getRecipe={this.getRecipe} />
        {this.state.recipes.map((recipe) => {
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
}

export default App
