import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { ExploreCard } from '../../components';
import { useSideBar } from '../../context/sidebar-context';
import { usePlaylist } from '../../context/playlist-context';
import { deleteVideoFromPlaylist } from '../../services/video-service';
import './PlaylistVideo.css';

const PlaylistVideo = () => {
  const {
    playlistState: { playlists, individualPlaylist },
    playlistDispatch,
  } = usePlaylist();
  const params = useParams();
  const navigate = useNavigate();
  const { sideBarDispatch } = useSideBar();

  const filteredPlaylist = playlists.filter(
    (playlist) => playlist._id === params.id
  );

  useEffect(() => {
    try {
      (async () => {
        playlistDispatch({
          type: 'SET_INDIVIDUAL_PLAYLIST',
          payload: filteredPlaylist[0],
        });
      })();
    } catch (error) {
      toast.error(error.message);
    }
  }, []);

  const handleNavigate = (id) => {
    navigate(`/video/${id}`);
    sideBarDispatch({
      type: 'TOGGLE_SIDEBAR',
    });
  };

  const handleRemove = async (e, id) => {
    try {
      e.stopPropagation();
      const playlist = await deleteVideoFromPlaylist(params.id, id);
      toast.success('Video Removed');
      playlistDispatch({
        type: 'SET_INDIVIDUAL_PLAYLIST',
        payload: playlist,
      });
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <main className='playlist-video'>
      <section className='playlist-video-list'>
        {individualPlaylist.videos && individualPlaylist.videos.length === 0 ? (
          <img src='' alt='' />
        ) : (
          individualPlaylist.videos &&
          individualPlaylist.videos.map((vid) => {
            return (
              <ExploreCard
                key={vid._id}
                videoTitle={vid.videoTitle}
                creator={vid.videoCreator}
                videoThumbnail={vid.videoThumbnail}
                onClick={() => handleNavigate(vid._id)}
                handleRemove={(e) => handleRemove(e, vid._id)}
                type='playlistVideo'
              />
            );
          })
        )}
      </section>
    </main>
  );
};

export default PlaylistVideo;
