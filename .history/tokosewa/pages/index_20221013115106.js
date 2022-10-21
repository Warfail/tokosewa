import React from 'react'

const index = () => {
  return (
    <>
     HeroBanner

       <div cla>
        <h2>Best Selling Product</h2>
        <p>Jenis dan Spesifikasi yang Bervariasi</p>
       </div>

       <div>
        {['Product 1', 'Product 2'].map(product => product)}
       </div>


       footer
    </>
   
  )
}

export default index
