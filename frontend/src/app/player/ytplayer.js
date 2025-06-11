'use client';
import { useEffect, useRef } from 'react';

export default function YTPlayer({ videoId, play }) {

  const playerRef = useRef(null);
  const iframeRef = useRef(null);

   useEffect(() => {
    function onYouTubeIframeAPIReady() {
      playerRef.current = new window.YT.Player(iframeRef.current, {
        videoId,
        playerVars: {
          controls: 0,
          modestbranding: 1,
          rel: 0,
          enablejsapi: 1,
          autoplay: 0,
        },
        events: {
          onReady: (event) => {
            if (play) event.target.playVideo();
          },
        },
      });
    }

    if (!window.YT) {
      const tag = document.createElement('script');
      tag.src = 'https://www.youtube.com/iframe_api';
      window.onYouTubeIframeAPIReady = onYouTubeIframeAPIReady;
      document.body.appendChild(tag);
    } else {
      onYouTubeIframeAPIReady();
    }

    return () => {
      if (playerRef.current) {
        playerRef.current.destroy();
        playerRef.current = null;
      }
    };
  }, []);


  useEffect(() => {
    if (!playerRef.current) return;
    const player = playerRef.current;
    const currentVideoId = player.getVideoData().video_id;

    if (videoId !== currentVideoId) {
      player.loadVideoById(videoId);
    }
  }, [videoId]);

    useEffect(() => {
    if (!playerRef.current) return;
    if (play) {
      playerRef.current.playVideo();
    } else {
      playerRef.current.pauseVideo();
    }
  }, [play]);

  return (
 <div style={{ display: 'none' }}>
      <div id="ytplayer" ref={iframeRef}></div>
    </div>

  );
}
