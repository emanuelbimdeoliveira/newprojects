import React from 'react'

import { ITask } from '../../interfaces/ITask'

import { useWorkWithTasks } from '../../hooks/useWorkWithTasks'
import { useNavigate } from 'react-router-dom'

import "./TaskList.css"

interface Props {
    tasks: ITask[]
    setTasks: React.Dispatch<React.SetStateAction<ITask[]>>
}

const TaskList = ({tasks, setTasks}: Props) => {
    const {check, deleteTask, visualizeTask} = useWorkWithTasks(tasks, setTasks);

    const navigate = useNavigate();

  return (
    <ul className='list'>
        {
            tasks.length > 0 ? (tasks.map((taskData) => (
                <li key={taskData.id} className='list-item'>
                    <form>
                        <label>
                            <input type="checkbox" name={taskData.task} id={taskData.task} onChange={(e) => check(e, taskData.id)} checked={taskData.isChecked}/>
                            <p>{taskData.task}</p>
                        </label>
                    </form>
                    <div className='task-options'>
                        <p className='center'>Opções da Tarefa</p>
                        <ul>
                            <li><i onClick={() => deleteTask(taskData.id)} className='material-symbols-outlined'>delete</i></li>
                            <li><i onClick={() => navigate(`edit/${taskData.id}`)} className='material-symbols-outlined'>edit</i></li>
                            <li><i onClick={() => visualizeTask(taskData.id)} className='material-symbols-outlined'>visibility</i></li>
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