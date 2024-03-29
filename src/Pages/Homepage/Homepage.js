import { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useVideo } from '../../context/video-context';
import { useSideBar } from '../../context/sidebar-context';
import { useCategory } from '../../context/category-context';
import { usePlaylist } from '../../context/playlist-context';
import { categoryVideoFilter } from '../../utils/videoUtils';
import { addToWatchLater } from '../../services/video-service';
import { toast } from 'react-toastify';
import './Homepage.css';
import {
  CarouselComponent,
  FeatureCard,
  CategoryComponent,
  Modal,
} from '../../components';

const Homepage = () => {
  const {
    videoState: { videos },
    videoDispatch,
  } = useVideo();
  const { sideBarDispatch } = useSideBar();
  const { categories, setCategories } = useCategory();
  const {
    playlistState: { togglePlaylist },
    playlistDispatch,
  } = usePlaylist();
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [clickedVideo, setClickedVideo] = useState({});
  const encodedToken = localStorage.getItem('encodedToken');
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

  const handleWatch = async (e, video) => {
    try {
      e.stopPropagation();
      if (encodedToken) {
        await addToWatchLater(video);
        toast.success('saved to watch later');
      } else {
        toast.error('You need to be logged in first!');
      }
    } catch (error) {
      toast(error.message);
    }
  };

  const handlePlaylist = (e, video) => {
    e.stopPropagation();
    if (encodedToken) {
      playlistDispatch({ type: 'TOGGLE_PLAYLIST' });
      setClickedVideo(video);
    } else {
      toast.error('You need to be logged in first!');
    }
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
          {videos.map((vid, i) => {
            return (
              <div key={vid._id}>
                {togglePlaylist && clickedVideo._id === vid._id && (
                  <Modal key={i} video={vid} />
                )}
                <FeatureCard
                  videoThumbnail={vid.videoThumbnail}
                  video={vid}
                  videoTitle={vid.videoTitle}
                  creatorImage={vid.videoCreatorImage}
                  creator={vid.videoCreator}
                  published={vid.videoPublished}
                  views={vid.videoViews}
                  onClick={() => handleNavigate(vid._id)}
                  handleWatch={(e) => handleWatch(e, vid)}
                  handlePlaylist={(e) => handlePlaylist(e, vid)}
                />
              </div>
            );
          })}
        </div>
      </section>
    </main>
  );
};

export default Homepage;
