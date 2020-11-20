import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { Box } from '@material-ui/core';
import clsx from 'clsx';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        logo: {
            fontSize: theme.typography.h4.fontSize,
            fontFamily: "Bebas Neue"
        },
        logoPrimary: {
            color: "#FFFFFF"
        },
        logoSecondary: {
            color: theme.palette.secondary.main
        }
    }),
);

export default function Logo() {
    const classes = useStyles();

    return (
        <Box>
            <span className={clsx(classes.logo, classes.logoPrimary)}>FUCTUOSO</span>
            <span className={clsx(classes.logo, classes.logoSecondary)}>.DEV</span>
        </Box>
    );
}