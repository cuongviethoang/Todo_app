import { useReducer, useRef } from "react";
import logger from "./logger";

import reducer, { initState } from "./reducer";
import { setJob, addJob, delJob } from "./actions";
function App() {
    const inputRef = useRef();
    const [state, dispatch] = useReducer(logger(reducer), initState);
    const { job, jobs } = state;

    const handleAddJob = (job) => {
        dispatch(addJob(job));
        dispatch(setJob(""));
        inputRef.current.focus();
    };

    return (
        <div style={{ padding: "40px" }}>
            <input
                ref={inputRef}
                value={job}
                onChange={(e) => dispatch(setJob(e.target.value))}
            ></input>
            <button onClick={() => handleAddJob(job)}>Add</button>
            <ul>
                {jobs.map((job, index) => {
                    return (
                        <li key={index}>
                            {job}
                            <span onClick={() => dispatch(delJob(index))}>
                                &times;
                            </span>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}

export default App;
