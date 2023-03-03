import { SET_TODO_INPUT, ADD_TODO_INPUT, DELETE_TODO_INPUT } from "./constains";

const initState = {
    todos: [],
    todoInput: "",
};

const reducer = (state, action) => {
    switch (action.type) {
        case SET_TODO_INPUT:
            return {
                ...state,
                todoInput: action.payload,
            };
        case ADD_TODO_INPUT:
            return {
                ...state,
                todos: [...state.todos, action.payload],
            };
        case DELETE_TODO_INPUT:
            const newTodo = [...state.todos];
            newTodo.splice(action.payload, 1);
            return {
                ...state,
                todos: newTodo,
            };
        default:
            throw new Error("");
    }
};
export { initState };
export default reducer;
