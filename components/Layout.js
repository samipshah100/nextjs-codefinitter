import React from 'react'
import Navbar from '@/components/Navbar'
import LeftSidebar from '@/components/LeftSidebar'
import RightSidebar from '@/components/RightSidebar'
import { makeStyles } from '@material-ui/core/styles'
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    display: 'flex',
    flexDirection: 'row',
    // width: '100%',
    marginTop: 30,
    justifyContent: 'center',
    // minWidth: 800,
  },
}))
export default function Layout(props) {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Navbar />
      <div className={classes.content}>
        <LeftSidebar />
        {props.children}
        <RightSidebar />
      </div>
    </div>
  )
}
