import React, { FC } from 'react'
import { TaskItem } from '../Task/Task'

interface Tasks {
    pinned: boolean
    archived: boolean
    title: string
}

interface TaskListProps {
    tasks: Tasks[]
    loading: boolean
}

export const TaskList: FC<TaskListProps> = ({ tasks, loading }) => {

    const sortPinnedTasks = [
        ...tasks.filter(task => task.pinned),
        ...tasks.filter(task => !task.pinned)
    ]

    if(loading){
        return <h1>...loading</h1>
    }

    if(tasks.length === 0){
        return <h1>your tasks are done sit back and chillax</h1>
    }

    return (
        <div>
            {sortPinnedTasks.map((task) => {
                return(
                    <TaskItem task={task.title} pinned={task.pinned} archived={task.archived} />
                )
            })}
        </div>
    )
}
