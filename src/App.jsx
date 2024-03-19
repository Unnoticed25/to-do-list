import './App.css'
import {Box, Button, Container, createTheme, Input, TextField} from "@mui/material";
import {observer} from "mobx-react-lite";
import TodoList from "./components/todoList.jsx";
import task from "./store/taskList.js";
import {useState} from "react";

const App = observer(() => {
    const [value, setValue] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if(value != '') {
            setValue('')
            task.addNewTask({title: value, completed: 0});
        }
    }

    return (<>
        <Container sx={{height: "100vh"}}>
            <Box style={{
                padding: "20px",
                margin: "auto",
                borderRadius: "16px",
                backgroundColor: "Indigo",
                maxWidth: "800px",
                marginTop: "60px"
            }}>
                <h1 style={{fontFamily: "Roboto", color: "white", textAlign: "center"}}>Что делаем сегодня?</h1>
                <Box className={''}>
                    <form noValidate autoComplete="off" className={"todo-form"} onSubmit={handleSubmit}>
                        <input type={'text'} className={'todo-input'} placeholder={'Введите таск'} value={value} onChange={(e) => setValue(e.target.value)}/>
                        <Button type={"submit"} className={'todo-btn'} color={'primary'} variant="outlined" disabled={value === ''}
                                sx={{ml: 2}}>Добавить</Button>
                    </form>
                </Box>
            </Box>
            <Box className={'tasks-container'}>
                <TodoList/>
            </Box>
        </Container>
    </>)
})

export default App
