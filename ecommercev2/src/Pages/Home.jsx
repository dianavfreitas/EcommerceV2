import React from 'react'
import '../Pages/Home.css'
import Rack from '../images/rack.jpg'
import Dress from '../images/shopdresses.jpeg'
import Tops from '../images/shoptops.jpeg'
import Bottoms from '../images/shopbottoms.jpeg'
import Jackets from  '../images/shopjackets.jpeg'
import Club from '../images/joinget.png'
import John from '../images/john.png'


function Home() {
  return (
    <>
    
    <main>
        <div class="slider">
       
            <img src={Rack} alt="rack" id="slide-1" class="rack" />
        </div>

        <div class="quote">
            <h1>The Spring Collection</h1>
            <a href="/"><button>Shop Now</button></a>
        </div>

        <div class="section2">
            <img src={Dress} alt="dress" />

            <img src={Tops} alt="tops" />

            <img src={Bottoms} alt="bottoms" />
        
            <img src={Jackets} alt="jackets" />
        </div>
        <div class="buttons">
            <a href="/"><button>Shop Dresses</button></a>
            <a href="/"><button>Shop Tops</button></a>
            <a href="/"><button>Shop Bottoms</button></a>
            <a href="/"><button>Shop Jackets</button></a>
        </div>

        <div class="club">
            <a href="/"><img src={Club} class="club" alt="club" /></a>
    
        </div>

        <div class="john">
            <img src={John} alt="john" />
        </div>
    </main>
    
    </>
  )
}

export default Home
