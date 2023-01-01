import {useState} from 'react'

function Form({todos,setTodos}) {
    const [inputText,setInputText] = useState('');
    const onChangeForm=(e)=>{
    setInputText(e.target.value);
   }
    const onSubmitForm=(e)=>{
        e.preventDefault();
        if(inputText.trim() === ''){
            alert('Please enter a todo');
            return;
        }
        setTodos([...todos,{text:inputText,completed:false,id:Math.random()*1000}]);
        setInputText('');
    };

  return (
    <div className='header'>
        <form onSubmit={onSubmitForm}>
            <input className='new-todo' placeholder='What needs to be done?' autoFocus onChange={onChangeForm} value={inputText}/>
        </form>
    </div>
  );
}

export default Form;