/*
 * Import
 */
import React from 'react'
import { NextPage, GetStaticProps, GetStaticPaths } from 'next'
import Head from 'next/head'

/*
 * Types
 */
type Props = {
  blog: any
}

/*
 * DOM
 */
export const IllustDetails: NextPage<Props> = ({ blog }) => (
  <div className="container">
    <Head>
      <title>Create Next App</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <main>
      <h1 className="title">{blog.title}</h1>
      <p>{blog.publishedAt}</p>
      <div
        dangerouslySetInnerHTML={{
          __html: `${blog.body}`,
        }}
      />
      <img src={blog.image.url} width="500" alt={blog.title} />
    </main>
  </div>
)

/*
 * Get static props
 */
export const getStaticProps: GetStaticProps = async (context) => {
  const id = context.params.id

  const key = {
    headers: { 'X-API-KEY': process.env.API_KEY },
  }
  const data = await fetch(
    'https://kazuhe.microcms.io/api/v1/illust/' + id,
    key
  )
    .then((res) => res.json())
    .catch(() => null)

  return {
    props: {
      blog: data,
    },
  }
}

/*
 * Get static paths
 */
export const getStaticPaths: GetStaticPaths = async () => {
  const key = {
    headers: { 'X-API-KEY': process.env.API_KEY },
  }

  const data: any = await fetch('https://kazuhe.microcms.io/api/v1/illust', key)
    .then((res) => res.json())
    .catch((err) => {
      null
      console.log(err)
    })

  const paths = data.contents.map((data) => `/illust/${data.id}`)
  return { paths, fallback: false }
}

export default IllustDetails
