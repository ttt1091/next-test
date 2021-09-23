import Link from 'next/link';
import Layout from '../../components/site-001/layout'

export default function About() {
  return (
    <div className="hello">
      <div>
        About us{' '}
        <Link href="/">
          <a>Home</a>
        </Link>
      </div>
      <div>
        <Link href="/site-001/">
          <a>site-001</a>
        </Link>
      </div>
      <div>
        test
      </div>
      <style jsx>{`
        .hello {
          font-size: 1.2rem;
        }
      `}</style>
    </div>
  );
}


About.getLayout = function getLayout(page) {
  return (
    <Layout>
      {page}
    </Layout>
  )
}