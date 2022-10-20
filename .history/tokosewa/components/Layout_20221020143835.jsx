import React from 'react';

import Head from 'next/head';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = ({childr}) => {
  return (
    <div className="layout">
      <Head>
        <title>Tokosewa</title>
      </Head>
      <header>
        <Navbar />
      </header>

      <main className="main-container">
        {/* {children} */}
      </main>
      <footer>
        <Footer />
      </footer>
      
    </div>
  )
}

export default Layout
