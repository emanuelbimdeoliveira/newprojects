
import { NavLink } from 'react-router-dom'

import { ITask } from '../../interfaces/ITask'
import { useParams } from 'react-router-dom'

import "./TaskView.css"

interface Props {
    tasks: ITask[]
    setTasks: React.Dispatch<React.SetStateAction<ITask[]>>
}

const TaskView = ({tasks}: Props) => {
    const taskId = useParams<string>();

  return (
    <>
        {tasks && tasks.map((item) => {
            if (item.id == taskId.id) {                    
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
                            <section className='task-data-small'>
                                <p>Criada em: {item.createdAt![0]}</p>
                                <p>Data para Conclusão: {item.time![0]}</p>
                                <p>Dificuldade: {item.dificult}</p>
                                <p>Executada: {item.isChecked ? "sim" : "não"}</p>
                            </section>  
                            <NavLink to={"/"} className='back-link'><span className='material-symbols-outlined'>arrow_back</span></NavLink>
                        </section>
                ) 
            }
        })}
    </>
  )
}

export default TaskView