import { getBlogById, getBlogs } from '@/libs/microcms';
import { notFound } from 'next/navigation';
import Image from 'next/image';

export async function generateStaticParams() {
  const { contents } = await getBlogs({ limit: 100 });
  
  return contents.map((blog) => ({
    id: blog.id,
  }));
}

export default async function BlogDetail({ params }: { params: { id: string } }) {
  const blog = await getBlogById(params.id).catch(() => {
    notFound();
  });
  
  return (
    <main className="container mx-auto px-4 py-16">
      <article className="max-w-3xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">{blog.title}</h1>
        <p className="text-gray-600 mb-8">{blog.publishedAt.split('T')[0]}</p>
        
        {blog.eyecatch && (
          <div className="mb-8">
            <Image
              src={blog.eyecatch.url}
              alt={blog.title}
              width={1200}
              height={630}
              className="w-full h-auto rounded-lg"
            />
          </div>
        )}
        
        <div 
          className="prose max-w-none"
          dangerouslySetInnerHTML={{ __html: blog.content }}
        />
      </article>
    </main>
  );
} 