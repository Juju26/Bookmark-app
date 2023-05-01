import React, { useState } from "react";

export const Todo =()=>{

    let [todos,setTodos]=useState([])


    const addTodo=(e)=>{
        e.preventDefault();
        let newTodo= e.target.elements.todo.value.trim();
        setTodos([...todos,newTodo])
        console.log(todos);
        
    }

    const deleteTodo=(deltodo)=>{
        console.log("del",deltodo);
        setTodos(todos.filter( (to) => to.todo !== deltodo))
    }

    return(
        <>
        <h1>Todos</h1>
        <form onSubmit={addTodo}>
            <input type="text" name="todo" placeholder="enter text" />
            <button type="submit">Add</button>
        </form>

        <br></br><br></br><br></br>
        <table>
            {todos.map((todosList,i)=>(  
                <tr key={i}>{todosList}
                <button type="submit" onClick={(e) => deleteTodo(todos.todo)}>delete</button>
                </tr>
            ))}
        </table>
        </>
    )
}