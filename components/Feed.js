import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@/components/Card'

export default function Feed({ data, error }) {
  const classes = useStyles()

  return (
    <div className={classes.feed}>
      {data && data.data.data.map((item) => <Card item={item} key={item.id} />)}
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
