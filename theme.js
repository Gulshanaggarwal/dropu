import { createTheme } from "@mui/material";


const lightTheme = createTheme({
    palette: {
        primary: {
            main: '#ff3d00',
            light: '#ff7539',
            dark: '#c30000'
        },
        text: {
            primary: '#000'
        },
        background: {
            paper: '#fff',
        },

    }
})


const darkTheme = createTheme({

    palette: {
        primary: {
            main: '#ff3d00',
            light: '#ff7539',
            dark: '#c30000'
        },
        text: {
            primary: '#fff'
        },
        background: {
            paper: '#071a2f',

        },

    }

})

export { lightTheme, darkTheme }
