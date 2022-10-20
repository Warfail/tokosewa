import React from 'react';
import{ client } from '../lib/client';
import { Product, FooterBanner, HeroBanner } from '../components';

const Home = () => (
  <div>
  <HeroBanner />

    <div className="products-heading">
     <h2>Best Selling Product</h2>
     <p>Jenis dan Spesifikasi yang Bervariasi</p>
    </div>

    <div className="products-container">
     {['Product 1', 'Product 2'].map(product => product)}
    </div>


    <FooterBanner/>
 </div>

);

export const getServerSideProps = async () =>{
  const query = '*[_type == "product"]';
  const products = await clien.fetch(query);
  const bannerQuery = '*[_type == "banner"]';
  const bannerData = await clien.fetch(bannerQuery);

  return
}

export default Home
