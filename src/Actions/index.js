let id = 1;

export const addAction = text => ({
  type: 'ADD_TODO',
  id: id++,
  text
});

export const toggleAction = id => ({
  type: 'TOGGLE_TODO',
  id
});

export const deleteAction = id => ({
  type: 'DELETE_TODO',
  id
});

export const setEditAction = id => ({
  type: 'SET_EDIT',
  id
});

export const updateAction = (id, newText) => ({
  type: 'UPDATE_TODO',
  id,
  newText
});
