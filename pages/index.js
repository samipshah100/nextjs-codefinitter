import React from 'react'
import Layout from '@/components/Layout'
// import { makeStyles } from '@material-ui/core/styles'
import FeedItem from '@/components/FeedItem'
import useSWR from 'swr'
import { apiPath } from '@/constants'
import axios from 'axios'

// Examples for
// 1. Static generation
//
export default function HomePage({ posts, isError }) {
  // const { data, error } = useSWR(`${apiPath}/post`, {
  //   initialData: posts,
  // })

  console.log({ posts, isError })

  return (
    <Layout>
      {isError && <div>Error occured</div>}
      {posts && posts.map((item) => <FeedItem item={item} key={item.id} />)}
    </Layout>
  )
}

export async function getStaticProps() {
  try {
    const res = await axios.get(`${apiPath}/post`)
    return {
      props: { posts: res.data },
    }
  } catch (error) {
    return {
      props: { isError: true },
    }
  }
}
