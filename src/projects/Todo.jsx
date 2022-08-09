import { useState } from 'react';
import React from 'react';
import './todo.css';
import { Link } from 'react-router-dom';

let counter = 0;

function Todo() {
  const [todos, setTodos] = useState([]);
  const [task, setTask] = useState('');

  //creates a TODO when button is clicked
  function createTODO(e) {
    // console.log(task);
    e.preventDefault();
    setTodos((existingList) => {
      setTask('');
      // console.log(`Counter ${counter}`);
      return [...existingList, { todo: task, id: counter++ }];
    });
  }

  //creates a TODO when enter key is pressed
  // function checkForEnter(e) {
  //   if (e.keyCode === 13) {
  //     createTODO();
  //   }
  // }

  //deletes the todo item when delete button is pressed
  function deleteTodo(itemID) {
    setTodos((existingList) =>
      existingList.filter((item) => item.id !== itemID),
    );
  }

  return (
    <div>
      <Link to='/'>Go back to Home</Link>
      <h1>My TODO List</h1>
      <form onSubmit={createTODO} className='todo-form'>
        <input
          // onKeyDown={checkForEnter}
          type='text'
          className='todo-text'
          placeholder='Type your TODO here..'
          onChange={(event) => setTask(event.target.value)}
          value={task}
        />
        <button type='submit' className='submit'>
          Create TODO
        </button>
      </form>
      <ul className='todo-list'>
        {todos.map((item) => {
          return (
            <div className='todo' key={item.id}>
              <li className='todo-item'>{item.todo}</li>
              <button
                className='delete-btn'
                onClick={() => deleteTodo(item.id)}
              >
                X
              </button>
            </div>
          );
        })}
      </ul>
    </div>
  );
}

export default Todo;
