import Head from 'next/head'
import IntroSection from '../components/Intro'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Wishmaco.me</title>
        <meta name="description" content="Wishmaco.me, wishmaco, wish, wish nft, NFT, wishmaco NFT, maco, maco NFT, MACO, wishmaco.io, wishmaco.me, customize nft, my nft, get your nft" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <IntroSection />
    </div>
  )
}
