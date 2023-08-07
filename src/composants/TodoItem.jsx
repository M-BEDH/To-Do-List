import React from 'react';
import './../style/TodoItem.css';
import Date from './DatePicker';

const TodoItem = ({ todo, index, handleToggleComplete, handleDeleteTodo }) => {
  const toggleComplete = todo.completed
    ? 'toggle-complete completed'
    : 'toggle-complete';

  return (
    <div>
    <li className={todo.completed ? 'completed' : ''}>
      <span>{todo.text}</span>
      <button
        className={toggleComplete}
        onClick={() => handleToggleComplete(index)}
      >
        <i className="fa-solid fa-check"></i>
      </button>
      <button className="delete" onClick={() => handleDeleteTodo(index)}>
        <i className="fa-solid fa-trash"></i>
      </button>
      </li>
      <div className="date">
        <Date />
        </div>
      </div>
  );
};

export default TodoItem;
