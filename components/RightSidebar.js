import React from 'react'
import Searchbar from '@/components/Searchbar'
import { makeStyles } from '@material-ui/core/styles'
import Hidden from '@material-ui/core/Hidden'

export default function RightSidebar() {
  const classes = useStyles()
  return (
    <Hidden smDown>
      <div className={classes.root}>
        <Searchbar />
      </div>
    </Hidden>
  )
}
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    marginRight: 50,
    marginLeft: 20,
    maxWidth: 250,
    minWidth: 180,
  },
}))
