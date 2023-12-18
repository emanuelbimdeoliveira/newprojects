import React, { useEffect, useState } from 'react'

import { NavLink } from 'react-router-dom'

import { ITask } from '../../interfaces/ITask'
import { useParams } from 'react-router-dom'

import "./TaskView.css"

interface Props {
    tasks: ITask[]
    setTasks: React.Dispatch<React.SetStateAction<ITask[]>>
}

const TaskView = ({tasks, setTasks}: Props) => {
    const taskId = useParams<string>();
    // const [restTime, setRestTime] = useState<string>("");
// 
    // const calculateCountDown = (startTime: string, endTime: string): string => {
        // const totalSeconds = (Number(endTime) - Number(startTime)) / 1000;
        // const days = Math.floor(totalSeconds / (360 * 24));
        // const hours = Math.floor((totalSeconds % (360 * 24)) / 360);
        // const minutes = Math.floor(((totalSeconds % (360 * 24)) % 360) / 60)
        // setRestTime(`${days}/${hours}/${minutes}`)
        // return "restTime"
    // }

  return (
    <>
        {tasks && tasks.map((item) => {
            if (item.id == taskId.id) {
                // useEffect(() => {
                    // setInterval(calculateCountDown(item.createdAt![1], item.time![1]), 1000)
                    // }, [])
                    
                    return (
                        <section className='view-task' key={item.id}>
                        <h2>{item.task}</h2>
                        <section className='task-data'>
                            <aside>
                                <p>Criada em: {item.createdAt![0]}</p>
                                <p>Data para Conclusão: {item.time![0]}</p>
                            </aside>
                            <aside>
                                <p>Dificuldade: {item.dificult}</p>
                                <p>Executada: {item.isChecked ? "sim" : "não"}</p>
                            </aside>
                        </section>
                        <NavLink to={"/"}><p className='back-link'>Voltar</p></NavLink>
                    </section>
                ) 
            }
        })}
    </>
  )
}

export default TaskView