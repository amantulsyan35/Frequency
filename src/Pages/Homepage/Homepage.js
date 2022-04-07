import { useEffect, useState } from 'react';
import axios from 'axios';

import { AiTwotonePushpin } from 'react-icons/ai';
import './Homepage.css';

import { CarouselComponent, FeatureCard } from '../../components';

import { useVideo } from '../../context/video-context';
import { useCategory } from '../../context/category-context';

import { categoryVideos } from '../../utils/videoUtils';

const Homepage = () => {
  const {
    videoState: { videos },
    videoDispatch,
  } = useVideo();
  const { categories, setCategories } = useCategory();
  const [selectedCategory, setSelectedCategory] = useState('All');

  //FOR FETHCING VIDEOS
  useEffect(() => {
    try {
      async function fetchVideos() {
        const response = await axios.get('/api/videos');
        let filteredVideos;
        if (selectedCategory === 'All') {
          filteredVideos = response.data.videos;
        } else {
          filteredVideos = categoryVideos(
            response.data.videos,
            selectedCategory
          );
        }
        videoDispatch({
          type: 'GET_VIDEOS',
          payload: filteredVideos,
        });
      }
      fetchVideos();
    } catch (error) {
      console.log(error);
    }
  }, [videos]);

  // FOR FETCHING CATEGORIES
  useEffect(() => {
    async function fetchCategories() {
      const response = await axios.get('/api/categories');
      setCategories(response.data.categories);
    }
    fetchCategories();
  }, []);

  return (
    <main className='Homepage-container'>
      <section className='Homepage-category-container'>
        {[{ categoryName: 'All' }, ...categories].map((cat, i) => {
          return (
            <div
              className={
                selectedCategory === cat.categoryName
                  ? `Homepage-categories selected-category`
                  : 'Homepage-categories'
              }
              key={i}
              onClick={() => setSelectedCategory(cat.categoryName)}
            >
              <div>{cat.categoryName}</div>
              <AiTwotonePushpin />
            </div>
          );
        })}
      </section>
      <section className='Homepage-carousel'>
        <CarouselComponent />
      </section>

      <section className='Homepage-featured-container'>
        <h1>FEATURED VIDEOS</h1>
        <div className='Homepage-card-container'>
          {videos.map((vid) => {
            return (
              <FeatureCard
                key={vid._id}
                videoThumbnail={vid.videoThumbnail}
                videoTitle={vid.videoTitle}
                creatorImage={vid.videoCreatorImage}
                creator={vid.videoCreator}
                published={vid.videoPublished}
                views={vid.videoViews}
              />
            );
          })}
        </div>
      </section>
    </main>
  );
};

export default Homepage;
