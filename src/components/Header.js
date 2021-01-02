import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { actDisplayAddTask } from '../redux/actions/TodoListActions';

export default function Header(props) {

    const {addStatus} = useSelector(state => state.TodoListReducer);

    const dispatch = useDispatch();

    return (
        <div className="cont_todo_list_top">
            <div className="cont_titulo_cont">
                <h3>THINGS TO DO</h3>
            </div>
            <div className={`cont_add_titulo_cont ${addStatus}`}>
                <span onClick={() => dispatch(actDisplayAddTask())}>
                    <i className="fal fa-plus" />
                </span>
            </div>
        </div>
    )
}
