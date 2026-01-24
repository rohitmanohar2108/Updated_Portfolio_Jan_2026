import { useEffect, useRef } from 'react';
import Hls from 'hls.js';

const VIDEO_URLS = [
  "https://customer-cbeadsgr09pnsezs.cloudflarestream.com/90bb1b34646b81b3b63e5a854ea00da3/manifest/video.m3u8",
  "https://customer-cbeadsgr09pnsezs.cloudflarestream.com/df176a2fb2ea2b64bd21ae1c10d3af6a/manifest/video.m3u8",
  "https://customer-cbeadsgr09pnsezs.cloudflarestream.com/12a9780eeb1ea015801a5f55cf2e9d3d/manifest/video.m3u8",
  "https://customer-cbeadsgr09pnsezs.cloudflarestream.com/964cb3eddff1a67e3772aac9a7aceea2/manifest/video.m3u8",
  "https://customer-cbeadsgr09pnsezs.cloudflarestream.com/dd17599dfa77f41517133fa7a4967535/manifest/video.m3u8",
  "https://customer-cbeadsgr09pnsezs.cloudflarestream.com/408ad52e3f15bc8f01ae69d194a8cf3a/manifest/video.m3u8",
  "https://customer-cbeadsgr09pnsezs.cloudflarestream.com/136a8a211c6c3b1cc1fd7b1c7d836c58/manifest/video.m3u8",
  "https://customer-cbeadsgr09pnsezs.cloudflarestream.com/e923e67d71fed3e0853ec57f0348451e/manifest/video.m3u8",
  "https://customer-cbeadsgr09pnsezs.cloudflarestream.com/c9ddd33ac3d964e5d33b31ce849e8f95/manifest/video.m3u8",
  "https://customer-cbeadsgr09pnsezs.cloudflarestream.com/257c7359efd4b4aaebcc03aa8fc78a36/manifest/video.m3u8",
  "https://customer-cbeadsgr09pnsezs.cloudflarestream.com/697945ca6b876878dba3b23fbd2f1561/manifest/video.m3u8"
];

export const getRandomVideoUrl = (index?: number): string => {
  if (index !== undefined) {
    return VIDEO_URLS[index % VIDEO_URLS.length];
  }
  return VIDEO_URLS[Math.floor(Math.random() * VIDEO_URLS.length)];
};

interface VideoBackgroundProps {
  videoIndex?: number;
  className?: string;
  overlay?: boolean;
  overlayOpacity?: number;
}

const VideoBackground = ({ 
  videoIndex, 
  className = '', 
  overlay = true,
  overlayOpacity = 0.4 
}: VideoBackgroundProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const videoUrl = getRandomVideoUrl(videoIndex);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (Hls.isSupported()) {
      const hls = new Hls({
        enableWorker: true,
        lowLatencyMode: true,
      });
      hls.loadSource(videoUrl);
      hls.attachMedia(video);
      hls.on(Hls.Events.MANIFEST_PARSED, () => {
        video.play().catch(() => {});
      });

      return () => {
        hls.destroy();
      };
    } else if (video.canPlayType('application/vnd.apple.mpegurl')) {
      video.src = videoUrl;
      video.addEventListener('loadedmetadata', () => {
        video.play().catch(() => {});
      });
    }
  }, [videoUrl]);

  return (
    <>
      <video
        ref={videoRef}
        className={`video-background ${className}`}
        autoPlay
        loop
        muted
        playsInline
      />
      {overlay && (
        <div 
          className="video-overlay"
          style={{ background: `rgba(0, 0, 0, ${overlayOpacity})` }}
        />
      )}
    </>
  );
};

export default VideoBackground;
