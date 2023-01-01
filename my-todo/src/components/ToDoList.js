import React from 'react'

function ToDoList({todos,setTodos,todo}) {
    const isCompleted = () =>
    setTodos(
        todos.map((item) => {
            return item.id === todo.id
                ? { ...item, completed: !item.completed }
                : item;
        })
    );
    const deleteTodo = (e) => setTodos(todos.filter(item => item.id !== todo.id));


  return (
    <li key={todo.id} className={todo.isCompleted? 'completed' : ''}>
        <div className={'view'}>
            <input className='toggle' type='checkbox' checked={todo.completed} onChange={isCompleted}/>
            <label onClick={() => {}}>{todo.text}</label>
            <button className='destroy' onClick={deleteTodo}></button>
        </div>
    </li>

  );
}

export default ToDoList;