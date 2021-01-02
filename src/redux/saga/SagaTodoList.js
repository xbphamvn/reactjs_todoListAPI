import { call, delay, put, takeLatest } from 'redux-saga/effects';
import { toDoListServices } from '../../services/TodoListServices';
import { STATUS_CODE } from '../../utils/constants/SysSettings';
import { actDisplayLoading, actGetTaskArr, actHideLoading, sgaGetTaskArr } from '../actions/TodoListActions';
import { SGA_ADD_NEW_TASK, SGA_DELETE_TASK, SGA_GET_TASK_ARR, SGA_MARK_TASK_DONE, SGA_MARK_TASK_TO_DO } from '../constants/TodoListConsts';

function* getTaskArr() {
    yield put(actDisplayLoading());
    try {
        const { data, status } = yield call(toDoListServices.sgGetTaskArr);
        if (status === STATUS_CODE.SUCCESS) {
            yield put(actGetTaskArr(data));
        }
    } catch (err) {
        console.log(err);
    }
    yield delay(1000);
    yield put(actHideLoading());
}

export function* listenGetTaskArr() {
    yield takeLatest(SGA_GET_TASK_ARR, getTaskArr);
}

function* addNewTask(action) {
    try {
        const {data, status} = yield call(() => (toDoListServices.sgAddNewTask(action.taskName)));
        if (status === STATUS_CODE.SUCCESS) {
            console.log(data);
            alert(`${data.taskName} added to list!`);
            yield put(sgaGetTaskArr());
        } else {
        }
    } catch (error) {
        console.log(error);
        alert('Something wrong, taskName already exited!');
    }
}

export function* listenAddNewTask() {
    yield takeLatest(SGA_ADD_NEW_TASK, addNewTask);
}

//delete task
function* deleteTask(action) {
    try {
        const {data, status} = yield call(() => (toDoListServices.sgDeleteTask(action.taskName)));
        if (status === STATUS_CODE.SUCCESS) {
            alert(data);
            yield put(sgaGetTaskArr());
        }
    } catch (error) {
        console.log(error);
    }
}

export function* listenDeleteTask() {
    yield takeLatest(SGA_DELETE_TASK, deleteTask);
}

//mark task done
function* markTaskDone(action) {
    try {
        const {data, status} = yield call(() =>(toDoListServices.sgMarkTaskDone(action.taskName)));
        if (status === STATUS_CODE.SUCCESS) {
            alert(data);
            yield put(sgaGetTaskArr());
        }
    } catch(err) {
        console.log(err);
    }
}

export function* listenMarkTaskDone() {
    yield takeLatest(SGA_MARK_TASK_DONE, markTaskDone);
}

//mark task to do
function* markTaskToDo(action) {
    try {
        const {data, status} = yield call(() => (toDoListServices.sgMarkTaskToDo(action.taskName)));
        if(status === STATUS_CODE.SUCCESS) {
            alert(data);
            yield put(sgaGetTaskArr());
        }
    } catch (err) {
        console.log(err);
    }
}

export function* listenMarkTaskToDo() {
    yield takeLatest(SGA_MARK_TASK_TO_DO, markTaskToDo);
}