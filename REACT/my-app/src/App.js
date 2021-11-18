import Greeting from './components/Greeting';
import './App.css';
import TaskList from './components/TaskList';

function App() {
  return (
    <div className="App">
      <span>Mi primer componente</span>
      <Greeting/>
      <TaskList />
    </div>      
  );
}

export default App;
