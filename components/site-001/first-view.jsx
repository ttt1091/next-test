import styles from '../../styles/site-001/styles.module.scss'

export default function firstView() {
  return (   
    <section>
      <div className={styles['first-view']}>
        <div className={styles['first-view-title']}>
          <h1>site</h1>
        </div>
        <div className={styles['first-view-main']}>title</div>
        <div className={styles['first-view-bottom']}></div>
        <style jsx>{`
        `}</style>
      </div>
    </section>
  );
}