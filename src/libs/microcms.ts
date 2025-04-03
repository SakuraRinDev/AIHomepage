import { createClient } from 'microcms-js-sdk';

export const client = createClient({
  serviceDomain: process.env.MICROCMS_SERVICE_DOMAIN || '',
  apiKey: process.env.MICROCMS_API_KEY || '',
});

// ブログ記事を取得する関数
export async function getBlogs({
  offset = 0,
  limit = 10,
}: {
  offset?: number;
  limit?: number;
}) {
  const response = await client.get({
    endpoint: 'blogs',
    queries: { offset, limit },
  });
  
  return response;
}

// 特定のブログ記事を取得
export async function getBlogById(blogId: string) {
  try {
    const response = await client.get({
      endpoint: 'blogs',
      contentId: blogId,
    });
    
    return response;
  } catch (error) {
    console.error('microCMSからのデータ取得に失敗:', error);
    throw error;
  }
}

// 検索機能のための関数
export async function searchBlogs(query: string) {
  const response = await client.get({
    endpoint: 'blogs',
    queries: { q: encodeURIComponent(query) },
  });
  
  return response;
} 