import React from 'react';
import Link from 'next/Link';

import { urlFor } from '../lib/client';


const FooterBanner = ({footerBanner : {desc, discount, largeText1, largeText2, saleTime, smallText, midText, product, buttonText, image}}) => {
  return (
    <div className="footer-banner-container">
<div className="banner-desc">
  <div className="left">
    {/* <p>{discount}</p> */}
    <h4>{largeText1}</h4>
    <h4>{largeText2}</h4>
    <p>{saleTime}</p>
  </div>
  <div className="right">
    <p>{discount}</p>
    {/* <h3>{midText}</h3> */}
    <p>{desc}</p>
    <Link href={`/product/${product}`}>
      <button type="button">{buttonText}
      </button>
    </Link>
  </div>
  <img 
    src={urlFor(image)} className="footer-banner-image"
  />
</div>
    </div>
  )
}

export default FooterBanner
