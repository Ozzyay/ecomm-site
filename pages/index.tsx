import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import Template from '../components/Template'


const Home: NextPage = () => {
  return (
    <Template>
          <Head>
      <title>Beautique</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
      <div className="flex flex-col items-center justify-center mt-16 md:mt-48 gap-8">
      <p className="text-white text-5xl text-center leading-normal">All natural ingredients with Expert results</p>
      <p></p>
      <p className="text-white px-2 rounded-lg bg-[rgba(0,0,0,0.5)] hover:bg-[rgba(255,255,255,0.5)] hover:text-black transition-all duration-200"><Link href="/store">Shop our Summer 2021/22 LineUp </Link></p>
      </div>
    </Template>
  )
}

export default Home
