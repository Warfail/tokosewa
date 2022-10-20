import React from 'react'

import { Product, FooterBanner }

const index = () => {
  return (
    <>
     HeroBanner

       <div className="products-heading">
        <h2>Best Selling Product</h2>
        <p>Jenis dan Spesifikasi yang Bervariasi</p>
       </div>

       <div className="products-container">
        {['Product 1', 'Product 2'].map(product => product)}
       </div>


       footer
    </>
   
  )
}

export default index
