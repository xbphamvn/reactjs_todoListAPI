import React from 'react';
import AddTask from '../../components/AddTask';
import Header from '../../components/Header';
import TaskList from '../../components/TaskList';

export default function TodoList(props) {



    return (
        <div className="cont_principal">
            <div className="cont_centrar">
                <Header />
                <AddTask />
                <TaskList />
            </div>
        </div>

    )
}
