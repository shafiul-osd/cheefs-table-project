
const WantToCook = ({wantCook,handlePreparing,setWantCook}) => {
	let count = 0;
	
  return (
    <div>
      <h1 className="text-2xl text-center">Want to Cook: {wantCook.length}</h1>
      <div className="divider"></div>
      <div className="overflow-x-auto md:w-fit">
        <table className="table table-xs text-left">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Time</th>
              <th>Calories</th>
              <th></th>
            </tr>
          </thead>
         	{
         		wantCook.map(cook => {
         			
         	count ++;
         	return<tbody>
            <tr>
              <th>{count}</th>
              <td>{cook.recipe_name}</td>
              <td>{cook.preparing_time}</td>
              <td>{cook.calories}</td>
              <td className="text-left"><button onClick={()=>handlePreparing(cook)} className="btn btn-xs btn-success px-2 text-white">Preparing</button></td>
            </tr>
          </tbody>
         		})
         	}
        </table>
      </div>
    </div>
  );
}

export default WantToCook;
