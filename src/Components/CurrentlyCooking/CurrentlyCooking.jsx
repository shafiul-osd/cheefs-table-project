import React from 'react'

const CurrentlyCooking = ({cooking}) => {
  return (
    <div className="my-5">
   	<h1 className="text-2xl text-center">Currently Cooking: {cooking.length}</h1>
      <div className="divider"></div>
      <div className="overflow-x-auto">
        <table className="table table-xs">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Time</th>
              <th>Calories</th>
            </tr>
          </thead>
         {
         	cooking.map((cook,i) => {
         		return  <tbody>
            <tr>
              <th>{i+1}</th>
              <td>{cook.recipe_name}</td>
              <td>{cook.preparing_time}</td>
              <td>{cook.calories}</td>
            </tr>
          </tbody>
         	})
         }
        </table>
      </div>
    </div>
  )
}

export default CurrentlyCooking