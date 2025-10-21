import './to-do-list.scss';
import { ToDoListItem } from "./to-do-list-item/to-do-list-item";
import { ToDo } from '../../models/todo-item';

export const ToDoList = (props: {todos: ToDo[], updateTodo: Function, deleteTodo: Function}) => {

    const checkedList = () => {
        return (props.todos
            .filter((item) => !item.isDone )
            .map((todoItem, idx) => {
                return (<ToDoListItem todoItem={todoItem} key={idx}  updateTodo={props.updateTodo} deleteTodo={props.deleteTodo}/>);
        })
    );
    };

        const unCheckedList = () => {
        return (props.todos
            .filter((item) => item.isDone )
            .map((todoItem, idx) => {
                return (<ToDoListItem todoItem={todoItem} key={idx}  updateTodo={props.updateTodo} deleteTodo={props.deleteTodo}/>);
        })
    );
    };

    return (
        <div className="todo-container">
            <ul className="todo-list failed">
                { checkedList() }
            </ul>
            <ul className="todo-list completed">
                { unCheckedList() }
            </ul>
        </div>
    );
};
