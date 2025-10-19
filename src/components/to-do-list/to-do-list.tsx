export const ToDoList = () => {
    return (
        <div className="todo-container">
            <ul className="todo-list failed">
                <li className="todo-list-item__wrapper">
                    <span>Первая задача</span>
                    <div className="todo-list-item__buttons">
                        <button className="btn-trash"></button>
                        <button className="btn-check"></button>
                    </div>
                </li>
            </ul>
            <ul className="todo-list completed">
                <li className="todo-list-item__wrapper">
                    <span>Вторая задача</span>
                    <div className="todo-list-item__buttons">
                        <button className="btn-trash"></button>
                        <button className="btn-uncheck"></button>
                    </div>
                </li>
            </ul>
        </div>
    );
};
