import React from 'react'
import Item from './Item'

const List = ({taskDelete,update}) => {
  return (
    <div className='pt-4'>
        <Item taskDelete={taskDelete} update={update}/>
   </div>
  )
}

export default List