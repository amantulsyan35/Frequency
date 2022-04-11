import { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useVideo } from '../../context/video-context';
import { useSideBar } from '../../context/sidebar-context';
import { useCategory } from '../../context/category-context';
import { categoryVideoFilter } from '../../utils/videoUtils';
import { CategoryComponent } from '../../components';
import { ExploreCard } from '../../components';
import './Explore.css';

const Explore = () => {
  const navigate = useNavigate();
  const { sideBarDispatch } = useSideBar();
  const {
    videoState: { videos },
    videoDispatch,
  } = useVideo();
  const { categories, setCategories } = useCategory();
  const [selectedCategory, setSelectedCategory] = useState('All');

  // FOR FETCHING VIDEOS
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
  }, []);

  const handleNavigate = (id) => {
    navigate(`/video/${id}`);
    sideBarDispatch({
      type: 'TOGGLE_SIDEBAR',
    });
  };

  return (
    <main className='Explore-container'>
      <section className='Explore-category-container'>
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
      <section className='Explore-video-container'>
        {videos.map((vid) => {
          return (
            <ExploreCard
              key={vid._id}
              videoThumbnail={vid.videoThumbnail}
              videoTitle={vid.videoTitle}
              creator={vid.videoCreator}
              published={vid.videoPublished}
              views={vid.videoViews}
              desc={vid.description}
              onClick={() => handleNavigate(vid._id)}
            />
          );
        })}
      </section>
    </main>
  );
};

export default Explore;
