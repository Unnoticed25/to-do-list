import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {createTheme, ThemeProvider} from "@mui/material";

const themes = createTheme({
    palette: {
        primary: {
            main: "#ffffff"
        },
    }
})

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <ThemeProvider theme={themes}>
            <App/>
        </ThemeProvider>
    </React.StrictMode>,
)
