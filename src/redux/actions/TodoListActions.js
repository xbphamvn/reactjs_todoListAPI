import { ACT_DISPLAY_ADD_TASK, ACT_GET_TASK_ARR, DISPLAY_LOADING, HIDE_LOADING, SGA_ADD_NEW_TASK, SGA_DELETE_TASK, SGA_GET_TASK_ARR, SGA_MARK_TASK_DONE, SGA_MARK_TASK_TO_DO } from "../constants/TodoListConsts";


export const actDisplayAddTask = () => ({
    type: ACT_DISPLAY_ADD_TASK
});

export const actGetTaskArr = (taskArr) => ({
    type: ACT_GET_TASK_ARR,
    taskArr
});

// export const actSgaGetTaskArr = () => ({
//     type: SGA_GET_TASK_ARR
// });

export const actDisplayLoading = () => ({
    type: DISPLAY_LOADING
})

export const actHideLoading = () => ({
    type: HIDE_LOADING
})

//Saga actions
export const sgaGetTaskArr = () => ({
    type: SGA_GET_TASK_ARR
});

export const sgaAddNewTask = (taskName) => ({
    type: SGA_ADD_NEW_TASK,
    taskName
});

export const sgaDeleteTask = (taskName) => ({
    type: SGA_DELETE_TASK,
    taskName
})

export const sgaMarkTaskDone = (taskName) => ({
    type: SGA_MARK_TASK_DONE,
    taskName
})

export const sgaMarkTaskToDo = (taskName) => ({
    type: SGA_MARK_TASK_TO_DO,
    taskName
})
