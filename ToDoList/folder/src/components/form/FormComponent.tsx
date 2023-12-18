import React, { useState, useEffect } from 'react'

import { useWorkWithTasks } from '../../hooks/useWorkWithTasks';

import { ITask } from '../../interfaces/ITask';

import "./FormComponent.css"

interface Props {
    tasks: ITask[]
    setTasks: React.Dispatch<React.SetStateAction<ITask[]>>
}

const FormComponent = ({tasks, setTasks}: Props) => {
    const [task, setTask] = useState<string>("");
    const [time, setTime] = useState<string>("");
    const [dificult, setDificult] = useState<number>(5);

    // custom hook
    const {addTask, tasks: actualTasks} = useWorkWithTasks(tasks, setTasks);

    // update localStorage
    useEffect((): void => {
        localStorage.setItem("tasksOfToDoListWithTsAndReact", JSON.stringify(actualTasks))
    }, [actualTasks])

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        addTask({task, time, dificult});
    }

  return (
    <form className='form-task' onSubmit={(e) => {handleSubmit(e)}}>
        <fieldset className='inputs'>
            <label>
                <p>Nova Tarefa:</p>
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
                <p>Data para Conclusão:</p>
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
                    value={dificult}
                    onChange={(e) => setDificult(Number(e.target.value))}
                />
            </label>
        </fieldset>
        <fieldset className='submits'>
            <input type="reset" className='danger' value="Cancelar" />
            <input type="submit" className='success' value="Criar" />
        </fieldset>
    </form>
  )
}

export default FormComponent