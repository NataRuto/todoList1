import './App.css';
import image from './notebook.jpg';
import { TodoList } from './TodoList';
import imageTwo from './pencil.jpg'

function App() {
  return (
    <div className='app'>
      <div className='container'>
      <img src={image} alt="2notebook" width="250px"/>
      </div>
      <div className='container'>
        <h1>To-do list</h1>
      </div>
      <div className='container'>
      <TodoList/>
      </div>
      <div className='container'>
      <img className='imageTwo' src={imageTwo} alt="pencil" width="75px"/>
      </div>
    </div>
  );
}

export default App;
