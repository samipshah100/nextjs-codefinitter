import React from 'react'
import Layout from '@/components/Layout'
import Feed from '@/components/Feed'
import useSWR from 'swr'

const url = 'https://reqres.in/api/users?page=2'
const appId = '60b79941a7788b0a5339436c'

export default function Home() {
  // const fetcherA = (url, appId) =>
  //   axios({
  //     method: 'get',
  //     url,
  //     // headers: { 'app-id': appId },
  //   })

  const { data, error } = useSWR(url)

  console.log({ data, error })

  return (
    <Layout>
      <Feed data={data} error={error} />
    </Layout>
  )
}
