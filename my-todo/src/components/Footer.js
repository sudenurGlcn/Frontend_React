import React from 'react'

export default function Footer({todos,setTodos,status,setStatus}) {
    const unCompleted = todos.filter(todo => !todo.completed);
    const completed = todos.filter(todo => todo.completed);

    const clearCompleted = (e) =>{
        e.preventDefault();
        setTodos(unCompleted);
        
    };

    const clickStyle =(e)=>{
        setStatus(e.target.value);
    };
  return (
    <footer className='footer'>
        <span className='todo-count'>
            <strong>{unCompleted.length}</strong> item left
        </span>

        <ul className='filters'>
            <li>
                <label
						onClick={clickStyle}
						className={status === "all" ? "selected" : ""}
						id="all"
					>
						All
				</label>
            </li>
            <li>
                <label
						onClick={clickStyle}
						className={status === "active" ? "selected" : ""}
						id="active"
					>
						Active
				</label>
            </li>
            <li>
                <label
						onClick={clickStyle}
						className={status === "completed" ? "selected" : ""}
						id="completed"
					>
						Completed
				</label>
            </li>
        </ul>

        	
			<button
				className={completed === 0 ? "hidden" : "clear-completed"}
				onClick={clearCompleted}
			>
				Clear completed
			</button>
    </footer>
     
  );
}
