import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@/components/FeedItem'
import useSWR from 'swr'

const url = 'https://60bc8591b8ab37001759f2f8.mockapi.io/posts'

export default function Feed() {
  const classes = useStyles()

  const { data, error } = useSWR(url)

  console.log({ data, error })
  if (error) return <div className={classes.feed}>Error occured</div>

  return (
    <div className={classes.feed}>
      {data && data.data.map((item) => <Card item={item} key={item.id} />)}
    </div>
  )
}

const useStyles = makeStyles((theme) => ({
  feed: {
    display: 'flex',
    flexDirection: 'column',
    maxWidth: 600,
  },
}))
