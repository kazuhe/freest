/*
 * Import
 */
import React from 'react'
import { NextPage, GetStaticProps } from 'next'
import Link from 'next/link'
import { CardContainer } from 'components/card'
import styles from 'styles/pages/index.module.scss'

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
    <ul className={styles.cardList}>
      {props.blog.map((blog) => (
        <li key={blog.id}>
          <Link href={`/illust/${blog.id}`} passHref>
            <a>
              <CardContainer title={blog.title} image={blog.image.url} />
            </a>
          </Link>
        </li>
      ))}
    </ul>
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
