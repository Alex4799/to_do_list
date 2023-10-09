import React, { useContext } from 'react'
import setTask from '../context/setTask'

const Item = ({taskDelete,update}) => {
    const tasks=useContext(setTask);
    function confirmation(id){
    // eslint-disable-next-line no-restricted-globals
        if (confirm('Are you sure to delete this task')) {
            taskDelete(id)
        }
    }
  return (
    <ul className="list-group">
        {
            tasks.map((item,index)=>(
                <li key={index} className={item.complete ? 'list-group-item shadow my-3 bg-success text-white text-decoration-line-through' :  'list-group-item shadow my-3'}>
                    <div className='row fs-5'>
                        <div className='col-10 d-flex justify-content-between'>
                            <input type="checkbox" name="" id="" onChange={()=>update(item.id,!item.complete)} checked={item.complete}/>
                            <p>{item.task}</p>
                            <a onClick={()=>confirmation(item.id)} className='col-2 text-dark'><i className="fa-solid fa-trash"></i></a>
                        </div>
                    </div>
                </li>
            ))
        }
    </ul>
  )
}

export default Item