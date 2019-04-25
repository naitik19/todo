import React, { useState } from 'react';
import { connect } from 'react-redux';
import {
  toggleAction,
  deleteAction,
  setEditAction,
  updateAction
} from '../Actions';

const TodoList = ({ todos, toggleTodo, deleteTodo, updateTodo, setEdit }) => {
  const [newText, setNewText] = useState('');

  return (
    <div>
      <h3>TODO</h3>
      <hr />
      <ul>
        {todos.map(item => {
          return (
            <li
              style={{
                textDecoration: item.completed ? 'line-through' : 'none',
                listStyleType: 'none'
              }}
              key={item.id}
            >
              {!item.completed ? (
                <div>
                  <input type='checkbox' onChange={() => toggleTodo(item.id)} />{' '}
                  {item.isEdit ? (
                    <input
                      type='text'
                      placeholder={item.text}
                      onChange={e => setNewText(e.target.value)}
                    />
                  ) : (
                    item.text
                  )}
                  {item.isEdit ? (
                    <button onClick={() => updateTodo(item.id, newText)}>
                      Save
                    </button>
                  ) : (
                    <button onClick={() => setEdit(item.id)}>Edit</button>
                  )}
                  <button onClick={() => deleteTodo(item.id)}>Delete</button>
                </div>
              ) : null}
            </li>
          );
        })}{' '}
      </ul>
    </div>
  );
};

const mapStateToProps = state => ({
  todos: state.todos
});

const mapDispatchToProps = dispatch => ({
  toggleTodo: id => dispatch(toggleAction(id)),
  deleteTodo: id => dispatch(deleteAction(id)),
  updateTodo: (id, newText) => dispatch(updateAction(id, newText)),
  setEdit: id => dispatch(setEditAction(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);
