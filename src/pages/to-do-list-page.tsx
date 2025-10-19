import { Form } from "../components/form/form";
import { Header } from "../components/header/header";
import { ToDoList } from "../components/to-do-list/to-do-list";

export const ToDoListPage = () => {
    return (
        <>
            <Header />
            <Form />
            <ToDoList />
        </>
    );
};
