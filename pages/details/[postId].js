import React from 'react'
import Layout from '@/components/Layout'
import PostDetails from '@/components/PostDetails'
import { useRouter } from 'next/router'
import useSWR from 'swr'
import { apiPath } from '@/constants'
import axios from 'axios'

// Example for
// 1. [slug]
// 2.
export default function PostDetailsPage({ data }) {
  const router = useRouter()

  // const { postId } = router?.query

  // const { data, error } = useSWR(`${apiPath}/post/${postId}/postData`)

  console.log('🚀 ~ file: [postId].js ~ line 13 ~ Home ~ data, error ', data)

  // console.log('🚀 ~ file: [postId].js ~ line 8 ~ Home ~ router', router)

  return <Layout>{data && <PostDetails item={data[0]} />}</Layout>
  return <div>a</div>
}

export async function getServerSideProps(context) {
  try {
    // const postId = context?.query?.postId
    const {
      query: { postId },
    } = context

    console.log(
      '🚀 ~ file: [postId].js ~ line 34 ~ getServerSideProps ~ params',
      postId
    )

    const res = await axios.get(`${apiPath}/post/${postId}/postData`)

    // if (!res) {
    //   return {
    //     redirect: {
    //       destination: '/404',
    //       permanent: false,
    //     },
    //   }
    // }

    return {
      props: { data: res.data }, // will be passed to the page component as props
    }
  } catch (error) {
    return {
      redirect: {
        destination: '/404',
        permanent: true, // show 308 permanent, and 307 temp
      },
    }
  }
}
