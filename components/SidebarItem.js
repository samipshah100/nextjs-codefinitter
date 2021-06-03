import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Hidden from '@material-ui/core/Hidden'

export default function SidebarItem({ item: { icon, label } }) {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <div className={classes.icon}>{icon}</div>
      <Hidden xsDown>
        <div className={classes.label}>{label}</div>
      </Hidden>
    </div>
  )
}

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'row',
    marginBottom: 20,
  },
  icon: {
    display: 'flex',
    marginLeft: 10,
  },
  label: {
    display: 'flex',
    marginLeft: 10,
  },
}))
