import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addToDo, deleteToDo } from "./store";


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
    };
    
    const onDelete = (e) => {
        const id = e.target.id;
        dispatch(deleteToDo(id));
    };

    return (
        <>
            <h1>To Do</h1>
            <form onSubmit={onSubmit}>
                <input type="text" value={text} onChange={onChange} />
                <button>Add</button>
            </form>
            <ul>
                {toDo.map((item) => (
                    <div key={item.id}>
                        <Link to={`/${item.text}`}>
                            <li>{item.text}</li>
                        </Link>
                        <button id={item.id} onClick={onDelete}>DEL</button>
                    </div>
                ))}
            </ul>
        </>
    )    
};

export default Home;