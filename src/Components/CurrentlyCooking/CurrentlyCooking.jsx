import React from 'react'

const CurrentlyCooking = () => {
  return (
    <div className="my-5">
   	<h1 className="text-2xl text-center">Currently Cooking: 1</h1>
      <div className="divider"></div>
      <div className="overflow-x-auto">
        <table className="table table-xs">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Job</th>
              <th>Company</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>1</th>
              <td>Cy Ganderton</td>
              <td>Quality</td>
              <td>Littel</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default CurrentlyCooking