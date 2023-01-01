import {useState,useEffect} from 'react'
import Form from './components/Form'
import ToDoList from './components/ToDoList'
import Footer from './components/Footer'
import './App.css';

function App() {
  const [todos,setTodos] = useState([
    {
      text: 'Learn JavaScript',
      completed: true,
      id: 1
    },
    {
      text: 'Learn React',
      completed: false,
      id: 2
    
    },
    {
      text: 'Learn Node',
      completed: false,
      id: 3
    }
  ]);
  const [status,setStatus] = useState('all');
  const [filteredTodos,setFilteredTodos] = useState([]);
  useEffect(()=>{
    getLocalTodos();
  },[]);

  useEffect(()=>{
   const filterHandler= () =>{
      switch(status){
        case 'completed':
          setFilteredTodos(todos.filter(todo => todo.completed === true));
          break;
        case 'active':
          setFilteredTodos(todos.filter(todo => todo.completed === false));
          break;
        default:
          setFilteredTodos(todos);
          break;
      }
    };
    filterHandler();
    saveLocalTodos();
  },[todos,status]);

  const saveLocalTodos = () =>{
    localStorage.setItem('todos',JSON.stringify(todos));
  }
  const getLocalTodos = () =>{
    if(localStorage.getItem('todos') === null){
      localStorage.setItem('todos',JSON.stringify([]));
    }else{
      let todoLocal = JSON.parse(localStorage.getItem('todos'));
      setTodos(todoLocal);
    }
  }
  
  return (
    <div className='todoapp'>
      <header className='header'>
        <h1>todos</h1>
        <Form todos={todos} setTodos={setTodos}/>
      </header>
      <section className='main'>
        <ul className='todo-list'>
          {filteredTodos.map((todo) =>{
            return(
              <ToDoList
								status={status}
								key={todo.id}
								todo={todo}
								text={todo.text}
								todos={todos}
								setTodos={setTodos}
							/>
                          );
          } )}
         
        </ul>
      </section>
      <section>
        <Footer todos={todos} setTodos={setTodos} status={status} setStatus={setStatus}/>
      </section>
      
    </div>
  )
}

export default App