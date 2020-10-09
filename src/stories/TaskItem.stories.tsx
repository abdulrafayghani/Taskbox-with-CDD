import React from 'react'
import { TaskItem } from "../components/Task/Task"

export default { 
    title: 'Task',
    component: TaskItem
}

export const DefaultTask = () => {
    return(
        <TaskItem task={'Number one task'}   pinned={false} archived={false} />
    )
}

export const PinnedTask = () => {
    return(
        <TaskItem task={'Number one task'}  pinned={true} archived={false} />
    )
}

export const ArchivedTask = () => {
    return(
        <TaskItem task={'Number one task'} pinned={false} archived={true} />
    )
}