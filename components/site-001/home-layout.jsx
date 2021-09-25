import Head from 'next/head'
import FirstView from '../../components/site-001/first-view'
import styles from '../../styles/site-001/styles.module.scss'

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Site-001</title>
      </Head>
      <div className={styles['background-bold-line-one']}></div>
      <div className={styles['background-bold-line-two']}></div>
      <FirstView></FirstView>
      <div className={styles['container']}>
        {children}
      </div>
    </>
  )
}
