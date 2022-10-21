import React from 'react';
import Link from 'next/Link';

import { urlFor } from '../lib/client';

const FooterBanner = (footerBanner) => {
  return (
    <div className="footer-banner-container">
<div className="banner-desc">
  <div className="left">
    <p>{footerBanner.discount}</p>
    <h3>{footerBanner.largeText1}</h3>
    <h2>{footerBanner.largeText2}</h2>
  </div>
</div>
    </div>
  )
}

export default FooterBanner
