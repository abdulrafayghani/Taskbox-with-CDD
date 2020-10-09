import { createSlice } from "@reduxjs/toolkit";

interface Tasks {
    pinned: boolean
    archived: boolean
    title: string
}

const taskSlice = createSlice({
    name: 'task',
    initialState: [
        {title: "Write Code", pinned: false, archived: false},
        {title: "Deploy Code", pinned: false, archived: false},
        {title: "Set Actions", pinned: false, archived: false},
        {title: "Make DockerFile", pinned: false, archived: false},
        {title: "Install App", pinned: false, archived: false},
        {title: "Implement PWA", pinned: false, archived: false},
        {title: "Review Changes", pinned: false, archived: false},
    ] as Tasks[],
    reducers: { }
})

export default taskSlice.reducer