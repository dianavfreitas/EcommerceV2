import React from 'react';
import '../Pages/Home.css'
import Rack from '../images/rack.jpg'
import Dress from '../images/shopdresses.jpeg'
import Tops from '../images/shoptops.jpeg'
import Bottoms from '../images/shopbottoms.jpeg'
import Jackets from  '../images/shopjackets.jpeg'
import White from  '../images/white.jpg'
import Green from '../images/green.jpg'
import Blue from '../images/blue.jpg'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/bundle';
import { Keyboard, Pagination,Navigation } from 'swiper/modules';


function Home() {
  return (
  
    <main>
        <div className="hero">
            <img src={Rack} alt="rack" id="slide-1" class="rack" />
            <div className="quote">
            <h1>The Spring Collection</h1>
            <a href="/"><button>Shop Now</button></a>
        </div>
        </div>


        <div className="john">
          <h1>The joy of dressing is an art...</h1>
        </div>


        <Swiper
        slidesPerView={4}
        spaceBetween={30}
        centeredSlides={true}
        navigation={true}
        keyboard={{enabled: true}}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination,Keyboard,Navigation]}
        className="mySwiper"
      >
        <SwiperSlide><img src={Dress} alt="dress" /></SwiperSlide>
        <SwiperSlide><img src={Tops} alt="tops" /></SwiperSlide>
        <SwiperSlide><img src={Bottoms} alt="bottoms" /></SwiperSlide>
        <SwiperSlide><img src={Jackets} alt="jackets" /></SwiperSlide>

        <SwiperSlide><img src={White} alt="white" /></SwiperSlide>
        <SwiperSlide><img src={Green} alt="green" /></SwiperSlide>
        <SwiperSlide><img src={Blue} alt="blue" /></SwiperSlide>

      </Swiper>

    
        <div className="club">
            <video autoPlay muted loop className="video">
              <source src="join-video.mp4" type='video/mp4'/>
            </video>
        </div>
    </main>
    
  
  )
}

export default Home
