import { FaPlay, FaEye, FaThumbsUp } from 'react-icons/fa';
import { formatDistanceToNow } from 'date-fns';
import { ja } from 'date-fns/locale';

export default function VideoCard({ video, onClick }) {
  return (
    <div 
      onClick={onClick}
      className="video-card flex cursor-pointer transition-transform hover:scale-[1.02]"
    >
      {/* サムネイル */}
      <div className="relative w-40 h-24 flex-shrink-0">
        <img 
          src={video.thumbnail} 
          alt={video.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute bottom-1 right-1 bg-black/80 text-white text-xs px-1 rounded">
          {video.duration}
        </div>
        <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
          <FaPlay className="text-white text-2xl" />
        </div>
      </div>
      
      {/* 動画情報 */}
      <div className="p-3 flex-1">
        <h3 className="font-semibold text-sm line-clamp-2">
          {video.title}
        </h3>
        <p className="text-gray-400 text-xs mt-1 line-clamp-2">
          {video.description}
        </p>
        <div className="flex items-center text-gray-400 text-xs mt-2 space-x-3">
          <div className="flex items-center">
            <FaEye className="mr-1" />
            {video.views.toLocaleString()}
          </div>
          <div className="flex items-center">
            <FaThumbsUp className="mr-1" />
            {video.likes.toLocaleString()}
          </div>
        </div>
        <div className="text-gray-500 text-xs mt-2">
          {formatDistanceToNow(new Date(video.uploadDate), { 
            addSuffix: true,
            locale: ja 
          })}
        </div>
      </div>
    </div>
  );
}
