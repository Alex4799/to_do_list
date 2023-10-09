import React, { useEffect, useState } from 'react'
import './../node_modules/bootstrap/dist/css/bootstrap.min.css'
import List from './components/List'
import Form from './components/Form'
import { api } from './Api/apiResoure'
import setTask from './context/setTask';
import { v4 as uuidv4 } from 'uuid';

const App = () => {

  const [tasks,setTasks]=useState([]);
  const fetchData=async()=>{
      // const data=await fetch('http://localhost:3300/to_do_list')
      //                   .then((resp)=>resp.json())
      //                   .catch((error)=>console.log(error))

      const data=await api.get('/to_do_list');

      setTasks(data.data);
  }

  useEffect(()=>{
    fetchData()
  },[tasks])

  const create=async (userTask)=>{
    const data={
      "id":uuidv4(),
      "task":userTask,
      "complete":false
    };
    await api.post('/to_do_list',data);
  }

  const taskDelete=async (id)=>{
    await api.delete(`/to_do_list/${id}`);
  }

  const update=async(id,complete)=>{
    await api.patch(`/to_do_list/${id}`,{complete});

  }

  return (
    <div className=' pt-4'>
      <h1 className='text-danger text-center'>To Do List</h1>
      <div>
        <setTask.Provider value={tasks}>
          <div className=''>
              <div className='row'>
                  <div className=' col-8 offset-2'>
                    <div>
                      <Form create={create}/>
                    </div>
                      <List taskDelete={taskDelete} update={update}/>
                  </div>
              </div>
          </div>
        </setTask.Provider>
      </div>
    </div>
  )
}

export default App