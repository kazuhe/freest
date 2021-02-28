/*
 * Import
 */
import React from 'react'
import { NextPage, GetStaticProps } from 'next'
import Link from 'next/link'

/*
 * Types
 */
type Props = {
  blog: any
}

/*
 * DOM
 */
export const Illust: NextPage<Props> = (props) => (
  <div>
    {props.blog.map((blog) => (
      <ul key={blog.id}>
        <li>
          <Link href={`/illust/${blog.id}`} passHref>
            <a>
              <h2>{blog.title}</h2>
              <img src={blog.image.url} width="300" alt="" />
            </a>
          </Link>
        </li>
      </ul>
    ))}
  </div>
)

/*
 * Get static props
 */
export const getStaticProps: GetStaticProps = async () => {
  const key = {
    headers: { 'X-API-KEY': process.env.API_KEY },
  }

  const data = await fetch('https://kazuhe.microcms.io/api/v1/illust', key)
    .then((res) => res.json())
    .catch(() => null)

  return {
    props: {
      blog: data.contents,
    },
  }
}

export default Illust
