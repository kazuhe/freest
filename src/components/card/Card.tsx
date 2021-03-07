/*
 * Import
 */
import React from 'react'
import styles from './style.module.scss'

/*
 * Types
 */
export type Props = {
  title: string
  image: string
}

/*
 * DOM
 */
export const Card: React.FC<Props> = (props) => (
  <section className={styles.card}>
    <div className={styles.card_inner}>
      <div className={styles.card_header}>
        <img src={props.image} width="300" alt="" />
      </div>
      <div className={styles.card_body}>
        <h2 className={styles.card_title}>{props.title}</h2>
      </div>
    </div>
  </section>
)

/*
 * Container
 */
export const CardContainer: React.FC<Props> = (props) => {
  return <Card title={props.title} image={props.image} />
}
