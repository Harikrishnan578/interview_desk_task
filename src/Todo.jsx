import React from 'react'
import {useState} from 'react'

function ToDo() {

    const [task_name, Settarget_name] = useState('')
    const [task_discription, Settask_discription] = useState('')
    
    function addtask(e){
        e.preventDefault()
        console.log(task_name, task_discription)
    }
  return (
    <div className=''>
        <form action="#" className=''>
            <div className=''>
            <label htmlFor="task_name">Task Name</label>
            <input type="text" name='task_name' placeholder='Task Name' value={task_name} onChange={(e) => {Settarget_name(e.target.value)}} className='border-solid border-2' />
            </div>
            <div>
                <label htmlFor="task_discription">Task Discription</label>
                <input type="text" name='task_discription' placeholder='Task Discription' value={task_discription} onChange={(e) => {Settask_discription(e.target.value)}} className='border-solid border-2' />
            </div>
            <div>
                <button onClick={(e) => {addtask(e)}} className='border-solid border-2'>Add Task</button>
            </div>
        </form>
        <h1>{task_name}</h1><br />
        <h4>{task_discription}</h4>
    </div>
  )
}

export default ToDo