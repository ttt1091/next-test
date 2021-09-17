import Link from 'next/link'
import Layout from '../components/layout'
import Jumbtron from '../components/jumbtron'
import HoverButton from '../components/hoverbutton'

export default function Index() {
  return (
    <div className="container">
      <main>
        <h1 className="title">
          Change{` `}
          <Link href="/about">test</Link>
        </h1>
        <div className="dummey">
          test
        </div>
      </main>
      <style jsx>{`
        .title {
          font-size: 1rem;
          font-weight: normal;
        }
        .dummey{
          height: 200vh;
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
      <HoverButton></HoverButton>
    </Layout>
  )
}