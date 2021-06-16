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
import moment from 'moment'

// Example for
// 1. [[...slug]]
// 2. client side rendering = useSwr
// 3. use memo
// 4. momentjs

export default function ProfilePage() {
  const classes = useStyles()
  const router = useRouter()

  const isEmptyObject = (obj) => {
    if (Object.keys(obj).length === 0 && obj.constructor === Object) return true
    else return false
  }

  const [isReady, setIsReady] = React.useState(false)
  const [userId, setUserId] = React.useState(1)

  React.useEffect(() => {
    // console.log('query ', router.query)
    if (router.query) {
      console.log('query ', router.query)
      if (isEmptyObject(router.query)) {
        console.log('in profile page')
        setIsReady(true)
        setUserId(1)
      } else if (Array.isArray(router.query?.slug)) {
        console.log('in dynamic route')
        const { slug } = router.query

        if (slug.length === 1) {
          console.log('one length slug', slug[0])
          setIsReady(true)
          setUserId(slug[0])
        } else {
          setIsReady(false)
          console.log('404')
          router.push('/404')
        }
      }
    }
  }, [router])

  // const { data } = useSWR(isReady ? `${apiPath}/post` : null)

  const { data: userData, error: userDataError } = useSWR(
    isReady ? `${apiPath}/user/${userId}` : null
  )

  console.log(
    '🚀 ~ file: [[...slug]].js ~ line 17 ~ ProfilePage ~ data',
    userData,
    { userDataError }
  )

  const memoizedDate = React.useMemo(
    () => moment(userData?.createdAt).format('MMMM Do YYYY'),
    [userData?.createdAt]
  )
  // handle error
  React.useEffect(() => {
    if (userDataError && userDataError.response.status === 404) {
      router.push('/')
    }
  }, [userDataError])

  return (
    <Layout>
      <Paper className={classes.root}>
        {userData ? (
          <div className={classes.profile}>
            {/* Avatar and button */}
            <div className={classes.header}>
              <div className={classes.avatarContainer}>
                <Avatar
                  className={classes.avatar}
                  src={userData.data.avatar}
                  alt={'a'}
                />
                <Typography className={classes.name} variant="h6">
                  {userData.data.name}
                </Typography>
                <Typography className={classes.username} variant="body1">
                  @{userData.data.username}
                </Typography>
              </div>
              {/* <Button
              className={classes.editProfileButton}
              variant="contained"
              color="primary"
            >
              Edit Profile
            </Button> */}
            </div>

            {/* Tagline and metadata */}
            <div className={classes.metadata}>
              <Typography className={classes.tagline} variant="body2">
                {userData.data.description}
              </Typography>

              <div className={classes.joinedContainer}>
                <EventIcon />
                <Typography className={classes.joined} variant="body2">
                  {memoizedDate}
                </Typography>
              </div>
              <Box mt={1}>
                <Typography className={classes.followers} variant="caption">
                  <span className={classes.followersCount}>
                    {userData.data.followerCount}
                  </span>{' '}
                  followers{'   '}
                  <span className={classes.followersCount}>
                    {userData.data.followedCount}
                  </span>{' '}
                  following
                </Typography>
              </Box>
            </div>
          </div>
        ) : (
          <Box display="flex" justifyContent="center">
            <CircularProgress className={classes.loading} />
          </Box>
        )}
        {/* <Box
          mt={2}
          // mb={2}
        >
          <Divider />
          <Typography variant="h6" className={classes.postsLabel}>
            User Posts
          </Typography>
          <Divider />
        </Box> */}
        {/* user feed */}
        {/* <div className={classes.feed}>
          {data ? (
            data.data.map((item) => <FeedItem item={item} key={item.id} />)
          ) : (
            <Box textAlign="center">
              <CircularProgress className={classes.loading} />
            </Box>
          )}
        </div> */}
      </Paper>
    </Layout>
  )
}

const useStyles = makeStyles((theme) => ({
  root: {
    marginBottom: 32,
    minHeight: 350,
  },
  profile: {
    padding: 16,
    display: 'flex',
    flexDirection: 'column',
  },
  header: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
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
    marginTop: 40,
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
    marginTop: 20,
    height: 50,
    width: 50,
    color: theme.palette.primary.main,
  },
}))
