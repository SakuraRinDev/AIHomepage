import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">サイト名</h3>
            <p className="mb-4">
              会社やサービスの簡単な説明文をここに記載します。
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">リンク</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="hover:text-blue-300 transition">ホーム</Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-blue-300 transition">ブログ</Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-blue-300 transition">会社情報</Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-blue-300 transition">お問い合わせ</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">お問い合わせ</h3>
            <address className="not-italic">
              <p>〒123-4567</p>
              <p>東京都渋谷区〇〇 1-2-3</p>
              <p>Email: info@example.com</p>
              <p>Tel: 03-1234-5678</p>
            </address>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p>&copy; {new Date().getFullYear()} サイト名. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
} 