import { Form } from "../components/Form/form";
import { Header } from "../components/Header/header";
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
