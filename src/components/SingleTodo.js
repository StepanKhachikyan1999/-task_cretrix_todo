import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { deleteTodo, toggleTodo } from '../redux/actions';

const SingleTodo = () => {
    let { id } = useParams();
    const { list } = useSelector(state => state.todos);

    const singleArr = list.filter(fill => fill.id == id)

    const dispatch = useDispatch();
    const changeBackground = (e, text) => {
        e.target.style.borderStyle = text;
    };

    // const styled = {
    //   textDecoration: completed ? "line-through" : "none",
    //   backgroundColor: completed ? "#A9A9A9" : "#ffffff"
    // };

    console.log(singleArr,'oop777');
    const handleDelete = () => {
        dispatch(deleteTodo(id));
    };

    const hanldeToggle = () => {
        dispatch(toggleTodo(id));
    };




    return (
        <div className='align-center'>

            {
                list?.todos.map((i) => {
                    return (
                        <div>
                            <h5>{i.text}</h5>
                            <div className="todo-icon">
                                <span className="mx-2 text-success">
                                    <i
                                        className="fas fa-check-circle"
                                        onMouseEnter={e => changeBackground(e, "groove")}
                                        onMouseLeave={e => changeBackground(e, "none")}
                                        onClick={hanldeToggle}
                                    />
                                </span>
                                <span className="mx-2 text-danger">
                                    <i
                                        className="fas fa-trash"
                                        onMouseEnter={e => changeBackground(e, "groove")}
                                        onMouseLeave={e => changeBackground(e, "none")}
                                        onClick={handleDelete}
                                    />
                                </span>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}


export default SingleTodo