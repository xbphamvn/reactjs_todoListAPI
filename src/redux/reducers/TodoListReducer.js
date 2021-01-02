import { ACT_DISPLAY_ADD_TASK, ACT_GET_TASK_ARR } from "../constants/TodoListConsts";

const initialState = {
    addStatus: 'active',
    taskArrApi: [],
    inputValue: {
        fields: {
            taskName: ''
        },
        errors: {
            taskName: ''
        }
    }
}

export const TodoListReducer = (state = initialState, action) => {
    switch (action.type) {

    case ACT_DISPLAY_ADD_TASK:
        state.addStatus === 'active' ? state = {...state, addStatus: ''} : state = {...state, addStatus: 'active'};
        return { ...state };

    case ACT_GET_TASK_ARR:
        return {...state, taskArrApi: action.taskArr};

    default:
        return { ...state };
    }
}
