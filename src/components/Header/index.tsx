import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { Avatar, Box, Typography } from '@material-ui/core';
import avatar from 'static/img/avatar.jpg';
import background from 'static/img/header-background.jpg';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            paddingTop: "calc(5rem + 64px)",
            paddingBottom: "5rem",
            backgroundColor: theme.palette.primary.main,
            backgroundImage: `url(${background})`,
            backgroundSize: "50rem",
            filter: "opacity(1)",
            color: "#EEEEEE"
        },
        filter: {
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: theme.palette.primary.main,
            opacity: 0.7,
            zIndex: -1
        },
        avatar: {
            height: "15rem",
            width: "15rem",
            borderWidth: theme.spacing(1),
            borderColor: theme.palette.primary.light,
            borderStyle: "solid",
        },
        title: {
            fontSize: "2rem",
            fontFamily: "Goldman"
        },
        subTitle: {
            fontSize: "1.5rem",
            fontFamily: "Goldman"
        }
    }),
);

export default function Header() {
    const classes = useStyles();
    return (
        <Box className={classes.root}>
            <Box className={classes.filter} />
            <Box display="flex" flexDirection="column">
                <Box flex="row" textAlign="center">
                    <Box display="flex" justifyContent="center">
                        <Avatar src={avatar} className={classes.avatar}></Avatar>
                    </Box>
                </Box>
                <Box flex="row" textAlign="center">
                    <span className={classes.title}>Fructuoso</span>
                </Box>
                <Box flex="row" textAlign="center">
                    <span className={classes.subTitle}>Manager | Tech Arch | Software Engineer</span>
                </Box>
            </Box>
        </Box >
    );
}