import { AiTwotonePushpin } from 'react-icons/ai';
import './Homepage.css';

import { CarouselComponent, FeatureCard } from '../../components';

const Homepage = () => {
  return (
    <main className='Homepage-container'>
      <section className='Homepage-category-container'>
        {['All', 'Ideas', 'Technology', 'Dark Academia', 'Writing'].map(
          (cat, i) => {
            return (
              <div className={`Homepage-categories ${cat}`} key={i}>
                <div>{cat}</div>
                <AiTwotonePushpin />
              </div>
            );
          }
        )}
      </section>
      <section className='Homepage-carousel'>
        <CarouselComponent />
      </section>

      <section className='Homepage-featured-container'>
        <h1>FEATURED VIDEOS</h1>
        <div className='Homepage-card-container'>
          <FeatureCard />
          <FeatureCard />
          <FeatureCard />
          <FeatureCard />
          <FeatureCard />
          <FeatureCard />
          <FeatureCard />
          <FeatureCard />
        </div>
      </section>
    </main>
  );
};

export default Homepage;
