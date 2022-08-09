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
      <Link
        to='/'
        className='px-1 py-2 border-gray-500 border-2 rounded bg-gray-500 text-gray-50 align-middle'
      >
        Go back to Home
      </Link>
      <h1 className='text-3xl py-3 my-2 text-center'>My TODO List</h1>
      <form onSubmit={createTODO} className='flex justify-center'>
        <input
          // onKeyDown={checkForEnter}
          type='text'
          className='px-2 py-3 border-gray-300 border-2 rounded w-[50%] outline-none'
          placeholder='Type your TODO here..'
          onChange={(event) => setTask(event.target.value)}
          value={task}
        />
        <button
          type='submit'
          className='px-2 py-3 border-green-500 border-2 rounded mx-2 bg-green-500 hover:scale-95'
        >
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
