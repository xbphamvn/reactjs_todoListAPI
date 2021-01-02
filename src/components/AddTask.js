import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { sgaAddNewTask } from '../redux/actions/TodoListActions';

export default function AddTask(props) {

    const { addStatus } = useSelector(state => state.TodoListReducer);

    const dispatch = useDispatch();

    const [state, setState] = useState({
        fields: {
            taskName: ''
        },
        errors: {
            taskName: ''
        }
    });

    const handleChange = (e) => {
        const { name, value } = e.currentTarget;
        if (value.trim() === '') {
            setState({ ...state, errors: { ...state.errors, [name]: '*' + name + ' is invalid!' } });
        } else {
            setState({ ...state, fields: { ...state.fields, [name]: value }, errors: { ...state.errors, [name]: '' } });
        }
    }

    const addNewTask = () => {
        if (state.errors.taskName !== '' || state.fields.taskName.trim() === '') {
            alert('Task name is invalid!');
            return;
        }
        dispatch(sgaAddNewTask(state.fields.taskName));
    }

    return (
        <form onSubmit={addNewTask}>
            <div className={`cont_crear_new ${addStatus}`}>
                <table className="table">
                    <tbody>
                        <tr>
                            <th>Task name</th>
                            <th>Categroy</th>
                        </tr>
                        <tr>
                            <td>
                                <input type="text" className="input_title_desc" name="taskName" onChange={handleChange} />
                                <span>{state.errors.taskName}</span>
                            </td>
                            <td>
                                <select name="category" id="action_select" disabled>
                                    <option value="TYPE_1">TYPE_1</option>
                                    <option value="TYPE_2">TYPE_2</option>
                                    <option value="TYPE_3">TYPE_3</option>
                                    <option value="TYPE_4">TYPE_4</option>
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <th className="titl_description">Description</th>
                        </tr>
                        <tr>
                            <td colSpan={3}>
                                <textarea type="text" className="textarea_description" placeholder="Waiting for Backend func..." disabled />
                            </td>
                        </tr>
                        <tr>
                            <td colSpan={3}>
                                <button className="btn_add_fin" type="submit" onSubmit={addNewTask}>ADD</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </form>
    )
}
