import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
    palette: {
        primary: {
            main: "#2b2a4a"
        },
        secondary: {
            main: "#93E327"
        }
    },
    typography: {
        fontFamily: ["Montserrat", "Roboto"].join(','),
        h1: { fontSize: "2.5rem", fontWeight: 400 },
        h2: { fontSize: "1.5rem", fontWeight: 400 },
        body1: {
            fontSize: "1.25rem",
            fontWeight: 300,
            lineHeight: "150%",
            textIndent: "2rem",
            marginBottom: "1rem"
        }
    }
});

export default theme