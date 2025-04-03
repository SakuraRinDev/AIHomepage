'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="text-xl font-bold">
            サイト名
          </Link>
          
          {/* モバイルメニューボタン */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <span className="text-2xl">✕</span>
            ) : (
              <span className="text-2xl">☰</span>
            )}
          </button>
          
          {/* デスクトップナビゲーション */}
          <nav className="hidden md:block">
            <ul className="flex space-x-8">
              <li>
                <Link href="/" className="hover:text-blue-600 transition">
                  ホーム
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-blue-600 transition">
                  ブログ
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-blue-600 transition">
                  会社情報
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-blue-600 transition">
                  お問い合わせ
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        
        {/* モバイルメニュー */}
        {isMenuOpen && (
          <nav className="md:hidden py-4">
            <ul className="space-y-4">
              <li>
                <Link 
                  href="/" 
                  className="block hover:text-blue-600 transition"
                  onClick={() => setIsMenuOpen(false)}
                >
                  ホーム
                </Link>
              </li>
              <li>
                <Link 
                  href="/blog" 
                  className="block hover:text-blue-600 transition"
                  onClick={() => setIsMenuOpen(false)}
                >
                  ブログ
                </Link>
              </li>
              <li>
                <Link 
                  href="/about" 
                  className="block hover:text-blue-600 transition"
                  onClick={() => setIsMenuOpen(false)}
                >
                  会社情報
                </Link>
              </li>
              <li>
                <Link 
                  href="/contact" 
                  className="block hover:text-blue-600 transition"
                  onClick={() => setIsMenuOpen(false)}
                >
                  お問い合わせ
                </Link>
              </li>
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
} 