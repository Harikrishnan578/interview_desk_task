import React from 'react'
import Parent from './Parent'

function Granparent({user}) {

  console.log("The user detail are:",user)
  console.log("The user name:",user.name)

  return (
    <div>
        <h2>Granparant</h2>
        <Parent user={user} />
    </div>
  )
}

export default Granparent