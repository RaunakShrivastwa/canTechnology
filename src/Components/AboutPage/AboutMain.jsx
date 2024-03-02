import React from 'react'
import Nav from './Nav/Nav'
import Header from './Header/Header'
import Banner from './Banner/Banner'
import Objective from './Objective/Objective'
import Belive from './Belive/Belive'
import Alma from './Alma/Alma'
import Foot from './Foot/Foot'
import Footer from './Fotter/Fotter';

function AboutMain() {
    return (
        <>
         <Nav/>
          <div className="container">        
          <Header />
          <Banner />
          <Objective />
          <Belive />
          <Alma />
          < Foot/> 
          < Footer/>
        
              
          </div>
        </>
      )
}

export default AboutMain