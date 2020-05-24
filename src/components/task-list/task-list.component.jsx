import React from "react";

import Task from "../../containers/task.container";

import './task-list.styles.scss';

const TaskList = ({heading, tasks}) => (
    <>
        {
            tasks && tasks.length?
                <>
                    <h1 className="todo-heading">{heading}</h1>
                    <ul className="tasks">
                        {
                            tasks.map(task => (
                                <Task key={task.id} {...task}/>
                            ))
                        }
                    </ul>
                </>
                : null
        }
    </>
);

export default TaskList;