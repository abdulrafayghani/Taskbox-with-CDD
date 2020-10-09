import React from 'react'
import { TaskList } from "../components/TaskList/TaskList";

export default {
    title: 'Task List',
    component: TaskList
}

const tasks = [
    {title: "Write Code", pinned: false, archived: false},
    {title: "Deploy Code", pinned: false, archived: false},
    {title: "Set Actions", pinned: false, archived: false},
    {title: "Make DockerFile", pinned: false, archived: false},
    {title: "Install App", pinned: false, archived: false},
    {title: "Implement PWA", pinned: false, archived: false},
    {title: "Review Changes", pinned: false, archived: false},
]

export const DefaultList = () => {
    return <TaskList tasks={tasks} loading={false} />
}

export const LoadingList = () => {
    return <TaskList tasks={[]} loading={true} />
}

export const PinnedList = () => {
    const new_tasks = [
        ...tasks,
        {title: "Install App", pinned: true, archived: false},
        {title: "Implement PWA", pinned: false, archived: false},
        {title: "Review Changes", pinned: true, archived: true},
    ]
    return (
        <TaskList tasks={new_tasks} loading={false}/>
    )
}

export const EmptyList = () => {
    return <TaskList tasks={[]} loading={false} />
}