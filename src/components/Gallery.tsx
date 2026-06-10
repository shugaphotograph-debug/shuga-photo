'use client';

import { useMemo, useState } from 'react';
import Image from 'next/image';
import { galleryCategories, galleryImages, type CategoryId } from '@/data/gallery';
import Lightbox from '@/components/Lightbox';
import FadeIn from '@/components/FadeIn';

type Filter = 'all' | CategoryId;

const filterTabs: { id: Filter; label: string }[] = [
  { id: 'all', label: 'すべて' },
  ...galleryCategories,
];

export default function Gallery() {
  const [filter, setFilter] = useState<Filter>('all');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const images = useMemo(
    () => (filter === 'all' ? galleryImages : galleryImages.filter((img) => img.category === filter)),
    [filter]
  );

  return (
    <section id="gallery" className="scroll-mt-16 px-5 sm:px-8 py-24 sm:py-32">
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <h2 className="text-center text-lg sm:text-xl font-extralight tracking-[0.4em] text-neutral-900 pl-[0.4em]">
            GALLERY
          </h2>
        </FadeIn>

        {/* カテゴリ切り替えタブ */}
        <FadeIn delay={100}>
          <div className="mt-12 mb-14 flex justify-center gap-8 sm:gap-12" role="tablist" aria-label="カテゴリ切り替え">
            {filterTabs.map((tab) => {
              const active = filter === tab.id;
              return (
                <button
                  key={tab.id}
                  type="button"
                  role="tab"
                  aria-selected={active}
                  onClick={() => {
                    setFilter(tab.id);
                    setLightboxIndex(null);
                  }}
                  className={`pb-2 text-xs sm:text-sm tracking-[0.2em] border-b transition-colors ${
                    active
                      ? 'text-neutral-900 border-neutral-900'
                      : 'text-neutral-400 border-transparent hover:text-neutral-700'
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>
        </FadeIn>

        {/* masonry グリッド（CSS columns による自前実装） */}
        <div className="columns-2 md:columns-3 gap-3 sm:gap-4 [column-fill:_balance]">
          {images.map((image, i) => (
            <FadeIn key={image.id} className="mb-3 sm:mb-4 break-inside-avoid">
              <button
                type="button"
                className="group block w-full"
                onClick={() => setLightboxIndex(i)}
                aria-label={`${image.alt} を拡大表示`}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={image.width}
                  height={image.height}
                  sizes="(max-width: 768px) 50vw, 33vw"
                  className="w-full h-auto transition-opacity duration-300 group-hover:opacity-80"
                />
              </button>
            </FadeIn>
          ))}
        </div>
      </div>

      {lightboxIndex !== null && (
        <Lightbox
          images={images}
          index={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
          onNavigate={setLightboxIndex}
        />
      )}
    </section>
  );
}
