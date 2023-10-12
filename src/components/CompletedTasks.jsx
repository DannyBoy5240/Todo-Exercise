import React from "react";

function CompletedTasks({todos}) {
    return ( 
        <>
            {todos
                .map(todo => {
                return (<li key={todo.id + 1} className="completedtask__task"><span>{todo.value}</span> - <strong>{todo.category}</strong> - Task completed - {(todo.endDate - todo.id) / 1000}s</li>)
            })}
        </>
     );
}

export default CompletedTasks;