import { useNavigate } from "react-router-dom";
import { ITask } from "../interfaces/ITask"

export const useWorkWithTasks = (tasks: ITask[], setTasks: React.Dispatch<React.SetStateAction<ITask[]>>) => {
    const navigate = useNavigate()

    const addTask = ({task, time, dificult}: ITask): ITask[] | void => {
        // dealing with dates
        const dealingWithDates = (dateToWork: Date): string[] => {
            const fullYear = dateToWork.getFullYear();
            const month = dateToWork.getMonth() + 1;
            const day = dateToWork.getDate();

            const hour = dateToWork.getHours();
            const minute = dateToWork.getMinutes();
            const second = dateToWork.getSeconds();

            // decimal arrange
            const decimalArrange = (data: number): string => {
                return String(data).padStart(2, "0");
            }
            return [
                `${decimalArrange(day)}/${decimalArrange(month)}/${fullYear}-${decimalArrange(hour)}:${decimalArrange(minute)}:${decimalArrange(second)}`, String(Date.parse(String(dateToWork))
            )]
        }

        // automatic data for this task
        const id: number = Math.floor(Math.random() * 500);
        const isChecked = false;
        
        const createdAt = dealingWithDates(new Date());
        time = dealingWithDates(new Date(String(time)));

        const taskObject: ITask = {
            task,
            id,
            time,
            createdAt,
            dificult,
            isChecked
        }

        return taskObject && setTasks([...tasks, taskObject])
    }

    const check = (e: React.ChangeEvent<HTMLInputElement>, taskId: number | undefined): void => {
        setTasks((prevTasks) => {
            return prevTasks.map((item) => {
                if (item.id === taskId) {
                    item.isChecked = e.target.checked;
                    return item
                } else {
                    return item
                }
            })
        })
    }

    const editTask = (taskId: number | undefined) => {
        navigate(`/edit/${taskId}`)
    }

    const visualizeTask = (taskId: number | undefined) => {
        navigate(`/view/${taskId}`)
    }

    return {addTask, check, editTask, visualizeTask, tasks}
}