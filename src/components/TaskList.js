import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { sgaDeleteTask, sgaGetTaskArr, sgaMarkTaskDone, sgaMarkTaskToDo } from '../redux/actions/TodoListActions';

export default function TaskList(props) {

    const { taskArrApi } = useSelector(state => state.TodoListReducer);

    const dispatch = useDispatch();

    const categoryIndex = (index) => {
        let value = null;
        index <= 3 ? value = index + 1 : value = 4;
        return value;
    }

    const renderToDoTasks = () => (
        taskArrApi.filter(item => !item.status).map((item, index) => ((
            <li className={`list_catergory0${categoryIndex(index)}`} key={index}>
                <div className="col_md_1_list">
                    <p>{`TYPE_${categoryIndex(index)}`}</p>
                </div>
                <div className="col_md_2_list">
                    <h4>{item.taskName}</h4>
                    <p>Waiting for Backend...</p>
                </div>
                <div className="col_md_3_list">
                    <div className="cont_btns_options">
                        <i className="material-icons" onClick={() => { markTaskDone(item.taskName) }}>&#xE5CA;</i>
                        <i className="material-icons" onClick={() => { deleteTask(item.taskName) }}>delete_forever</i>
                    </div>
                </div>
            </li>
        )))
    )

    const renderDoneTasks = () => (
        taskArrApi.filter(item => item.status).map((item, index) => ((
            <li className={`list_catergory0${categoryIndex(index)}`} key={index}>
                <div className="col_md_1_list">
                    <p>{`TYPE_${categoryIndex(index)}`}</p>
                </div>
                <div className="col_md_2_list">
                    <h4>{item.taskName}</h4>
                    <p>Waiting for Backend...</p>
                </div>
                <div className="col_md_3_list">
                    <div className="cont_btns_options">
                        <i className="material-icons" onClick={() => { markTaskToDo(item.taskName) }}>undo</i>
                        <i className="material-icons" onClick={() => { deleteTask(item.taskName) }}>delete_forever</i>
                    </div>
                </div>
            </li>
        )))
    );

    useEffect(() => {
        dispatch(sgaGetTaskArr());
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const deleteTask = (taskName) => {
        dispatch(sgaDeleteTask(taskName));
    }

    const markTaskDone = (taskName) => {
        dispatch(sgaMarkTaskDone(taskName));
    }

    const markTaskToDo = (taskName) => {
        dispatch(sgaMarkTaskToDo(taskName));
    }

    return (
        <>
            <div className="cont_princ_lists">
                <h3 className="list_title">Todo Task</h3>
                <ul>
                    {renderToDoTasks()}
                </ul>
            </div>
            <div className="cont_princ_lists done_tasks">
                <h3 className="list_title">Done Task</h3>
                <ul>
                    {renderDoneTasks()}
                </ul>
            </div>
        </>
    )
}
