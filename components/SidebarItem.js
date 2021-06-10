import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Hidden, ButtonBase } from '@material-ui/core'

export default function SidebarItem({ item: { icon, label } }) {
  const classes = useStyles()
  return (
    <ButtonBase className={classes.root}>
      <div className={classes.icon}>{icon}</div>
      <Hidden xsDown>
        <div className={classes.label}>{label}</div>
      </Hidden>
    </ButtonBase>
  )
}

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'row',
    marginBottom: 20,
    justifyContent: 'flex-start',
    padding: 5,
    margin: -5,
    borderRadius: 8,
    '&:hover': {
      backgroundColor: '#eee',
      color: theme.palette.primary.main,
    },
  },
  icon: {
    display: 'flex',
    marginLeft: 10,
    // color: '#ccc',
  },
  label: {
    display: 'flex',
    marginLeft: 10,
    // color: '#ccc',
  },
}))
