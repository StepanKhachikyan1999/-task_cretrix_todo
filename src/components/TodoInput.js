import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";
import { addTodo } from "../redux/actions/index";

const TodoInput = () => {
    const [text, setText] = useState("");
    const [date, setDate] = useState(moment().format("YYYY-MM-DD"));
    const todos = useSelector((state) => state.todos);

    const dispatch = useDispatch();

    const handleSubmit = (event) => {
        if (text !== "" && date !== "") {
            dispatch(addTodo(text, date));
            setText("");
        } else {
            alert("empty text");
        }
        event.preventDefault();
    };

    const onChangeDate = ({ target }) => {
        const newDate = moment(target.value.timeStamp).format("YYYY-MM-DD");
        setDate(newDate);
        console.log(newDate);
    };

    return (
        <div className="card card-body my-3">
            <h2>To do List</h2>
            <h6>new Task</h6>
            <form onSubmit={handleSubmit}>
                <div className="input-group">
                    <div className="input-group-prepend">
                        <div className="input-group-text bg-primary text-white my_input">
                            <i className="fas fa-book" />
                        </div>
                    </div>
                    <input
                        type="text"
                        className="form-control text-capitalize"
                        placeholder="Type here"
                        name="todo"
                        value={text}
                        onChange={(event) => setText(event.target.value)}
                    />
                    <input
                        type="date"
                        value={date}
                        min={new Date().toISOString().slice(0, -14)}
                        onChange={(event) => setDate(event.target.value)}
                    />
                </div>
                <button
                    className="btn btn-block btn-primary mt-3"
                    onClick={handleSubmit}
                >
                    add Task
                </button>
            </form>
        </div>
    );
};

export default TodoInput;
