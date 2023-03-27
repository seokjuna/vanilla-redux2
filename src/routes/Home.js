import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToDo } from "./store";


function Home() {
    const [text, setText] = useState("");
    const toDo = useSelector((state) => state);
    const dispatch = useDispatch();
    
    const onChange = (e) => {
        setText(e.target.value);
    };
    
    const onSubmit = (e) => {
        e.preventDefault();
        dispatch(addToDo(text));
        setText("");
    }
    return (
        <>
            <h1>To Do</h1>
            <form onSubmit={onSubmit}>
                <input type="text" value={text} onChange={onChange} />
                <button>Add</button>
            </form>
            <ul>{JSON.stringify(toDo)}</ul>
        </>
    )    
};

export default Home;