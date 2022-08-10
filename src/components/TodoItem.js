import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteTodo, toggleTodo } from "../redux/actions/index";
import right_arrow from "../images/right-arrow.png"
import todos from "../redux/reducers/todos";
import { Link } from "react-router-dom";


const TodoItem = ({ id, text, completed,date,todos}) => {
  const dispatch = useDispatch();
  const changeBackground = (e, text) => {
    e.target.style.borderStyle = text;
  };

  const styled = {
    textDecoration: completed ? "line-through" : "none",
    backgroundColor: completed ? "#A9A9A9" : "#ffffff"
  };

  const handleDelete = () => {
    dispatch(deleteTodo(id));
  };

  const hanldeToggle = () => {
    dispatch(toggleTodo(id));
  };

  return (
    <li
      style={styled}
      className="list-group-item text-capitalize d-flex justify-content-between my-2">
      <h6>
        {date} <span>({todos?.length})</span>
      </h6>
      <Link to={`singleTodo/${id}`}>
        <img src={right_arrow}  alt="image" className="right_arrow"/>
      </Link>
     
    </li>
  );
};

export default TodoItem;
