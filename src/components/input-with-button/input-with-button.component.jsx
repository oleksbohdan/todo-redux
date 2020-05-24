import React from "react";

import './input-with-button.styles.scss'

const InputWithButton = ({addTask}) => {

    const inputHandler = () => {
        const input = document.getElementById('entered-task');
        if (!input.value) return;
        let task = input.value;
        addTask(task);
        input.value = '';
    };

    return(
        <>
            <div className="separator"/>
            <div className="input-field">
                <p className="task">Task</p>
                <input id="entered-task" type="text" placeholder="What do you need to do?"/>
            </div>
            <button onClick={inputHandler}>Save item</button>
        </>
    );
};

export default InputWithButton;