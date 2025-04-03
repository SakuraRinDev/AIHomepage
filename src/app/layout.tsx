import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'note風サイト | ホームページ',
  description: 'noteのようなデザインのサイトです。',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={inter.className}>
        {/* ヘッダー */}
        <header className="border-b border-gray-200 py-3 px-4">
          <div className="container mx-auto flex justify-between items-center">
            <div className="flex items-center">
              <Link href="/" className="text-2xl font-bold flex items-center">
                <span className="text-black">no+e</span>
                <span className="text-pink-400 ml-1">🌸</span>
              </Link>
            </div>
            
            <div className="flex-1 max-w-xl mx-8">
              <div className="relative">
                <input
                  type="text"
                  placeholder="キーワードやクリエイターで検索"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none"
                />
                <span className="absolute left-3 top-2.5 text-gray-400">
                  🔍
                </span>
              </div>
            </div>
            
            <div className="flex gap-2">
              <Link href="/login" className="text-gray-700 px-4 py-2">
                ログイン
              </Link>
              <Link href="/register" className="bg-black text-white px-4 py-2 rounded-md">
                会員登録
              </Link>
            </div>
          </div>
        </header>
        
        {/* メインコンテンツ */}
        <div className="container mx-auto flex flex-wrap mt-4 px-4">
          {/* サイドバー */}
          <aside className="w-full md:w-1/5 pr-4">
            <nav className="sticky top-4">
              <ul className="space-y-2">
                <li><Link href="/" className="block py-1.5 text-gray-900 font-medium">すべて</Link></li>
                <li><Link href="/projects" className="block py-1.5 text-gray-900 font-medium">投稿企画</Link></li>
                <li><Link href="/tryit" className="block py-1.5 text-gray-900 font-medium">やってみた</Link></li>
                <li>
                  <details className="group">
                    <summary className="flex justify-between items-center py-1.5 text-gray-900 font-medium cursor-pointer">
                      <span>くらし</span>
                      <span>▼</span>
                    </summary>
                    <ul className="pl-4 mt-1 space-y-1">
                      <li><Link href="/home" className="block py-1 text-gray-700">家庭</Link></li>
                      <li><Link href="/food" className="block py-1 text-gray-700">フード</Link></li>
                      <li><Link href="/lifestyle" className="block py-1 text-gray-700">ライフスタイル</Link></li>
                      <li><Link href="/shopping" className="block py-1 text-gray-700">ショッピング</Link></li>
                      <li><Link href="/parenting" className="block py-1 text-gray-700">育児</Link></li>
                      <li><Link href="/health" className="block py-1 text-gray-700">健康</Link></li>
                      <li><Link href="/travel" className="block py-1 text-gray-700">旅行・おでかけ</Link></li>
                      <li><Link href="/pets" className="block py-1 text-gray-700">ペット</Link></li>
                    </ul>
                  </details>
                </li>
                <li><Link href="/column" className="block py-1.5 text-gray-900 font-medium">コラム・エッセイ</Link></li>
                <li><Link href="/beauty" className="block py-1.5 text-gray-900 font-medium">美容</Link></li>
                <li><Link href="/fashion" className="block py-1.5 text-gray-900 font-medium">ファッション</Link></li>
                <li><Link href="/diy" className="block py-1.5 text-gray-900 font-medium">DIY</Link></li>
              </ul>
            </nav>
          </aside>
          
          {/* メインコンテンツ */}
          <main className="w-full md:w-4/5 md:pl-4">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
} 