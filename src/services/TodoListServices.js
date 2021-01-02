import Axios from 'axios';
import { DOMAIN_BE_TODO_LIST } from '../utils/constants/SysSettings';

class ToDoListServices {
    sgGetTaskArr = () => (
        Axios({
            method: 'GET',
            url: `${DOMAIN_BE_TODO_LIST}/ToDoList/GetAllTask`
        })
    );

    sgAddNewTask = (taskName) => (
        Axios({
            method: 'POST',
            url: `${DOMAIN_BE_TODO_LIST}/ToDoList/AddTask`,
            data: {taskName}
        })
    )

    sgDeleteTask = (taskName) => (
        Axios({
            method: 'DELETE',
            url: `${DOMAIN_BE_TODO_LIST}/ToDoList/deleteTask?taskName=${taskName}`
        })
    )

    sgMarkTaskDone = (taskName) => (
        Axios({
            method: 'PUT',
            url: `${DOMAIN_BE_TODO_LIST}/ToDoList/doneTask?taskName=${taskName}`
        })
    )

    sgMarkTaskToDo = (taskName) => (
        Axios({
            method: 'PUT',
            url: `${DOMAIN_BE_TODO_LIST}/ToDoList/rejectTask?taskName=${taskName}`
        })
    )
}

export const toDoListServices = new ToDoListServices();