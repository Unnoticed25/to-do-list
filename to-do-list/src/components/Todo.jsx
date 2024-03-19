import task from "../store/taskList.js";
import {Box, Button, IconButton, Typography} from "@mui/material";
import {useState} from "react";
import WorkspacesIcon from '@mui/icons-material/Workspaces';

export function Todo(props) {

    const [editable, setEditable] = useState(false);
    const [text, setText] = useState('');
    const [showErr, setShowErr] = useState(false);

    const EditTitle = (e) => {
        e.preventDefault();
        if(text != ''){
            setShowErr(false)
            setEditable(false);
            task.editTask({eid: e.target.name, text: text});
            setText('');

        } else {
            e.target.children[0].focus();
            setShowErr(true);
        }
    }

    const ShowEditTitle = (e) => {
        return props.data.completed ? '' : setEditable(true);
    }

    const EditHandler = (e) => {
        setText(e.target.value);
        if (e.target.value != ''){
            setShowErr(false);
        }
    }

    return (
        <>
            <input type="checkbox" checked={props.data.completed} onChange={() => task.signAsDoneTask(props.data.id)} title={'Выполнить Таск'}
                   disabled={editable}/>
            <Typography className={editable === false ? 'task__title' : 'task__title hidden'}
                        id={props.data.id}
                        sx={{overflow: "hidden", maxWidth: 600, textOverflow: "ellipsis", cursor: "pointer"}}
                        name={props.data.id}
                        onDoubleClick={ShowEditTitle}
                        title={'Нажмите дважды чтобы изменить'}>{props.data.title}</Typography>
            <form className={editable ? '' : 'hidden'} name={props.data.id} onSubmit={EditTitle}>
                <div className={'input-wrapper'}>
                    <input type={"text"}
                           className={showErr ? 'todo-input error-blur' : 'todo-input'}
                           style={{width: "auto"}}
                           onChange={EditHandler} value={text}/>
                    <div className={showErr ? 'error-msg' : 'error-msg hidden'}>Поле не может быть пустым!</div>
                </div>
                <Button type={"submit"} className={'todo-btn'} color={'primary'} variant="outlined"
                        sx={{ml: 2}}>Изменить</Button>
            </form>
            <Box className={'task-space__btns'}>
                {/*<IconButton sx={{mr: 2, color: 'white'}}><WorkspacesIcon /></IconButton>*/}
                <button className={'del-btn'} onClick={() => task.removeTask(props.data.id)} disabled={props.data.completed || editable} title={'Удалить Таск'}></button>
            </Box>
        </>
    )
}