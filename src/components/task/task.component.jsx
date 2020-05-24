import React from "react";

import './task.styles.scss'

const Task = ({id, task, isDone, doneHandler, deleteHandler}) => {

    const onDone = e => {
        doneHandler(e.target.id);
    };

    const onDelete = e => {
        deleteHandler(e.target.id);
    };
    return(
        <li className="task">
            <p>{task}</p>
            {!isDone ?
                <button
                    id={id}
                    onClick={onDone}
                    className="mark-as-done"
                >✓
                </button>
                : null
            }
            <button
                id={id}
                onClick={onDelete}
                className="delete"
            >✗
            </button>
        </li>
    );
};

export default Task;