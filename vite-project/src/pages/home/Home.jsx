import React, { useContext } from 'react';
import Layout from '../../components/layout/Layout';
import MyContext from '../../context/data/myContext';
import HeroSection from '../../components/HeroSection/HeroSection';
import Filter from '../../components/Filter/Filter';
import ProductCard from '../../components/productCard/ProductCard';
import Track from '../../components/track/track';
import Testimonial from '../../components/testimonial/Testimonial';

function Home() {
  // Using useContext to access context value
  const context = useContext(MyContext);

  return (
    <Layout>
      <HeroSection/>
      <filter/>
      <ProductCard/>
      <Track/>
      <Testimonial />

    </Layout>
  );
}

export default Home;
