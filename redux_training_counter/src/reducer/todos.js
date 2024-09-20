const ActionType = {
  ADD_TODO: 'ADD_TODO',
  DELETE_TODO: 'DELETE_TODO',
};

const todos = (state = [], action) => {
  switch (action.type) {
    case ActionType.ADD_TODO:
      return [...state, action.text];
    case ActionType.DELETE_TODO:
      return state.filter((todo) => todo !== action.text);
    default:
      return state;
  }
};

export default todos;
