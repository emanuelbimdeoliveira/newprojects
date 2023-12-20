import React from 'react'

import { ITask } from '../../interfaces/ITask'

import FormComponent from '../form/FormComponent'

import "./TaskEdit.css"

interface Props {
    tasks: ITask[]
    setTasks: React.Dispatch<React.SetStateAction<ITask[]>>
}
    
const TaskEdit = ({tasks, setTasks}: Props) => {
  return (
    <section>
        <section className='task-edit'>
            <FormComponent tasks={tasks} setTasks={setTasks} action='edit'/>
        </section>
    </section>
  )
}

export default TaskEdit