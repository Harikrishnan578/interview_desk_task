import React from 'react'

function Child({user}) {

  console.log("Child drilling: ", user.number);

  return (
   <>
     <div>Child {user.name}</div>
     <h4>{user.pin}</h4>
   </>
  )
}

export default Child