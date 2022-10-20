import React from 'react';
import Link from 'next/Link';

import { urlFor } from '../lib/client';


const FooterBanner = ({footerBanner : {desc, discount, largeText1, largeText2, saleTime, smallText, midText, product, buttonText, image}}) => {
  return (
    <div className="footer-banner-container">
<div className="banner-desc">
  <div className="left">
    <p>{discount}</p>
    <h3>{footerBanner.largeText1}</h3>
    <h3>{footerBanner.largeText2}</h3>
    <p>{footerBanner.saleTime}</p>
  </div>
  <div className="right">

  </div>
</div>
    </div>
  )
}

export default FooterBanner
