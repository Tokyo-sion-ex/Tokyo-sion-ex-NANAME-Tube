/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // 静的エクスポート有効化
  images: {
    unoptimized: true, // GitHub Pages用
  },
  trailingSlash: true, // 静的エクスポート用
  
  // 環境変数（公開用）
  env: {
    SITE_NAME: 'VideoShare Platform',
    BASE_URL: process.env.NODE_ENV === 'production' 
      ? 'https://yourusername.github.io/your-repo-name'
      : 'http://localhost:3000'
  }
}

module.exports = nextConfig
