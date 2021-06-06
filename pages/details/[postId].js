import React from 'react'
import Layout from '@/components/Layout'
import PostDetails from '@/components/PostDetails'
import { useRouter } from 'next/router'
import useSWR from 'swr'
import { apiPath } from '@/constants'

export default function PostDetailsPage() {
  const router = useRouter()

  const { postId } = router?.query

  const { data, error } = useSWR(`${apiPath}/post/${postId}/postData`)

  console.log(
    '🚀 ~ file: [postId].js ~ line 13 ~ Home ~ data, error ',
    data,
    error
  )

  console.log('🚀 ~ file: [postId].js ~ line 8 ~ Home ~ router', router)

  // React.useEffect(() => {}, [])

  return <Layout>{data && <PostDetails item={data?.data[0]} />}</Layout>
}
