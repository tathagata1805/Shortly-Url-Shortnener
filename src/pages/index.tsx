import React from 'react'
import Head from 'next/head'
import { Provider } from 'react-redux'

import Navbar from '../components/Navbar'
import Header from '../components/Header'
import Statistics from '../components/Statistics'
import Banner from '../components/Banner'
import Footer from '../components/Footer'
import Results from '../components/Results'
import store from '../store'

const Home: React.FC = () => {
  return (
    <Provider store={store}>
      <Head>
        <title>URL Shortener</title>
      </Head>

      <Navbar />
      <Header />
      <Results />
      <Statistics />
      <Banner />
      <Footer />
    </Provider>
  )
}

export default Home
