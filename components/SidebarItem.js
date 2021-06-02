import React from 'react'
import { makeStyles } from '@material-ui/core/styles'

export default function SidebarItem({ item: { icon, label } }) {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <div className={classes.icon}>{icon}</div>
      <div className={classes.label}>{label}</div>
    </div>
  )
}

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 20,
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
