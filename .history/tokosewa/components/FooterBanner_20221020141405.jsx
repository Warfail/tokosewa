import React from 'react';
import Link from 'next/Link';

import { urlFor } from '../lib/client';


const FooterBanner = ({ footerBanner) => {
  return (
    <div className="footer-banner-container">
<div className="banner-desc">
  <div className="left">
    <p>{fdiscount}</p>
    <h3>{largeText1}</h3>
    <h3>{largeText2}</h3>
    <p>{saleTime}</p>
  </div>
  <div className="right">

  </div>
</div>
    </div>
  )
}

export default FooterBanner
