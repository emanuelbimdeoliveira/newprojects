import React from 'react'

import { ITask } from '../../interfaces/ITask'

import FormComponent from '../form/FormComponent'

import { useParams } from 'react-router-dom'

interface Props {
    tasks: ITask[]
    setTasks: React.Dispatch<React.SetStateAction<ITask[]>>
}
    
const TaskEdit = ({tasks, setTasks}: Props) => {
  const taskId = useParams<string>().id;

  return (
    <section className='modal'>
        <section className='modal-content'>
            <h2>Editar Tarefa numero {taskId}</h2>
            <FormComponent tasks={tasks} setTasks={setTasks} action='edit'/>
        </section>
    </section>
  )
}

export default TaskEdit