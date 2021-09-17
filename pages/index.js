import Link from 'next/link'
import Layout from '../components/layout'
import Jumbtron from '../components/jumbtron'

export default function Index() {
  return (
    <div className="container">
      <main>
        <h1 className="title">
          Change{` `}
          <Link href="/about">test</Link>
        </h1>
      </main>
      <style jsx>{`
        .title {
          font-size: 1rem;
          font-weight: normal;
        }
      `}</style>
    </div>
  )
}




Index.getLayout = function getLayout(page) {
  return (
    <Layout>
      <Jumbtron></Jumbtron>
      {page}
    </Layout>
  )
}