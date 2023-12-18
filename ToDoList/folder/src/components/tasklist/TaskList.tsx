import React from 'react'

import { ITask } from '../../interfaces/ITask'

import "./TaskList.css"
import { useWorkWithTasks } from '../../hooks/useWorkWithTasks'

interface Props {
    tasks: ITask[]
    setTasks: React.Dispatch<React.SetStateAction<ITask[]>>
    deleteTask: (taskId: number | undefined) => void
}

const TaskList = ({tasks, setTasks, deleteTask}: Props) => {
    const {check, editTask, visualizeTask} = useWorkWithTasks(tasks, setTasks);

  return (
    <ul className='list'>
        {
            tasks.length > 0 ? (tasks.map((taskData) => (
                <li key={taskData.id} className='list-item'>
                    <form>
                        <label>
                            <input type="checkbox" name={taskData.task} id={taskData.task} onChange={(e) => check(e, taskData.id)} checked={taskData.isChecked}/>
                            <h2>{taskData.task}</h2>
                        </label>
                    </form>
                    {/* <p>Data para conclusão: {taskData.time}</p> */}
                    <div className='task-options'>
                        <p className='center'>Opções da Tarefa</p>
                        <ul>
                            <li><i onClick={() => deleteTask(taskData.id)}>d</i></li>
                            <li><i onClick={() => editTask(taskData.id)}>e</i></li>
                            <li><i onClick={() => visualizeTask(taskData.id)}>v</i></li>
                        </ul>
                    </div>
                </li>
            ))) : (
                <p>Adicione tarefas para vê-las!</p>
            )
        }
    </ul>
  )
}

export default TaskList