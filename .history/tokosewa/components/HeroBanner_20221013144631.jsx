import React from 'react';
import Link from 'next/Link';

import { urlFor } from '../lib/client';


const HeroBanner = ({heroBanner}) => {
  return (
    <div className="hero-banner-container">
      <div>
        <p className="beats-solo">{heroBanner.smallText}</p>
        <h3>{heroBanner.smallText}</h3>
        <h1>{heroBanner.largeText1}</h1>
        <img src={urlFor(heroBanner.image)} alt="laptop murah" className="hero-banner-image" />

        <div>
            <Link href={`/product/${heroBanner.product}`}>
                <button type="button">{heroBanner.buttonText}</button>
                </Link>
                <div className="desc">
                    <h5>Description</h5>
                    <p>{heroBanner}</p>
                </div>
        </div>
        
      </div>
    </div>
  )
}

export default HeroBanner
