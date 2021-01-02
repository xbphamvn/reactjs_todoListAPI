import {all} from 'redux-saga/effects';
import * as SagaTodoList from './SagaTodoList';

export default function* rootSaga() {
    yield all([
        SagaTodoList.listenGetTaskArr(),
        SagaTodoList.listenAddNewTask(),
        SagaTodoList.listenMarkTaskDone(),
        SagaTodoList.listenMarkTaskToDo(),
        SagaTodoList.listenDeleteTask()
    ])
}