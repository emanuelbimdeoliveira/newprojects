import React from 'react'

import { ITask } from '../../interfaces/ITask'

import FormComponent from '../form/FormComponent'

interface Props {
    tasks: ITask[]
    setTasks: React.Dispatch<React.SetStateAction<ITask[]>>
}
    
const TaskEdit = ({tasks, setTasks}: Props) => {
  return (
    <section className='modal'>
        <section className='modal-content'>
            <h2>Editar Tarefa</h2>
        </section>
    </section>
  )
}

export default TaskEdit