import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { deleteToDo } from "./store";

function Detail() {
    const idd = useParams().id;
    const todo = useSelector((state) => state);
    const detail = todo.find((item) => item.text === idd);
    
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const onDelete = () => {
        dispatch(deleteToDo(detail.id));
        navigate("/")
    }


    return (
        <div>
            <h1>{detail?.text}</h1>
            <h3>created At: {detail?.id}</h3>
            <button onClick={onDelete}>DEL</button>
        </div>
    );
};

export default Detail;