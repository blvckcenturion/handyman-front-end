import React from 'react'
import Header from '../components/Header'
import Head from 'next/head'
import Footer from '../components/Footer'
const PageLayout = ({ children}) => {
    return (
        <div>
            <Head>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover"/> 
                <link rel="preload" href="/fonts/SFPRODISPLAYREGULAR.woff" as="font" crossOrigin="" />
                <link rel="preload" href="/fonts/SKConcretica.ttf" as="font" crossOrigin="" />
            </Head>
            <Header />
            <div className="page-layout">
                {children}
            </div>
            <Footer/>
        </div>
    )
}

export default PageLayout
