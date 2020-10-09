import React from 'react'
import { useSelector } from 'react-redux'
import { rootState } from '../../store'
import { TaskList } from '../TaskList/TaskList'

export const TaskScreen = () => {
    const tasks = useSelector((state: rootState) => state.tasks )
    
    return (
        <div>
            <TaskList tasks={tasks} loading={false} />
        </div>
    )
}
