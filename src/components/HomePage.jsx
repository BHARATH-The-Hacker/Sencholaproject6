import Carousel from 'react-bootstrap/Carousel';
import React from 'react';
import images from '../images/banner1.jpg';
import images1 from '../images/banner2.jpg';
import images2 from '../images/banner3.jpg';

function HomePage() {
    return (
        <div className="container-fluid">
      {/* MAIN */}
      <Carousel>
        <Carousel.Item>
           <img src={images} className='w-100 vh-100' alt="background" />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
        <img src={images1} className='w-100 vh-100' alt="background" />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
        <img src={images2} className='w-100 vh-100' alt="background" />
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      </div>
    );
  }
  
  export default HomePage;