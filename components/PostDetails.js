import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import {
  Card,
  CardMedia,
  CardHeader,
  CardContent,
  CardActions,
  Avatar,
  IconButton,
  Typography,
} from '@material-ui/core'
import { red } from '@material-ui/core/colors'
import FavoriteIcon from '@material-ui/icons/Favorite'
import ShareIcon from '@material-ui/icons/Share'
import MoreVertIcon from '@material-ui/icons/MoreVert'
import Skeleton from '@material-ui/lab/Skeleton'

export default function PostDetails({
  item: { avatar, createdAt, image, postData, name },
}) {
  const classes = useStyles()

  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" src={avatar} className={classes.avatar}>
            {name}
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={name}
        subheader={createdAt}
      />
      {<CardMedia className={classes.media} image={image} title={name} />}
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {postData}
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
    </Card>
  )
}

const useStyles = makeStyles((theme) => ({
  root: {
    //   display: 'flex',
    //   flexDirection: 'column',
    //   maxWidth: 600,
    //   [theme.breakpoints.down('md')]: {
    //     width: 450,
    //     marginRight: 20,
    //   },
    //   [theme.breakpoints.up('lg')]: {
    //     width: 600,
    //   },
    //   [theme.breakpoints.down('sm')]: {
    //     width: 'auto',
    //   },
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
