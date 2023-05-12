import './ContactPage.css'
import React, {useState} from 'react'
import ToDo from '../../component/ToDo/ToDo'
import ToDoForm from '../../component/ToDoFrom/ToDoForm'

export default function ContactPage(){
    const[todos, setTodos] = useState([])
    const addTask = (userInput)=>{
        if(userInput){
            const newItem = {
                id:Math.random().toString(30).substring(2, 9),
                task:userInput,
                complete:false
            }
            setTodos([...todos,newItem])
            console.log(newItem);
        }
    }
    console.log(todos);
    const removeTask = (id) => {
        setTodos([...todos.filter((todo)=>todo.id !==id)])
    }
    const handleToggle = (id) =>{
        setTodos([
            ...todos.map((todo)=>
            todo.id===id ? {...todo, complete: !todo.complete} :{...todo}
            )
        ])
    }
    return(
         <div>
            <div>
                <h1>Cank: {todos.length}</h1>
            </div>
            <ToDoForm addTask={addTask}/>
            {todos?.map((todo)=>{
                return(
                    <ToDo
                    todo={todo}
                    key={todo.id}
                    toggleTask={handleToggle}
                    removeTask={removeTask}
                    />
                )
            })}
         </div>
    )
}
