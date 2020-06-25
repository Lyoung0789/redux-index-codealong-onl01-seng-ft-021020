export default function manageTodo(state = {
  todos: ["work out", "do something"],
}, action) {
  switch (action.type) {
    case 'ADD_TODO':

      return { todos: state.todos.concat(action.payload.text) };

    default:
      return state;
  }
}
