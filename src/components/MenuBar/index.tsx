import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { AppBar, Box, Container, Toolbar } from '@material-ui/core';
import Logo from 'components/Logo';
import { SportsRugbySharp } from '@material-ui/icons';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            background: "transparent"
        },
        title: {
            fontFamily: "Bebas Neue"
        },
        filter: {
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: theme.palette.primary.dark,
            zIndex: -1,
            opacity: 0.8
        },
    }),
);

export default function MenuBar() {
    const classes = useStyles();

    return (
        <AppBar position="fixed" className={classes.root}>
            <Box className={classes.filter} />
            <Container>
                <Toolbar>
                    <Box display="flex" flexGrow={1}>
                        <Logo />
                    </Box>
                </Toolbar>
            </Container>
        </AppBar >
    );
}