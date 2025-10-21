import { useState } from 'react';
import './form.scss';

export const Form = (props: {createTodo: Function}) => {
    const [text, setText] = useState<string>('')
    
    const submitHandle = () => {
        if (text){
            props.createTodo(text);
            setText('');
        };
    };
    return (
        <div className="form-wrapper">
            <form action="#" onSubmit={submitHandle}>
                <label>
                    <input type="text" value={text} onChange={(e) => {setText(e.target.value)}}/>
                    <button></button>
                </label>
            </form>
        </div>
    );
};
