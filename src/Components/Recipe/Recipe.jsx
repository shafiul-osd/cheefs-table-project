import { ImClock } from "react-icons/im";
import { FaFire } from "react-icons/fa";

function Recipe({recipe,handleRecipes}) {
    
  return (
    <div className='border-2 rounded-xl'>
        <div className="card card-compact bg-base-100 shadow-xl w-full h-full">
  <figure><img className='w-[90%] rounded-xl mt-3 h-52' src={recipe.recipe_image} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">{recipe.recipe_name}</h2>
    <p>{recipe.short_description}</p>
    <div className="divider"></div>
    <h2 className="text-xl">Ingredients {recipe.ingredients.length}</h2>
    <ul className='ml-8'>
        {
            recipe.ingredients.map(ingredient => <li className='list-disc'>{ingredient}</li>)
        }
    </ul>
    <div className="divider"></div>
    <div className="flex justify-between items-center">
        <div className="flex gap-3 items-center">
            <ImClock />
            <p>{recipe.preparing_time}</p>
        </div>
        <div className="flex gap-3 items-center">
            <FaFire />
            <p>{recipe.calories}</p>
        </div>
    </div>
    <button onClick={()=>handleRecipes(recipe)} className="btn btn-success text-white my-2">Want to Cock</button>
  </div>
</div>
    </div>
  )
}

export default Recipe