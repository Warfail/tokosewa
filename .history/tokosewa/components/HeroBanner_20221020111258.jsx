import React from 'react';
import Link from 'next/Link';

import { urlFor } from '../lib/client';


const HeroBanner = ({heroBanner}) => {
  return (
    <div className="hero-banner-container">
      <div>
        <p className="beats-solo">{heroBanner.smallText}</p>
        <h3>{heroBanner.midText}</h3>
        
        <h5>{heroBanner.largeText1}</h5>

       

        <div>
            <Link href={`/product/${heroBanner.product}`}>
                <button type="button">{heroBanner.buttonText}</button>
                </Link>
                <div className="desc">
                    <h5>Description</h5>
                    <p>{heroBanner.desc}</p>
                </div>
        </div>
        
      </div>
    </div>
  )
}

export default HeroBanner
