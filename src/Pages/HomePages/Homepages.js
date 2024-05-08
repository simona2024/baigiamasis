import React from 'react';
import Slider from 'react-slick'; 
import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css'; 
import './Home.css'; 


const Homepage = () => {
  
  const photos = [
    { id: 1, url: 'https://prestizolinija.lt/wp-content/uploads/2021/09/EASY-BUILT-595x559.jpg', alt: 'Photo 1' },
    { id: 2, url: 'https://ksd-images.lt/display/aikido/store/61a9e1d9e0115f98c587f288082d6182.jpg', alt: 'Photo 2' },
    { id: 3, url: 'https://www.manovaistine.lt/private/uploads/images/subpages/valerijono-kremai-750x530.png', alt: 'Photo 3' },
    
  ];

  
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="home-page">
      <h1>love yourself more!</h1>
      <Slider {...settings}>
        {photos.map(photo => (
          <div key={photo.id}>
            <img src={photo.url} alt={photo.alt} />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Homepage;
