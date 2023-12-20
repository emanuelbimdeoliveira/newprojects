
import FormComponent from '../../components/form/FormComponent'
import TaskList from '../../components/tasklist/TaskList'

import "./Home.css"

import { ITask } from '../../interfaces/ITask'

interface Props {
  tasks: ITask[]
  setTasks: React.Dispatch<React.SetStateAction<ITask[]>>
}

const Home = ({tasks, setTasks}: Props) => {
  return (
    <section className='home'>
        <h1>To Do List</h1>
        <FormComponent tasks={tasks} setTasks={setTasks} action='create' />
        <TaskList tasks={tasks} setTasks={setTasks}/>
    </section>
  )
}

export default Home