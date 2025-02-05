import React from 'react'
import Child from './Child'

function Parent({user}) {

  console.log("parent drilling:", user.age)

  return (
    <div>
        <h3>Parent</h3>
        <Child user={user} />
    </div>
  )
}

export default Parent