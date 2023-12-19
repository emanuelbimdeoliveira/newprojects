export interface ITask {
    task: string
    id?: number
    time: string | string[]
    createdAt?: string[]
    dificult: number | null
    isChecked?: boolean
}