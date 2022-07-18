import React from 'react';

import TodoListItem from '../todo-list-item/todo-list-item';
import './todo-list.css';

const TodoList = ({ todos, onDeleted, addForm, onToggleImportant, onToggleDone }) => {

  const elements = todos.map((item) => {
    const { text, id, ...itemProps } = item;

    return (
      <li key={id} className="list-group-item">
        <TodoListItem 
        {...itemProps } 
        onDeleted={() => onDeleted(id)}
        addForm={() => addForm(text)}
        onToggleImportant={() => onToggleImportant(id)}
        onToggleDone={() => onToggleDone(id)}
        />
      </li>
    );
  });

  return (
    <ul className="list-group todo-list">
      { elements }
    </ul>
  );
};

export default TodoList;
