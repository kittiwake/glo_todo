// import './to-do-list-item.scss';
import { ToDo } from '../../../models/todo-item';
import './to-do-list-item.scss';

export const ToDoListItem = (props: { todoItem: ToDo, updateTodo: Function, deleteTodo: Function}) => {
    return (
        <li className="todo-list-item__wrapper">
            <span>{ props.todoItem.text }</span>
            <div className="todo-list-item__buttons">
                <button className="btn-trash" onClick={()=> props.deleteTodo(props.todoItem)}></button>
                <button 
                    className={ props.todoItem.isDone ? "btn-check" : "btn-uncheck" }
                    onClick={() => props.updateTodo(props.todoItem)}
                ></button>
            </div>
        </li>

    );
};
