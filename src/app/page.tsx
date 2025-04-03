import Image from 'next/image';
import Link from 'next/link';
import { getBlogs } from '@/libs/microcms';

export default async function Home() {
  const data = await getBlogs({ limit: 3 });
  return (
    <main className="min-h-screen">      
      {/* 最新ブログ */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-10 text-center">最新情報</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {data.contents.map((blog) => (
              <div key={blog.id} className="bg-white rounded-lg overflow-hidden shadow-md">
                {blog.eyecatch && (
                  <Image
                    src={blog.eyecatch.url}
                    alt={blog.title}
                    width={400}
                    height={225}
                    className="w-full h-48 object-cover"
                  />
                )}
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{blog.title}</h3>
                  <p className="text-gray-600 mb-4">{blog.publishedAt.split('T')[0]}</p>
                  <Link href={`/blog/${blog.id}`} className="text-blue-600 hover:underline">
                    続きを読む
                  </Link>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-10">
            <Link href="/blog" className="text-blue-600 hover:underline">
              全ての記事を見る →
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
} 