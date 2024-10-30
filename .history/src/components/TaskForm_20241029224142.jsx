import React, { useState } from 'react';

function TaskForm({ addTask }) {
    const [description, setDescription] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (description.trim()) {
            addTask({
                id: Date.now(), 
                description,
                completed: false 
            });
            setDescription(""); // reset input
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Enter task description"
            />
            <button type="submit">Add Task</button>
        </form>
    );
}

export default TaskForm;