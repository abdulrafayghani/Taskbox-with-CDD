import React from 'react';
import './App.css';
import { TaskItem } from './components/Task/Task';
// import { TaskList } from './components/TaskList/TaskList';

function App() {
  return (
    <div className="App">
      <TaskItem task={'Game'} pinned={false} archived={false} />
    </div>
  );
}

export default App;
