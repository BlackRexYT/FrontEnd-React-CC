import logo from './logo.svg';
import './App.css';
import Todo from './components/Todo.jsx';
import Title from './components/Title.jsx';
import Modal from './components/Modal.jsx';

function App() {
  return (
    <div>
      <Title></Title>
      <div className='todo__wrapper'>
        <Todo title='Finish Fes' para='code along fes s by s'></Todo>
        <Todo title='Finish Interview' para='answer questioon'></Todo>
        <Todo title='land hunnid kay dumpy' para='MAKE MONAYY'></Todo>
      </div>
      {/* <Modal></Modal> */}
    </div>
  );
}

export default App;
