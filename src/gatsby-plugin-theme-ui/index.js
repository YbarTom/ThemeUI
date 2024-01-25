// theme.js
const theme = {
    config: {
        initialColorModeName: 'light',
    },
    colors: {
        modes: {
            dark: {
                text: '#000000',
                background: '#fff5e1',
                primary: '#CCA37F',
                secondary: '#ffffff',
                buttonBackground: '#008080', // Add a new property for button background color in dark mode
            },
            light: {
                text: '#ffffff',
                background: '#5b5b5b',
                primary: '#000000',
                secondary: '#bcbcbc',
                buttonBackground: '#4CAF50', // Add a new property for button background color in light mode
            },
        },
    },
    buttons: {
        primary: {
            backgroundColor: 'primary',
            color: 'text',
            '&:hover': {
                backgroundColor: 'secondary',
            },
        },
        custom: {
            backgroundColor: 'buttonBackground',
            color: 'text',
            '&:hover': {
                backgroundColor: 'primary',
            },
        }
    },
};

export default theme;