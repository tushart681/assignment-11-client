import React from 'react';
import img1 from '../../../images/360_F_245564825_XWIQVfqbp6BqgZpoR8XzAqhWxaGjofYC.jpg'
import img2 from '../../../images/computer-repair-engineer-pc-electronic-hardware-shop-performing-laptop-maintenance-developer-fixing-components-technology-145668303.jpg'
import img3 from '../../../images/hand-dismantle-laptop-laptop-repair-screwdriver-close-up-hand-dismantle-laptop-laptop-repair-screwdriver-162454423.jpg'
import img4 from '../../../images/istockphoto-481678798-612x612.jpg'

const Banner = () => {
    return (
        <div className="carousel rounded">
  <div id="slide1" className="carousel-item relative w-full">
    <img src={img1} alt="" className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 bottom-0">
      <a href="#slide4" className="btn btn-circle">❮</a> 
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 top-1/4">
          <h1 className='text-6xl font-bold text-white'>
            Affordable <br />
            price for Frez <br />
            Servicing
          </h1>
        </div>
  </div> 
  <div id="slide2" className="carousel-item relative w-full">
    <img src={img2} alt="" className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 bottom-0">
      <a href="#slide1" className="btn btn-circle">❮</a> 
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 top-1/4">
          <h1 className='text-6xl font-bold text-white'>
            Affordable <br />
            price for Computer <br />
            Servicing
          </h1>
        </div>
  </div> 
  <div id="slide3" className="carousel-item relative w-full">
    <img src={img3} alt="" className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 bottom-0">
      <a href="#slide2" className="btn btn-circle">❮</a> 
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 top-1/4">
          <h1 className='text-6xl font-bold text-white'>
            Affordable <br />
            price for Laptop <br />
            Servicing
          </h1>
        </div>
  </div> 
  <div id="slide4" className="carousel-item relative w-full">
    <img src={img4} alt="" className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 bottom-0">
      <a href="#slide3" className="btn btn-circle">❮</a> 
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 top-1/4">
          <h1 className='text-6xl font-bold text-white'>
            Affordable <br />
            price for Bike <br />
            Servicing
          </h1>
        </div>
  </div>
</div>
    );
};

export default Banner;