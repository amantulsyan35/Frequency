import { useEffect, useState } from 'react';
import axios from 'axios';
import { useVideo } from '../../context/video-context';
import { useSideBar } from '../../context/sidebar-context';
import { useCategory } from '../../context/category-context';
import { categoryVideoFilter } from '../../utils/videoUtils';
import { useNavigate } from 'react-router-dom';
import './Homepage.css';
import {
  CarouselComponent,
  FeatureCard,
  CategoryComponent,
  Spinner,
} from '../../components';

const Homepage = () => {
  const {
    videoState: { videos },
    videoDispatch,
  } = useVideo();
  const { sideBarDispatch } = useSideBar();
  const { categories, setCategories } = useCategory();
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  //FOR FETHCING VIDEOS
  useEffect(() => {
    try {
      async function fetchVideos() {
        const response = await axios.get('/api/videos');

        let filteredVideos;
        if (selectedCategory === 'All') {
          filteredVideos = response.data.videos;
        } else {
          filteredVideos = categoryVideoFilter(
            response.data.videos,
            selectedCategory
          );
        }
        videoDispatch({
          type: 'SET_VIDEOS',
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
  }, [categories]);

  const handleNavigate = (id) => {
    navigate(`/video/${id}`);
    sideBarDispatch({
      type: 'TOGGLE_SIDEBAR',
    });
  };

  return (
    <main className='Homepage-container'>
      <section className='Homepage-category-container'>
        {[{ categoryName: 'All' }, ...categories].map((cat, i) => {
          return (
            <CategoryComponent
              key={i}
              className={
                selectedCategory === cat.categoryName
                  ? `Homepage-categories selected-category`
                  : 'Homepage-categories'
              }
              handleClick={() => setSelectedCategory(cat.categoryName)}
              categoryName={cat.categoryName}
            />
          );
        })}
      </section>

      <section className='Homepage-carousel'>
        <CarouselComponent />
      </section>

      <section className='Homepage-featured-container'>
        <h1>FEATURED VIDEOS</h1>
        <div className='Homepage-card-container'>
          {isLoading ? (
            <Spinner />
          ) : (
            videos.map((vid) => {
              return (
                <FeatureCard
                  key={vid._id}
                  videoThumbnail={vid.videoThumbnail}
                  videoTitle={vid.videoTitle}
                  creatorImage={vid.videoCreatorImage}
                  creator={vid.videoCreator}
                  published={vid.videoPublished}
                  views={vid.videoViews}
                  onClick={() => handleNavigate(vid._id)}
                />
              );
            })
          )}
        </div>
      </section>
    </main>
  );
};

export default Homepage;
