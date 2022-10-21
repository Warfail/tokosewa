import React from 'react';
import Link from 'next/Link';

import { urlFor } from '../lib/client';

const Product = ({product: {image, name, slug, price}}) => {
  return (
    <div>
      <Link href={`/product/${slug.current}`}>
        <div className="product-card">
          <img 
          src={urlFor(image && image[0])}
          
        </div>
      </Link>
    </div>
  )
}

export default Product
