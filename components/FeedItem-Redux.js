import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import CardContent from '@material-ui/core/CardContent'
import CardActions from '@material-ui/core/CardActions'
import Avatar from '@material-ui/core/Avatar'
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'
import { red } from '@material-ui/core/colors'
import FavoriteIcon from '@material-ui/icons/Favorite'
import ShareIcon from '@material-ui/icons/Share'
import MoreVertIcon from '@material-ui/icons/MoreVert'
import { connect } from 'react-redux'
import { changeName } from '../redux/postSlice'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    maxWidth: 345,
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

function FeedItem({ name, changeName }) {
  const classes = useStyles()
  const [value, setValue] = useState('')
  const submit = () => {
    changeName(value)
  }
  const onChangeName = (event) => {
    setValue(event.target.value)
  }

  return (
    <>
      <Card className={classes.root}>
        <CardHeader
          avatar={
            <Avatar aria-label="recipe" className={classes.avatar}>
              R
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title="Shrimp and Chorizo Paella"
          subheader="September 14, 2016"
        />
        {/* <CardMedia
        className={classes.media}
        image="/static/images/cards/paella.jpg"
        title="Paella dish"
      /> */}
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            This impressive paella is a perfect party dish and a fun meal to
            cook together with your guests. Add 1 cup of frozen peas along with
            the mussels, if you like.
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

      <div>{`The current users name is ${name}`}</div>
      <input value={value} onChange={onChangeName} />
      <button onClick={submit}>Change Name</button>
    </>
  )
}

const mapStateToProps = (state) => ({
  name: state.post.myName,
})

const mapDispatchToProps = {
  changeName,
}

export default connect(mapStateToProps, mapDispatchToProps)(FeedItem)
