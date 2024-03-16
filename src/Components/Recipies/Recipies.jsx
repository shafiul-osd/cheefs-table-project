import React, { useEffect, useState } from 'react'
import Recipe from '../Recipe/Recipe'

function Recipies({handleRecipes}) {
    const [recipies,setRecipies] = useState([]);
    useEffect(()=>{
        fetch('recipies.json')
        .then( res => res.json())
        .then( data => setRecipies(data))
    },[]);
  return (
    <div className='md:col-span-3 grid grid-cols-1 lg:grid-cols-2 gap-3'>
        {
            recipies.map(recipe => <Recipe key={recipe.recipe_id} recipe={recipe} handleRecipes={handleRecipes}/> )
        }
    </div>
  )
}

export default Recipies