import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { AppBar, Box, IconButton } from '@material-ui/core';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            top: 'auto',
            bottom: 0,
            backgroundColor: "#353535"
        }
    }),
);

export default function FooterBar() {
    const classes = useStyles();

    return (
        <AppBar position="fixed" className={classes.root}>
            <Box display="flex" justifyContent="center" m={1} p={1}>
                <Box p={1}>
                    <IconButton onClick={() => { window.open("https://www.linkedin.com/in/victorfructuoso") }}>
                        <LinkedInIcon color="secondary" fontSize="large" />
                    </IconButton>
                    <IconButton onClick={() => { window.open("https://www.github.com/fructuoso") }}>
                        <GitHubIcon color="secondary" fontSize="large" />
                    </IconButton>
                    <IconButton onClick={() => { window.open("https://www.instagram.com/victorfructuoso/") }}>
                        <InstagramIcon color="secondary" fontSize="large" />
                    </IconButton>
                </Box>
            </Box>
        </AppBar>
    );
}