import { getAllVideos, getVideoById } from '../../lib/data/videos';

export default function handler(req, res) {
  const { id } = req.query;
  
  if (req.method === 'GET') {
    if (id) {
      // 特定の動画を取得
      const video = getVideoById(id);
      if (video) {
        res.status(200).json(video);
      } else {
        res.status(404).json({ error: 'Video not found' });
      }
    } else {
      // すべての動画を取得
      const videos = getAllVideos();
      res.status(200).json(videos);
    }
  } else {
    res.setHeader('Allow', ['GET']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
