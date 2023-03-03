function logger(reducer) {
    return (prevState, action) => {
        console.group(action.type);
        console.log("Prev State", prevState);
        console.log("action", action);
        const nextState = reducer(prevState, action);
        console.log("nextState", nextState);
        console.groupEnd();
        return nextState;
    };
}

export default logger;
