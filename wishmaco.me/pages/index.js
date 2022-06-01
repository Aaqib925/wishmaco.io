import Head from 'next/head';

import AboutUsSection from '../components/AboutUs'
import GuideLinesSection from '../components/Guidelines';
import IntroSection from '../components/Intro'
import MobileView from '../components/MobileView';
import PublicMintSection from '../components/PublicMint'
import RoadMapSection from '../components/RoadMapSection'
import TeamSection from '../components/Team'
import useCheckMobileScreen from '../hooks/useCheckMobileScreen';

export default function Home() {
  const isMobile = useCheckMobileScreen();

  return (
    <div>
      <Head>
        <title>Wishmaco.me</title>
        <meta name="description" content="Wishmaco.me, wishmaco.me, maco, mocaco, wishmaco, wish, wish nft, NFT, wishmaco NFT, maco, maco NFT, MACO, wishmaco.io, wishmaco.me, customize nft, my nft, get your nft, wishmaco.io" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
      </Head>

      {
        isMobile ?
          <MobileView />
          :
          <>
            <IntroSection />
            <GuideLinesSection />
            <AboutUsSection />
            <RoadMapSection />
            <TeamSection />
          </>
      }
    </div>
  )
}
