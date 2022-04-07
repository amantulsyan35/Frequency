import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';

import './Carousel.css';

const CarouselComponent = () => {
  return (
    <Carousel showThumbs={false}>
      {[
        'https://i.ytimg.com/vi/Q1irNBh2qg8/maxresdefault.jpg',
        'https://i.ytimg.com/vi/8VzDr7bgZwY/maxresdefault.jpg',
        'https://i.ytimg.com/vi/PPNMBYcjYXE/maxresdefault.jpg',
      ].map((imgUrl, i) => {
        return (
          <div className='Carousel-card' key={i}>
            <img src={imgUrl} alt='' />
          </div>
        );
      })}
    </Carousel>
  );
};

export default CarouselComponent;
