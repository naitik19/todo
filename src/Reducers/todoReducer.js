export function todoReducer(state = [], action) {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: false,
          isEdit: false
        }
      ];
    case 'TOGGLE_TODO':
      return state.map(todo =>
        todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
      );
    case 'DELETE_TODO':
      return state.filter(todo => todo.id !== action.id);
    case 'SET_EDIT':
      return state.map(todo =>
        todo.id === action.id ? { ...todo, isEdit: !todo.isEdit } : todo
      );

    case 'UPDATE_TODO':
      return state.map(todo =>
        todo.id === action.id
          ? { ...todo, text: action.newText, isEdit: !todo.isEdit }
          : todo
      );
    default:
      return state;
  }
}
