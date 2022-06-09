import Head from 'next/head';

import AboutUsSection from '../components/AboutUs'
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
        <title>Wishmaco.io</title>
        <meta name="description" content="Wishmaco.io, wishmaco, wish, wish nft, NFT, wishmaco NFT, maco, maco NFT, MACO, wishmaco.io, wishmaco.me, customize nft, my nft, get your nft, wishmaco.io" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="theme-color" content="#ffffff" />
      </Head>

      {
        isMobile ?
          <MobileView />
          :
          <>
            <IntroSection />
            <PublicMintSection />
            <AboutUsSection />
            <RoadMapSection />
            <TeamSection />
          </>
      }
    </div>
  )
}
