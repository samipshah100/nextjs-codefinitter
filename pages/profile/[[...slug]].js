import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import {
  Box,
  Avatar,
  Divider,
  Paper,
  Typography,
  Button,
  CircularProgress,
} from '@material-ui/core'
import Layout from '@/components/Layout'
import FeedItem from '@/components/FeedItem'
import EventIcon from '@material-ui/icons/Event'
import { useRouter } from 'next/router'
import { apiPath } from '@/constants'
import useSWR from 'swr'

export default function ProfilePage() {
  const classes = useStyles()
  const router = useRouter()
  React.useEffect(() => {
    console.log('query ', router.query)
  }, [router])

  const { data } = useSWR(`${apiPath}/post`)
  console.log('🚀 ~ file: [[...slug]].js ~ line 17 ~ ProfilePage ~ data', data)

  return (
    <Layout>
      <Paper className={classes.root}>
        <div className={classes.profile}>
          {/* Avatar and button */}
          <div className={classes.header}>
            <div className={classes.avatarContainer}>
              <Avatar className={classes.avatar} src={''} alt={'a'} />
              <Typography className={classes.name} variant="h6">
                Samip Shah
              </Typography>
              <Typography className={classes.username} variant="body1">
                @samip
              </Typography>
            </div>
            <Button
              className={classes.editProfileButton}
              variant="contained"
              color="primary"
            >
              Edit Profile
            </Button>
          </div>

          {/* Tagline and metadata */}
          <div className={classes.metadata}>
            <Typography className={classes.tagline} variant="body2">
              I love finding solutions to new problems. My hobbies are yoga,
              mediation, traveling.
            </Typography>

            <div className={classes.joinedContainer}>
              <EventIcon />

              <Typography className={classes.joined} variant="body2">
                Joined December 2014
              </Typography>
            </div>
            <Typography className={classes.followers} variant="caption">
              <span className={classes.followersCount}>752</span> followers{' '}
              <span className={classes.followersCount}>205</span> following
            </Typography>
          </div>
        </div>

        <Box mt={2} mb={2}>
          <Divider />
          <Typography variant="h6" className={classes.postsLabel}>
            User Posts
          </Typography>
          <Divider />
        </Box>

        {/* user feed */}
        <div className={classes.feed}>
          {data ? (
            data.data.map((item) => <FeedItem item={item} key={item.id} />)
          ) : (
            <Box textAlign="center">
              <CircularProgress className={classes.loading} />
            </Box>
          )}
        </div>
      </Paper>
    </Layout>
  )
}

const useStyles = makeStyles((theme) => ({
  root: {
    marginBottom: 32,
  },
  profile: {
    padding: 16,
  },
  header: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  avatarContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },

  avatar: {
    height: 120,
    width: 120,
  },
  name: {
    marginTop: 4,
    // fontWeight: 'bold',
  },
  username: {
    color: theme.palette.text.secondary,
  },
  editProfileButton: {
    height: 40,
    // alignSelf: 'flex-end',
    // marginBottom: 12,
  },
  tagline: {
    marginTop: 16,
    color: theme.palette.text.primary,
  },
  joinedContainer: {
    marginTop: 16,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  joined: {
    marginLeft: 8,
    color: theme.palette.text.secondary,
  },
  followers: {
    marginTop: 32,
    color: theme.palette.text.secondary,
  },
  followersCount: {
    fontWeight: 'bold',
    fontSize: '0.9rem',
  },
  postsLabel: {
    paddingLeft: 16,
    marginBottom: 8,
    marginTop: 8,
  },
  loading: {
    height: 50,
    width: 50,
    color: theme.palette.primary.main,
  },
}))
