import React from "react";
import './Todo.css';

import {useState, useEffect} from "react";
import TodoItem from "../components/TodoItem";

const Todo = () => {

    const [todos, setTodos] = useState([])
    const [newTodo, setNewTodo] = useState("")

    return ( 
        <div className="todo">
            <h1>Todos</h1>

            <div className="todoList">

            {
                todos.map((todo, index) => (
                    <TodoItem text={todo} />
                ))
            }

          

            <div className="newTodoWrapper">
            <input className="newTodo" onChange={(e) => setNewTodo(e.target.value)} type="text" placeholder="Add new Todo"></input>
            <button className="addButton" onClick={() => setTodos([...todos, newTodo])}>Add</button>
            </div>

            </div>

        </div>
    )
}

export default Todo;