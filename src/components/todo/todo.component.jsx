import React from "react";

import './todo.styles.scss'
import TaskList from "../task-list/task-list.component";
import InputWithButton from "../../containers/input.container";

const Todo = ({tasks}) =>{
    console.log(tasks);
    return(
    <div className="todo-list">
        <TaskList heading='Already done' tasks={tasks.filter(task => task.isDone)}/>
        <TaskList heading='To do' tasks={tasks.filter(task => !task.isDone)}/>
        <InputWithButton/>
    </div>
)};

export default Todo;