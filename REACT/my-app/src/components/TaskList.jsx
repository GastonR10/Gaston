import React from 'react';

import Task from './Task';

const TaskList = () => {
    const tasks = [
        { id : 1, title: "Ir al centro"}, 
        { id : 2, title: "Pasear al perro"}, 
        { id : 3, title: "Lavarse los dientes"},
    ];

    return (
        tasks.map(task => <Task task={task} />)
    )
};

export default TaskList;