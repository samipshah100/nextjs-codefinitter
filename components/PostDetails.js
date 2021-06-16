import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Image from 'next/image'
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
import Link from 'next/link'
import { red } from '@material-ui/core/colors'
import FavoriteIcon from '@material-ui/icons/Favorite'
import ShareIcon from '@material-ui/icons/Share'
import MoreVertIcon from '@material-ui/icons/MoreVert'
import Skeleton from '@material-ui/lab/Skeleton'
import moment from 'moment'
export default function PostDetails({ item: { id, image, parent, postData } }) {
  const { avatar, createdAt, name } = parent
  const classes = useStyles()

  let date = moment(createdAt).format('MMMM Do YYYY, h:mm:ss a') // June 11th 2021, 9:45:28 am

  return (
    <>
      <Card className={classes.root}>
        <Link href={`/profile/${id}`}>
          <a>
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
              // action={
              //   <IconButton aria-label="settings">
              //     <MoreVertIcon />
              //   </IconButton>
              // }
              title={name}
              subheader={date}
            />
          </a>
        </Link>
        <CardMedia className={classes.media} image={image} title={name} />
        {/* <div
          style={{
            display: 'flex',
            width: '100%',
          }}
        >
          <Image
            src={image}
            height={'auto'}
            width={'auto'}
            // layout="fill"
            objectFit="contain"
          />
        </div> */}
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
      {/* <div style={{ display: 'flex', height: 500, width: 500 }}>
        <Image
          src={image}
          height={'auto'}
          width={'auto'}
          // layout="fill"
          // objectFit="contain"
        />
      </div> */}
      {/* <div
        style={{
          display: 'flex',
          // width: '100%',
        }}
      >
        <Image
          src={image}
          // height={'100%'}
          // width={'100%'}
          layout="fill"
          objectFit="fill"
        />
      </div> */}
    </>
  )
}

const useStyles = makeStyles((theme) => ({
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
