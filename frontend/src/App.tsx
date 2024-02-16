import { Typography } from '@mui/material';
import React from 'react';
import TaskColumnAddTask from './components/TaskColumnAddTask';
import TaskColumnBacklog from './components/TaskColumnBacklog';
import TaskColumnFinished from './components/TaskColumnFinished';
import TaskColumnInProcess from './components/TaskColumnInProcess';
import TaskColumnReview from './components/TaskColumnReview';

const App: React.FC = () => {
  return (
    <div className="App">
      <header>
        <Typography variant="h1"
          sx={{ 
            fontFamily: '"Orbitron", "sans-serif"',
            fontSize: 50,
            fontWeight: 'bold',
            marginLeft: '8px',
            marginBottom: '6vh',
            textShadow: '0 0 10px rgba(255, 255, 255, 0.15)', 
            color: 'rgba(255, 255, 255, 0.1)', 
          }}
        >Task Manager</Typography>
      </header>
      <main className="columns-container">
        <TaskColumnBacklog />
        <TaskColumnInProcess />
        <TaskColumnReview />
        <TaskColumnFinished />
        <TaskColumnAddTask />
      </main>
    </div>
  );
};

export default App;
