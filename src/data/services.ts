export interface ServicePlan {
  id: string;
  name: string;
  price: string;
  duration: string;
  features: string[];
  recommended?: boolean;
}

export const shootingSteps = [
  {
    step: '01',
    title: 'お問い合わせ',
    description:
      'お問い合わせフォームまたはメールよりご連絡ください。撮影日程・会場・内容をお知らせいただくとスムーズです。',
  },
  {
    step: '02',
    title: 'ご確認・お見積もり',
    description:
      '詳細を確認の上、2〜3営業日以内にお見積もりをご返信します。ご不明点はお気軽にご相談ください。',
  },
  {
    step: '03',
    title: '撮影当日',
    description:
      '会場にてプロの機材・技術で、大切な瞬間を丁寧に撮影します。リハーサル時間の把握など事前準備も万全に。',
  },
  {
    step: '04',
    title: 'データ納品',
    description:
      '撮影後1週間以内に、現像・補正済みのデータをオンラインにてお渡しします。',
  },
];

export const servicePlans: ServicePlan[] = [
  {
    id: 'basic',
    name: 'ベーシック',
    price: 'TBD',
    duration: '半日（最大4時間）',
    features: [
      'データ納品（100枚〜）',
      'JPEG形式・補正済み',
      'オンライン共有（ダウンロード可）',
      '1週間以内に納品',
    ],
  },
  {
    id: 'standard',
    name: 'スタンダード',
    price: 'TBD',
    duration: '1日（最大8時間）',
    features: [
      'データ納品（250枚〜）',
      'JPEG形式・補正済み',
      'オンライン共有（ダウンロード可）',
      '1週間以内に納品',
      'プリント用高解像度データ',
    ],
    recommended: true,
  },
  {
    id: 'premium',
    name: 'プレミアム',
    price: 'TBD',
    duration: 'フル対応（時間制限なし）',
    features: [
      'データ納品（500枚〜）',
      'JPEG形式・補正済み',
      'オンライン共有（ダウンロード可）',
      '1週間以内に納品',
      'プリント用高解像度データ',
      '優先サポート',
      'フォトブック1冊（オプション追加可）',
    ],
  },
];
