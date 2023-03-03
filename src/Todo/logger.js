function logger(reducer) {
    return (prevState, action) => {
        console.group(action.type);
        console.log("Prev State", prevState);
        const newState = reducer(prevState, action);
        console.log("New state", newState);
        console.groupEnd();
        return newState;
    };
}

export default logger;
