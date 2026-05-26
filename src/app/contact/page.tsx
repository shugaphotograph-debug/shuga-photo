import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'お問い合わせ',
  description: '撮影のご依頼・ご相談はこちらからお問い合わせください。',
};

// TODO: 以下の定数を実際のGoogleフォームのURLに差し替えてください
// Googleフォームの共有URL（「送信」→「リンク」でコピーできるURL）
// 例: https://docs.google.com/forms/d/e/1FAIpQLSxxxxxxxx/viewform?embedded=true
const GOOGLE_FORM_EMBED_URL =
  'https://docs.google.com/forms/d/e/TODO_REPLACE_WITH_YOUR_FORM_ID/viewform?embedded=true';

export default function ContactPage() {
  return (
    <div className="pt-24 pb-20">
      <div className="max-w-2xl mx-auto px-6">
        {/* ページタイトル */}
        <div className="text-center mb-14">
          <p className="text-[10px] tracking-[0.4em] text-stone-400 uppercase mb-3">Contact</p>
          <h1 className="text-2xl font-light tracking-wider text-stone-800">お問い合わせ</h1>
        </div>

        {/* 説明文 */}
        <div className="text-center mb-12">
          <p className="text-sm text-stone-500 leading-loose">
            撮影のご依頼、お見積もり、ご相談など、お気軽にお問い合わせください。
            <br />
            通常 <strong className="text-stone-700 font-medium">2〜3営業日以内</strong> にご返信いたします。
          </p>
        </div>

        {/* フォームエリア */}
        <div className="border border-stone-100 bg-stone-50/50 p-6 md:p-10">
          <h2 className="text-xs tracking-[0.3em] uppercase text-stone-400 mb-6 text-center">
            お問い合わせフォーム
          </h2>

          {/*
            TODO: GOOGLE_FORM_EMBED_URL を実際のGoogleフォームのURLに差し替えてください。
            差し替え手順：
              1. Googleフォームを開く
              2. 右上「送信」ボタン → 「<>」（埋め込み）タブ
              3. 表示されたiframeのsrc属性のURLをコピー
              4. この定数（GOOGLE_FORM_EMBED_URL）に貼り付け
          */}
          <iframe
            src={GOOGLE_FORM_EMBED_URL}
            width="100%"
            height="720"
            frameBorder="0"
            title="お問い合わせフォーム"
            className="block w-full border-0"
            loading="lazy"
          >
            読み込んでいます…
          </iframe>
        </div>

        {/* フォールバック */}
        <p className="text-center text-xs text-stone-400 mt-8 leading-relaxed">
          フォームが表示されない場合は、ページを再読み込みするか
          <br />
          直接メールにてご連絡ください。
        </p>
      </div>
    </div>
  );
}
