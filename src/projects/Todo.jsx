import { useState } from 'react';

function Todo() {
  const [todos, setTodos] = useState([]);
  const [task, setTask] = useState('');

  const createTODO = () => {
    // console.log(task);
    setTask('');
    setTodos((existingList) => {
      return [...existingList, task];
    });
  };

  return (
    <div className='App'>
      <h1>My TODO List</h1>
      <input
        type='text'
        className='todo-text'
        placeholder='Type your TODO here..'
        onChange={(event) => setTask(event.target.value)}
        value={task}
      />
      <button className='submit' onClick={createTODO}>
        Create TODO
      </button>
      <ul className='todo-list'>
        {todos.map((todo, index) => {
          return <li key={index}>{todo}</li>;
        })}
      </ul>
    </div>
  );
}

export default Todo;
