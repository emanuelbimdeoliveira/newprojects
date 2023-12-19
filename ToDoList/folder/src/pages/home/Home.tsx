import React, { useState } from 'react'

import FormComponent from '../../components/form/FormComponent'
import TaskList from '../../components/tasklist/TaskList'

import "./Home.css"

import { ITask } from '../../interfaces/ITask'

interface Props {
  tasks: ITask[]
  setTasks: React.Dispatch<React.SetStateAction<ITask[]>>
  deleteTask: (taskId: number | undefined) => void
}

const Home = ({tasks, setTasks, deleteTask}: Props) => {
  return (
    <section className='home'>
        <h1>To Do List</h1>
        <FormComponent tasks={tasks} setTasks={setTasks} action='create' />
        <TaskList tasks={tasks} setTasks={setTasks} deleteTask={deleteTask}/>
    </section>
  )
}

export default Home