import React from 'react'
import Recipies from '../Recipies/Recipies'
import Sidebar from '../Sidebar/Sidebar'


function RecipiesContainer() {
  return (
    <div className='max-w-[1440px] mx-auto'>
        <div className="w-[90%] mx-auto">
            <div className="text-center md:mx-32">
                <h1 className="text-3xl">Our Recipes</h1>
                <p className="">Lorem ipsum dolor sit amet consectetur. Proin et feugiat senectus vulputate netus pharetra rhoncus. Eget urna volutpat curabitur elementum mauris aenean neque.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-5 my-5 gap-5">
                <Recipies/>
                <Sidebar/>
            </div>
        </div>
    </div>
  )
}

export default RecipiesContainer