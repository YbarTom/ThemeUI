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
                buttonBackground: '#008080',
            },
            light: {
                text: '#ffffff',
                background: '#5b5b5b',
                primary: '#000000',
                secondary: '#bcbcbc',
                buttonBackground: '#008080',
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
    styles: {
        myCustomStyle: {
            border: '2px solid',
            borderColor: 'buttonBackground',
            borderRadius: 4,
            padding: 3,
        },
    },
    text: {
        myCustomText: {
            fontSize: 18,
            fontWeight: 'bold',
            color: 'buttonBackground',
        },
    },
};

export default theme;