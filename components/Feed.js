// import React from 'react'
// import { makeStyles } from '@material-ui/core/styles'
// import Card from '@/components/FeedItem'
// import useSWR from 'swr'
// import { apiPath } from '@/constants'

// export default function Feed() {
//   const classes = useStyles()

//   const { data, error } = useSWR(`${apiPath}/post`)

//   // console.log({ data, error })
//   if (error) return <div className={classes.feed}>Error occured</div>

//   return (
//     <>{data && data.data.map((item) => <Card item={item} key={item.id} />)}</>
//   )
// }

// const useStyles = makeStyles((theme) => ({
//   feed: {
//     display: 'flex',
//     flexDirection: 'column',
//   },
// }))
