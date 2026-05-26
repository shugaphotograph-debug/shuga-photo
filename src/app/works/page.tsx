'use client';

import { useState, useCallback } from 'react';
import Image from 'next/image';
import { galleryImages, type Category } from '@/data/gallery';
import Lightbox from '@/components/Lightbox';

const CATEGORIES: { key: Category; label: string }[] = [
  { key: 'all', label: 'すべて' },
  { key: 'ballet', label: 'バレエ発表会' },
  { key: 'music', label: '音楽発表会' },
  { key: 'event', label: 'イベント' },
];

export default function WorksPage() {
  const [activeCategory, setActiveCategory] = useState<Category>('all');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filteredImages =
    activeCategory === 'all'
      ? galleryImages
      : galleryImages.filter((img) => img.category === activeCategory);

  const handlePrev = useCallback(() => {
    setLightboxIndex((i) => (i !== null && i > 0 ? i - 1 : i));
  }, []);

  const handleNext = useCallback(() => {
    setLightboxIndex((i) =>
      i !== null && i < filteredImages.length - 1 ? i + 1 : i,
    );
  }, [filteredImages.length]);

  const handleClose = useCallback(() => setLightboxIndex(null), []);

  return (
    <div className="pt-24 pb-20">
      <div className="max-w-6xl mx-auto px-6">
        {/* ページタイトル */}
        <div className="text-center mb-14">
          <p className="text-[10px] tracking-[0.4em] text-stone-400 uppercase mb-3">Gallery</p>
          <h1 className="text-2xl font-light tracking-wider text-stone-800">Works</h1>
        </div>

        {/* カテゴリタブ */}
        <div
          className="flex flex-wrap justify-center gap-6 mb-14"
          role="tablist"
          aria-label="カテゴリ選択"
        >
          {CATEGORIES.map(({ key, label }) => (
            <button
              key={key}
              role="tab"
              aria-selected={activeCategory === key}
              onClick={() => {
                setActiveCategory(key);
                setLightboxIndex(null);
              }}
              className={`text-xs tracking-[0.15em] pb-1.5 transition-all duration-200 border-b ${
                activeCategory === key
                  ? 'text-stone-900 border-stone-900'
                  : 'text-stone-400 border-transparent hover:text-stone-600'
              }`}
            >
              {label}
            </button>
          ))}
        </div>

        {/* マソンリー風グリッド（CSS columns） */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-3">
          {filteredImages.map((image, index) => (
            <div
              key={image.id}
              className="break-inside-avoid mb-3 overflow-hidden relative group cursor-pointer"
              onClick={() => setLightboxIndex(index)}
              role="button"
              tabIndex={0}
              aria-label={`${image.alt}を拡大表示`}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  setLightboxIndex(index);
                }
              }}
            >
              <Image
                src={image.src}
                alt={image.alt}
                width={image.width}
                height={image.height}
                className="w-full h-auto block transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                unoptimized
              />
              {/* ホバーオーバーレイ */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/25 transition-colors duration-400 flex items-center justify-center">
                <svg
                  className="w-7 h-7 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>
            </div>
          ))}
        </div>

        {filteredImages.length === 0 && (
          <p className="text-center text-stone-400 text-sm py-20">
            このカテゴリの写真はまだありません。
          </p>
        )}
      </div>

      {/* ライトボックス */}
      {lightboxIndex !== null && (
        <Lightbox
          src={filteredImages[lightboxIndex].src}
          alt={filteredImages[lightboxIndex].alt}
          onClose={handleClose}
          onPrev={handlePrev}
          onNext={handleNext}
          hasPrev={lightboxIndex > 0}
          hasNext={lightboxIndex < filteredImages.length - 1}
          currentIndex={lightboxIndex}
          total={filteredImages.length}
        />
      )}
    </div>
  );
}
