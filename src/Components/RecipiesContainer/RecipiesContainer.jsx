import {useState} from"react"
import Recipies from '../Recipies/Recipies'
import Sidebar from '../Sidebar/Sidebar'
import {toast} from"react-toastify"

function RecipiesContainer() {
  const [wantCook,setWantCook] = useState([]);
  const handleRecipes = (recipe)=>{
  		const exist = wantCook.find(cook => cook.recipe_id === recipe.recipe_id);
  		if(!exist){
  			setWantCook([...wantCook,recipe]);
  			toast.success("Successfully added !!");
  		}else{
        toast.warn("You have Already added this item in cooklist!!");
      }
  }
  return (
    <div className='max-w-[1440px] mx-auto my-10'>
        <div className="w-[90%] mx-auto">
            <div className="text-center md:mx-32 my-5">
                <h1 className="text-3xl">Our Recipes</h1>
                <p className="">Discover a treasure trove of culinary delights within 'Our Recipes,' where each dish is a masterpiece of flavor, texture, and creativity. From comforting classics to innovative creations, embark on a culinary journey that promises to tantalize your taste buds and inspire your next kitchen adventure. Bon appétit</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-5 my-5 gap-5">
                <Recipies handleRecipes={handleRecipes}/>
                <Sidebar wantCook={wantCook} setWantCook={setWantCook}/>
            </div>
        </div>
    </div>
  )
}

export default RecipiesContainer