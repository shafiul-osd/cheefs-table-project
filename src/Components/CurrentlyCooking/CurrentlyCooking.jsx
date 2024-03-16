import React, { useState, useEffect } from 'react';

const CurrentlyCooking = ({ cooking }) => {
  const [totalPreparingTime, setTotalPreparingTime] = useState(0);
  const [totalCalories, setTotalCalories] = useState(0);

  useEffect(() => {
    let totalTime = 0;
    let totalCaloriesValue = 0;

    cooking.forEach(cook => {
      totalTime += parseInt(cook.preparing_time);
      totalCaloriesValue += parseInt(cook.calories);
    });

    setTotalPreparingTime(totalTime);
    setTotalCalories(totalCaloriesValue);
  }, [cooking]);

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
          <tbody>
            {cooking.map((cook, i) => (
              <tr key={i} className="bg-gray-100 p-2 m-2">
                <td>{i + 1}</td>
                <td>{cook.recipe_name}</td>
                <td>{cook.preparing_time} min</td>
                <td>{cook.calories}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="my-5 flex justify-between ">
        <h1 className="">Total Preparing Time = {totalPreparingTime} min</h1>
        <h1 className="">Total calories = {totalCalories} Calories</h1>
      </div>
    </div>
  );
};

export default CurrentlyCooking;
