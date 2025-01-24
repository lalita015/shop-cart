import React from 'react'
import Hero from '../Components/HeroTop/Hero';
import Popular from '../Components/Popular/Popular';
import Offer from '../Components/Offers/Offer';
import NewCollections from '../Components/NewCollections/NewCollections';
import NewsLeter from '../Components/NewsLetter/NewsLeter';



const Shop = () => {
  return (
    <div>
     <Hero/>
     <Popular/>
     <Offer/>
     <NewCollections/>
     <NewsLeter/>
    </div>
  )
}

export default Shop;