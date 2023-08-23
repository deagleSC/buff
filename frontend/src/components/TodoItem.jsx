import React from "react";
import "./TodoItem.css";

import {useState} from "react";

const TodoItem = ({text}) => {

    const [completed, setCompleted] = useState(false)

    return (
        <div>
            {text} &nbsp;
            <span className="check" onClick={() => setCompleted(!completed)}>
            {completed ? <span className="completedCheck">&#10003;</span> : <span>&#10003;</span>}
            
            </span>
        </div>
    )
}

export default TodoItem;