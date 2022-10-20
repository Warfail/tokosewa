import React from 'react'

import {client, urlFor} from '../../lib/client';

const ProductDetails = ({product, products}) => {
  return (
    <div>
      <div className="product-detail-container">
        <div>
            <div className="image-container">
                <img src="" />
            </div>
        </div>

      </div>
    </div>
  )
}

export const getStaticSideProps = async ({params: {slug}}) =>{
    
    const query = `*[_type == "product" && slug.current == '${slug}'][0]`;
    const 
    const products = await client.fetch(query);
    const bannerQuery = '*[_type == "banner"]';
    const bannerData = await client.fetch(bannerQuery);
  
    return{
      props: { products, bannerData}
    }
  }

export default ProductDetails
