import React from 'react';
import './../style/TodoItem.css';

const TodoItem = ({ todo, index, handleToggleComplete, handleDeleteTodo }) => {
  const toggleComplete = todo.completed
    ? 'toggle-complete completed'
    : 'toggle-complete';

  return (
    <div className='tacheAfaire'>
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
        <p className='creationDate'>Date de création: {new Date(todo.creationDate).toLocaleString()}</p>
        {todo.validationDate && (
          <p className='tacheEffectue'>Tache effectuée : {new Date(todo.validationDate).toLocaleString()}</p>
        )}
      </div>
    </div>
  );
};

export default TodoItem;

