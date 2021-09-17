import Head from 'next/head'

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Layouts Example</title>
      </Head>
      <div className="container">{children}</div>
    </>
  )
}
