import React from 'react';
import Link from 'next/Link';

import { urlFor } from '../lib/client';

const Product = ({product: {image, name, slug, price}}) => {
  return (
    <div>
      <Link href={`/product/${slug.current}`}>
        <
      </Link>
    </div>
  )
}

export default Product
