import React from 'react'
import Layout from '@/components/Layout'
// import { makeStyles } from '@material-ui/core/styles'
import FeedItem from '@/components/FeedItem'
import useSWR from 'swr'
import { apiPath } from '@/constants'

export default function HomePage() {
  const { data, error } = useSWR(`${apiPath}/post`)

  console.log({ data, error })

  return (
    <Layout>
      {error && <div>Error occured</div>}
      {data && data.data.map((item) => <FeedItem item={item} key={item.id} />)}
    </Layout>
  )
}
