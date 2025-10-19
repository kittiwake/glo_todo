import './to-do-list.scss';
import { ToDoListItem } from "./to-do-list-item/to-do-list-item";

export const ToDoList = () => {
    return (
        <div className="todo-container">
            <ul className="todo-list failed">
                <ToDoListItem />
            </ul>
            <ul className="todo-list completed">
                <ToDoListItem />
            </ul>
        </div>
    );
};
