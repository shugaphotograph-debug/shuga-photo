'use client';

import { useEffect, useCallback } from 'react';
import Image from 'next/image';

interface LightboxProps {
  src: string;
  alt: string;
  onClose: () => void;
  onPrev?: () => void;
  onNext?: () => void;
  hasPrev?: boolean;
  hasNext?: boolean;
  currentIndex?: number;
  total?: number;
}

export default function Lightbox({
  src,
  alt,
  onClose,
  onPrev,
  onNext,
  hasPrev,
  hasNext,
  currentIndex,
  total,
}: LightboxProps) {
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      switch (e.key) {
        case 'Escape':
          onClose();
          break;
        case 'ArrowLeft':
          if (hasPrev) onPrev?.();
          break;
        case 'ArrowRight':
          if (hasNext) onNext?.();
          break;
      }
    },
    [onClose, onPrev, onNext, hasPrev, hasNext],
  );

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [handleKeyDown]);

  return (
    /* 背景クリックで閉じる */
    <div
      className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="画像を拡大表示中"
    >
      {/* 閉じるボタン */}
      <button
        className="absolute top-4 right-4 z-10 p-2 text-white/60 hover:text-white transition-colors"
        onClick={onClose}
        aria-label="閉じる (Esc)"
      >
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>

      {/* インジケーター */}
      {total !== undefined && currentIndex !== undefined && (
        <div className="absolute top-5 left-1/2 -translate-x-1/2 text-white/40 text-xs tracking-widest">
          {currentIndex + 1} / {total}
        </div>
      )}

      {/* 前の画像ボタン */}
      {hasPrev && (
        <button
          className="absolute left-2 md:left-6 top-1/2 -translate-y-1/2 z-10 p-3 text-white/60 hover:text-white transition-colors"
          onClick={(e) => {
            e.stopPropagation();
            onPrev?.();
          }}
          aria-label="前の画像 (←)"
        >
          <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
      )}

      {/* 画像本体（クリックで閉じないようにstopPropagation） */}
      <div
        className="relative max-w-[88vw] max-h-[88vh] flex items-center justify-center"
        onClick={(e) => e.stopPropagation()}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={src}
          alt={alt}
          className="max-w-[88vw] max-h-[88vh] object-contain select-none"
          draggable={false}
        />
      </div>

      {/* 次の画像ボタン */}
      {hasNext && (
        <button
          className="absolute right-2 md:right-6 top-1/2 -translate-y-1/2 z-10 p-3 text-white/60 hover:text-white transition-colors"
          onClick={(e) => {
            e.stopPropagation();
            onNext?.();
          }}
          aria-label="次の画像 (→)"
        >
          <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      )}
    </div>
  );
}
