import React from 'react'
import Searchbar from '@/components/Searchbar'
import { makeStyles } from '@material-ui/core/styles'
import { Divider, Hidden, Typography, Paper } from '@material-ui/core'
import clsx from 'clsx'

export default function RightSidebar() {
  const classes = useStyles()
  return (
    <Hidden smDown>
      <div className={classes.root}>
        <Searchbar />
        <Paper className={classes.content}>
          <Typography variant="h6">What's New</Typography>

          {/* First news */}
          <div className={classes.item}>
            <Typography className={classes.caption}>
              Trending in India
            </Typography>
            <Typography variant="subtitle1">
              Watch this next js tutorial!
            </Typography>
            <Typography className={clsx(classes.endOfElement, classes.caption)}>
              10.8K Likes
            </Typography>
          </div>

          <Divider />
          {/* Second news */}
          <div className={classes.item}>
            <Typography className={classes.caption}>
              Trending in India
            </Typography>
            <Typography variant="subtitle1">
              This just in: Follow CODEFINITY!
            </Typography>
            <Typography className={clsx(classes.endOfElement, classes.caption)}>
              108K Likes
            </Typography>
          </div>
        </Paper>
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
  content: {
    display: 'flex',
    flexDirection: 'column',
    marginTop: 30,
    borderRadius: 10,
    padding: 20,
  },
  item: {
    marginTop: 15,
  },

  caption: {
    display: 'flex',
    color: 'grey',
    fontSize: 10,
  },
  endOfElement: {
    marginBottom: 15,
  },
}))
