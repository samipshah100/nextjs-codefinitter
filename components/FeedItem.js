import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import {
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Avatar,
  IconButton,
  Typography,
  Paper,
} from '@material-ui/core'
import { red } from '@material-ui/core/colors'
import FavoriteIcon from '@material-ui/icons/Favorite'
import ShareIcon from '@material-ui/icons/Share'
import MoreVertIcon from '@material-ui/icons/MoreVert'
import Link from 'next/link'
import moment from 'moment'

export default function FeedItem({ item }) {
  const classes = useStyles()
  const { avatar, createdAt, name, text, id: postId } = item
  console.log({ item })

  let date = moment(createdAt).format('MMMM Do YYYY, h:mm:ss a') // June 11th 2021, 9:45:28 am

  return (
    <Paper className={classes.root}>
      <Link
        href={`/details/${postId}`}
        style={{ display: 'flex', flexDirection: 'column' }}
      >
        <a style={{ display: 'flex', flexDirection: 'column' }}>
          <CardHeader
            avatar={
              <Avatar
                aria-label="recipe"
                src={avatar}
                className={classes.avatar}
              >
                {name}
              </Avatar>
            }
            action={
              <IconButton aria-label="settings">
                <MoreVertIcon />
              </IconButton>
            }
            title={name}
            subheader={date}
          />
          {/* <CardMedia
        className={classes.media}
        image="/static/images/cards/paella.jpg"
        title="Paella dish"
      /> */}
          <CardContent>
            <Typography variant="body2" color="textSecondary" component="p">
              {text}
            </Typography>
          </CardContent>
          <CardActions disableSpacing>
            <IconButton aria-label="add to favorites">
              <FavoriteIcon />
            </IconButton>
            <IconButton aria-label="share">
              <ShareIcon />
            </IconButton>
          </CardActions>
        </a>
      </Link>
    </Paper>
  )
}

const useStyles = makeStyles((theme) => ({
  root: {
    // display: 'flex',
    // flexDirection: 'column',
    // maxWidth: 600,
    // [theme.breakpoints.down('md')]: {
    //   width: 450,
    //   marginRight: 20,
    // },
    // [theme.breakpoints.up('lg')]: {
    //   width: 600,
    // },
    // [theme.breakpoints.down('sm')]: {
    //   width: 'auto',
    // },
  },
  media: {
    display: 'flex',
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  avatar: {
    display: 'flex',
    backgroundColor: red[500],
  },
}))
