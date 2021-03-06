import React from 'react';
import Head from 'next/head';
import Root from '../components/common/Root';
import Footer from '../components/common/Footer';
import HeroSection from '../components/homepage/HeroSection';
import HomeBanner from '../components/homepage/HomeBanner';
import ProductsBanner from '../components/homepage/ProductsBanner';

const Home = () => (
  <Root transparentHeader={true}>
    <Head>
      <title>LeeLeeS | UniCornS</title>
    </Head>

    <HeroSection />
    <HomeBanner />
    <ProductsBanner />
    <Footer />
  </Root>
);

export default Home;
