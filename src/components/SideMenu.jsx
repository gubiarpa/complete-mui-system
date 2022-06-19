import React from 'react'
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
    sideMenu: {
        display: 'flex',
        flexDirection: 'column',
        position: 'absolute',
        left: '0px',
        width: '320px',
        height: '100%',
        backgroundColor: '#253053'
    }
})

export const SideMenu = () => {
    const classes = useStyles();
    return (
        <div className={classes.sideMenu}>
            SideMenu
        </div>
    )
}