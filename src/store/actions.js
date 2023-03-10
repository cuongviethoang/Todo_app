import { SET_TODO_INPUT, ADD_TODO_INPUT, DELETE_TODO_INPUT } from "./constains";

export const setTodoInput = (payload) => {
    return {
        type: SET_TODO_INPUT,
        payload,
    };
};

export const addTodoInput = (payload) => {
    return {
        type: ADD_TODO_INPUT,
        payload,
    };
};

export const delTodoInput = (payload) => {
    return {
        type: DELETE_TODO_INPUT,
        payload,
    };
};
