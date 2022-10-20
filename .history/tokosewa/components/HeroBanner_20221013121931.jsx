import React from 'react'
import Link from 'next/Link'

const HeroBanner = () => {
  return (
    <div className="hero-banner-container">
      <div>
        <p className="beats-solo">SmallText</p>
        <h3>MID TEXT</h3>
        <img src="" alt="laptop murah" className="hero-banner-image" />

        <div>
            <Link href="/product/ID">
                <button type="button">BUTTON TEXT</button>
                </ink>
                <div className="desc">
                    <h5>Description</h5>
                    <p>Deskripsi</p>
                </div>
        </div>
        
      </div>
    </div>
  )
}

export default HeroBanner
