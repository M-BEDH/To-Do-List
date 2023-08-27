import React from 'react';
import './TodoItem.css';

function TodoItem({ todo, index, handleToggleComplete, handleDeleteTodo }) {
  function getToggleCompleteClass() {
    return todo.completed ? 'toggle-complete completed' : 'toggle-complete';
  }

  function handleToggleClick() {
    handleToggleComplete(index);
  }

  function handleDeleteClick() {
    handleDeleteTodo(index);
  }

  function renderValidationDate() {
    if (todo.validationDate) {
      return (
        <p className="tacheEffectue">
          Effectuée : {new Date(todo.validationDate).toLocaleString()}
        </p>
      );
    }
    return null;
  }

  return (
    <div className="tacheAfaire">
      <li className={todo.completed ? 'completed' : ''}>
        <span>{todo.text}</span>
        <button className={getToggleCompleteClass()} onClick={handleToggleClick}>
          <i className="fa-solid fa-check"></i>
        </button>
        <button className="delete" onClick={handleDeleteClick}>
          <i className="fa-solid fa-trash"></i>
        </button>
      </li>
      <div className="date">
        <p className="creationDate">
          Créer le : {new Date(todo.creationDate).toLocaleString()}
        </p>
        {renderValidationDate()}
      </div>
    </div>
  );
}

export default TodoItem;
