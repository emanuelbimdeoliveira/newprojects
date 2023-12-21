import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom';

import { useWorkWithTasks } from '../../hooks/useWorkWithTasks';

import { ITask } from '../../interfaces/ITask';

import "./FormComponent.css"

interface Props {
    tasks: ITask[]
    setTasks: React.Dispatch<React.SetStateAction<ITask[]>>
    action: "create" | "edit"
}

const FormComponent = ({tasks, setTasks, action}: Props) => {
    const taskId = useParams<string>().id;
    const navigate = useNavigate();

    const [task, setTask] = useState<string>("");
    const [time, setTime] = useState<string | string[]>("");
    const [dificult, setDificult] = useState<number | null>(5);

    // custom hook
    const {addTask, editTask, tasks: actualTasks} = useWorkWithTasks(tasks, setTasks);

    // update localStorage
    useEffect((): void => {
        localStorage.setItem("tasksOfToDoListWithTsAndReact", JSON.stringify(actualTasks))
    }, [actualTasks])

    if (action == "edit") {
        useEffect(() => {
            tasks.map((item): void => {
                if (item.id == taskId) {
                    setTask(item.task)
                    setDificult(item.dificult)
                }
            })
        }, []);
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (action == "create") {   
            addTask({task, time, dificult});
            
            setTask("");        
            setTime("");        
            setDificult(5);        
            
            alert("Tarefa adicionada!")
        } else {
            editTask({task, time, dificult}, Number(taskId));
        }
    }

    const handleReset = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (action == "create") {
            setTask("");        
            setTime("");        
            setDificult(5);        
        } else {
            navigate("/");
        }
    }

  return (
    <form className='form-task' onSubmit={(e) => {handleSubmit(e)}} onReset={(e) => {handleReset(e)}}>
        <fieldset className='inputs'>
            <label>
                {action == "create" ? (
                    <p>Nova Tarefa:</p>
                ) : (
                    <p>Novo Nome da Tarefa:</p>
                )}
                <input 
                    type="text"
                    required
                    placeholder='Tarefa'    
                    autoComplete='true'
                    value={task}
                    onChange={(e) => setTask(e.target.value)}
                />
            </label>
            <label>
                {action == "create" ? (
                    <p>Data para Conclusão:</p>
                ) : (
                    <p>Nova Data para Conclusão:</p>
                )}
                <input 
                    type='datetime-local'
                    required
                    autoComplete='true'
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                />
            </label>
            <label>
                <p>Dificuldade:</p>
                <input 
                    type="number"
                    required
                    placeholder='De 1 a 5'    
                    max={5}
                    min={1}
                    autoComplete='true'
                    step={1}
                    value={dificult ?? 0}
                    onChange={(e) => setDificult(Number(e.target.value))}
                />
            </label>
        </fieldset>
        <fieldset className='submits'>
            <input type="reset" className='danger' value="Cancelar" />
            <input type="submit" className='success' value={action == "create" ? "Criar" : "Salvar"} />
        </fieldset>
    </form>
  )
}

export default FormComponent