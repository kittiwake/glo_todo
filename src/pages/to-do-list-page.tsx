import { useState } from "react";
import { Form } from "../components/form/form";
import { Header } from "../components/header/header";
import { ToDoList } from "../components/to-do-list/to-do-list";
import { ToDo } from "../models/todo-item";

export const ToDoListPage = () => {
    const [todos, setTodos] = useState<ToDo[]>([]);
    
    const createTodo = (text: string) => {
        const newTodo: ToDo = {
            id: todos.length,
            text: text,
            isDone: false,
        };
        setTodos([...todos, newTodo])
    };

    const updateTodo = (todoItem: ToDo) => {
        const newTodos = todos.map((item) => {
            if(item.id === todoItem.id){
                item.isDone = !item.isDone;
            };
            return item;
        });
        setTodos(newTodos);
    };

    const deleteTodo = (todoItem: ToDo) => {
        const newTodos = todos.filter((item) => item.id !== todoItem.id);
        setTodos(newTodos);
    };

    return (
        <>
            <Header />
            <Form createTodo={createTodo} />
            <ToDoList todos={todos} updateTodo={updateTodo} deleteTodo={deleteTodo}/>
        </>
    );
};
