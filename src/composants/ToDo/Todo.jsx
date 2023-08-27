import React, { useState, useEffect } from 'react';
import './Todo.css';
import TodoItem from '../ToDoItem/TodoItem';

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    const storedTodos = localStorage.getItem('todos');
    const parsedTodos = storedTodos ? JSON.parse(storedTodos) : [];
    setTodos(parsedTodos);
  }, []);

  function handleInputChange(e) {
    const newValue = e.target.value;
    setInputValue(newValue);
  }

  function handleAddTodo() {
    if (inputValue.trim() !== '') {
      const capitalize = inputValue.charAt(0).toUpperCase() + inputValue.slice(1)
      const newTodo = {
        text: capitalize,
        completed: false,
        creationDate: new Date().toISOString(),
        validationDate: null
      };
      setTodos([...todos, newTodo]);
      setInputValue('');
 
      const storedTodos = localStorage.getItem('todos');
      const parsedTodos = storedTodos ? JSON.parse(storedTodos) : [];
      const updatedTodos = [...parsedTodos, newTodo];
      localStorage.setItem('todos', JSON.stringify(updatedTodos));
    }
  }

  function handleToggleComplete(index) {
    const updatedTodos = [...todos];
    updatedTodos[index].completed = !updatedTodos[index].completed;

    if (updatedTodos[index].completed) {
      updatedTodos[index].validationDate = new Date().toISOString();
    } else {
      updatedTodos[index].validationDate = null;
    }

    setTodos(updatedTodos);
    localStorage.setItem('todos', JSON.stringify(updatedTodos));
  }

  function handleDeleteTodo(index) {
    const updatedTodos = [...todos];
    updatedTodos.splice(index, 1);
    setTodos(updatedTodos);

    const storedTodos = localStorage.getItem('todos');
    const parsedTodos = storedTodos ? JSON.parse(storedTodos) : [];
    const updatedStoredTodos = parsedTodos.filter((_, i) => i !== index);
    localStorage.setItem('todos', JSON.stringify(updatedStoredTodos));
  }

  return (
    <div>
      <h1>To Do List</h1>
      <input
        className="inputDesktop"
        type="text"
        value={inputValue}
        onChange={handleInputChange}
      
        placeholder="Quelle est votre tâche ?"
      />

      <input
        className="inputResponsive"
        type="textarea"
        value={inputValue}
        onChange={handleInputChange}
       
        placeholder="Quelle est votre tâche ?"
      />

      <button className="ajouter" onClick={handleAddTodo}>
        Ajouter
      </button>
      <ul>
        {todos.map((todo, index) => (
          <TodoItem
            key={index}
            todo={todo}
            index={index}
            handleToggleComplete={handleToggleComplete}
            handleDeleteTodo={handleDeleteTodo}
          >
            <p>
              Date de création: {new Date(todo.creationDate).toLocaleString()}
            </p>
          </TodoItem>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
