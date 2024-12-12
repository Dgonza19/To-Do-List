import React, { useState } from "react";

function TaskForm({ onAddTask }) {
    const [task, setTask] = useState('')

    const handleInputCange = (e) => {
        setTask(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if (task.trim()) {
            onAddTask(task);
            setTask('');
        }
    }

    return(
        <form onSubmit={handleSubmit}>
            <input 
                type="text"
                value={task}
                onChange={handleInputCange}
                placeholder="Escribe una tarea..."
             />
             <button type="submit">Añadir Tarea</button>
        </form>
    )
}

export default TaskForm;