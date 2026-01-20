import ReactPlayer from 'react-player';
import { useState, useRef } from 'react';
import { FaPlay, FaPause, FaVolumeUp, FaExpand } from 'react-icons/fa';

export default function VideoPlayer({ videoUrl, thumbnail }) {
  const [playing, setPlaying] = useState(false);
  const [volume, setVolume] = useState(0.8);
  const [played, setPlayed] = useState(0);
  const playerRef = useRef(null);

  const handlePlayPause = () => {
    setPlaying(!playing);
  };

  const handleVolumeChange = (e) => {
    setVolume(parseFloat(e.target.value));
  };

  const handleProgress = (state) => {
    setPlayed(state.played);
  };

  return (
    <div className="relative w-full aspect-video bg-black rounded-lg overflow-hidden">
      <ReactPlayer
        ref={playerRef}
        url={videoUrl}
        playing={playing}
        volume={volume}
        width="100%"
        height="100%"
        onProgress={handleProgress}
        controls={false}
      />
      
      {/* カスタムコントロール */}
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
        <div className="flex items-center space-x-4">
          <button onClick={handlePlayPause} className="text-white">
            {playing ? <FaPause size={24} /> : <FaPlay size={24} />}
          </button>
          
          <div className="flex-1 h-1 bg-gray-600 rounded-full">
            <div 
              className="h-full bg-red-500 rounded-full"
              style={{ width: `${played * 100}%` }}
            ></div>
          </div>
          
          <div className="flex items-center space-x-2">
            <FaVolumeUp />
            <input
              type="range"
              min="0"
              max="1"
              step="0.1"
              value={volume}
              onChange={handleVolumeChange}
              className="w-24"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
