// サンプルデータ（実際のアプリではデータベースやAPIから取得）
const sampleVideos = [
  {
    id: 1,
    title: "React入門チュートリアル",
    description: "Reactの基礎から応用までを学べるチュートリアル動画です。",
    thumbnail: "/thumbnails/react-tutorial.jpg",
    videoUrl: "/videos/react-tutorial.mp4",
    channel: "WebDev Master",
    channelAvatar: "/avatars/webdev.jpg",
    views: 12543,
    likes: 567,
    dislikes: 12,
    uploadDate: "2024-01-15T10:30:00Z",
    duration: "15:42",
    tags: ["React", "JavaScript", "Frontend"]
  },
  {
    id: 2,
    title: "Next.jsで動画共有サイトを作ろう",
    description: "Next.jsとTailwind CSSを使用してYouTube風のサイトを作成します。",
    thumbnail: "/thumbnails/nextjs-tutorial.jpg",
    videoUrl: "/videos/nextjs-tutorial.mp4",
    channel: "NextJS Pro",
    channelAvatar: "/avatars/nextjs.jpg",
    views: 8921,
    likes: 432,
    dislikes: 8,
    uploadDate: "2024-01-18T14:20:00Z",
    duration: "22:15",
    tags: ["Next.js", "Tailwind", "Web開発"]
  },
  // 追加の動画データ...
];

export function getAllVideos() {
  return sampleVideos;
}

export function getVideoById(id) {
  return sampleVideos.find(video => video.id === parseInt(id));
}

export function getRelatedVideos(currentVideoId, limit = 5) {
  return sampleVideos
    .filter(video => video.id !== currentVideoId)
    .slice(0, limit);
}
