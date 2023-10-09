import React, { useState } from 'react'

const Form = ({create}) => {
  const [userTask,setUserTask]=useState('');
  function formHandle(){
    setUserTask('');
    create(userTask);
  }
  return (
    <div>
        <div className='row '>
            <div className='col-7 offset-1'>
                <input type="text" placeholder='Enter Your Task Name .. ' value={userTask} onChange={(e)=> setUserTask(e.target.value)} className=' form-control ' />
            </div>
            <button type='submit' onClick={()=>formHandle()} className='btn btn-info col-3'>Create</button>
        </div>
    </div>
  )
}

export default Form