import Head from 'next/head';

import AboutUsSection from '../components/AboutUs'
import IntroSection from '../components/Intro'
import MobileView from '../components/MobileView';
import PublicMintSection from '../components/PublicMint'
import RoadMapSection from '../components/RoadMapSection'
import useCheckMobileScreen from '../hooks/useCheckMobileScreen'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Wishmaco.io</title>
        <meta name="description" content="Wishmaco.io, wishmaco, wish, wish nft, NFT, wishmaco NFT, maco, maco NFT, MACO, wishmaco.io, wishmaco.me, customize nft, my nft, get your nft, wishmaco.io" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
      </Head>
      <IntroSection />
      <PublicMintSection />
      <AboutUsSection />
      <RoadMapSection />
      {/* {
        isMobile ?
          <MobileView />
          :
          <>
       
          </>
      } */}

    </div>
  )
}
