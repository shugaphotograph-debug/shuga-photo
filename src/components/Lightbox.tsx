'use client';

import { useCallback, useEffect } from 'react';
import Image from 'next/image';
import type { GalleryImage } from '@/data/gallery';

interface LightboxProps {
  images: GalleryImage[];
  index: number;
  onClose: () => void;
  onNavigate: (index: number) => void;
}

/**
 * 自前実装のライトボックス。
 * クリック・矢印キーで前後移動、Esc または背景クリックで閉じる。
 */
export default function Lightbox({ images, index, onClose, onNavigate }: LightboxProps) {
  const image = images[index];

  const prev = useCallback(
    () => onNavigate((index - 1 + images.length) % images.length),
    [index, images.length, onNavigate]
  );
  const next = useCallback(
    () => onNavigate((index + 1) % images.length),
    [index, images.length, onNavigate]
  );

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') prev();
      if (e.key === 'ArrowRight') next();
    };
    window.addEventListener('keydown', onKeyDown);
    // 背面のスクロールを止める
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = '';
    };
  }, [onClose, prev, next]);

  if (!image) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
      role="dialog"
      aria-modal="true"
      aria-label={image.alt}
      onClick={onClose}
    >
      {/* 閉じる */}
      <button
        type="button"
        className="absolute top-4 right-4 z-10 p-3 text-neutral-400 hover:text-white transition-colors"
        aria-label="閉じる"
        onClick={onClose}
      >
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
          <path d="M3 3l14 14M17 3L3 17" stroke="currentColor" strokeWidth="1" />
        </svg>
      </button>

      {/* 前へ */}
      <button
        type="button"
        className="absolute left-1 sm:left-4 z-10 p-3 text-neutral-400 hover:text-white transition-colors"
        aria-label="前の写真"
        onClick={(e) => {
          e.stopPropagation();
          prev();
        }}
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M15 4l-8 8 8 8" stroke="currentColor" strokeWidth="1" />
        </svg>
      </button>

      {/* 次へ */}
      <button
        type="button"
        className="absolute right-1 sm:right-4 z-10 p-3 text-neutral-400 hover:text-white transition-colors"
        aria-label="次の写真"
        onClick={(e) => {
          e.stopPropagation();
          next();
        }}
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M9 4l8 8-8 8" stroke="currentColor" strokeWidth="1" />
        </svg>
      </button>

      <figure
        className="max-w-[90vw] max-h-[85vh] flex flex-col items-center"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative">
          <Image
            src={image.src}
            alt={image.alt}
            width={image.width}
            height={image.height}
            className="max-w-[90vw] max-h-[78vh] w-auto h-auto object-contain"
            priority
          />
        </div>
        <figcaption className="mt-4 text-xs tracking-[0.15em] text-neutral-400 text-center">
          {image.alt}
          <span className="ml-4 text-neutral-600">
            {index + 1} / {images.length}
          </span>
        </figcaption>
      </figure>
    </div>
  );
}
