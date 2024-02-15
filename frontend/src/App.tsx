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
        <h1>Tasks</h1>
      </header>
      <main className="columns-container">
        <TaskColumnBacklog />
        <TaskColumnInProcess />
        <TaskColumnReview />
        <TaskColumnFinished />
        <TaskColumnAddTask />
        {/* Adicione aqui mais componentes, se necessário */}
      </main>
    </div>
  );
};

export default App;
