import React from 'react'
import Layout from '@/components/Layout'
import { Divider, Box, Typography } from '@material-ui/core'
import { apiPath } from '@/constants'
import axios from 'axios'

// Examples for
// 1. Static generation
//
export default function About({ about, isError }) {
  // const { data, error } = useSWR(`${apiPath}/post`, {
  //   initialData: posts,
  // })

  console.log({ about, isError })

  return (
    <Layout>
      {about && (
        <div>
          <Box mb={2}>
            <Typography variant="h3">Codefinitter</Typography>
          </Box>
          <Box mb={4}>
            <Typography variant="h4">{about[0].phrase}</Typography>
          </Box>
          <Box mb={4}>
            <Typography variant="body1">{about[0].description}</Typography>
          </Box>
        </div>
      )}
    </Layout>
  )
}

export async function getStaticProps() {
  try {
    const res = await axios.get(`${apiPath}/about`)
    return {
      props: { about: res.data },
    }
  } catch (error) {
    return {
      props: { isError: true },
    }
  }
}
