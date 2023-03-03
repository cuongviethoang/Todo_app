import { SET_TODO, ADD_TODO, DEL_TODO } from "./constants";

const initState = {
    todoInput: "",
    todos: [],
};

const reducer = (state, action) => {
    switch (action.type) {
        case SET_TODO:
            return {
                ...state,
                todoInput: action.payload,
            };
        case ADD_TODO:
            return {
                ...state,
                todos: [...state.todos, action.payload],
            };
        case DEL_TODO:
            const newTodo = [...state.todos];
            newTodo.splice(action.payload, 1);
            return {
                ...state,
                todos: newTodo,
            };
        default:
            throw new Error("Invalid error.");
    }
};

export { initState };
export default reducer;
