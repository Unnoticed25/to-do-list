import {useState} from 'react'
import {observer} from "mobx-react-lite";
import task from "../store/taskList.js";
import {Button, Typography} from "@mui/material";
import {remove} from "mobx";
import {Todo} from "./Todo";

const TodoList = observer(() => {


    return (
        <>
            {task.tasks.length != 0 ? (task.tasks.map(elm =>
                <div className={'task-space'} key={elm.id}>
                    <Todo data={{id: elm.id, completed: elm.completed, title: elm.title}}/>
                </div>
            )) : <p style={{color: "darkgray"}}>Нет активных задач</p>}
        </>
    )
})

export default TodoList
