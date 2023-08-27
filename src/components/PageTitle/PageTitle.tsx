import React from 'react'
import styles from './PageTitle.module.scss'

interface PageTitleProps {
	text: string
}

const PageTitle = ({ text }: PageTitleProps) => {
  return <div className={styles.title}>{text}</div>
}

export default PageTitle
