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

expor

export default Home
