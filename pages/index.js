import Link from 'next/link'
import Layout from '../components/layout'
import Jumbtron from '../components/jumbtron'
import HoverButton from '../components/hoverbutton'

export default function Index() {
  return (
    <main>
      <h1 className="title">
        Change{` `}
        <Link href="/about">test</Link>
      </h1>
      <div className="dummey">
        test
      </div>
      <style jsx>{`
        .title {
          font-size: 1rem;
          font-weight: normal;
        }
        .dummey{
          height: 200vh;
        }
      `}</style>
    </main>
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