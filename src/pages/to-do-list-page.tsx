import { useState } from "react";
import { Form } from "../components/form/form";
import { Header } from "../components/header/header";
import { ToDoList } from "../components/to-do-list/to-do-list";
import { ToDo } from "../models/todo-item";
import { ToastContainer, toast } from 'react-toastify';

export const ToDoListPage = () => {
    const [todos, setTodos] = useState<ToDo[]>([]);

    const createTodo = (text: string) => {
        const newTodo: ToDo = {
            id: todos.length,
            text: text,
            isDone: false,
        };
        setTodos([...todos, newTodo]);
        toast("Добавлен!");
    };

    const updateTodo = (todoItem: ToDo) => {
        const newTodos = todos.map((item) => {
            if(item.id === todoItem.id){
                item.isDone = !item.isDone;
            };
            return item;
        });
        setTodos(newTodos);
        toast(todoItem.isDone ? 'Задача выполнена!' : 'Выполнение отменено!');
    };

    const deleteTodo = (todoItem: ToDo) => {
        const newTodos = todos.filter((item) => item.id !== todoItem.id);
        setTodos(newTodos);
        toast("Задача удалена!");
    };

    return (
        <>
            <Header />
            <Form createTodo={createTodo} />
            <ToDoList todos={todos} updateTodo={updateTodo} deleteTodo={deleteTodo}/>
            <ToastContainer position="bottom-right"/>
        </>
    );
};
