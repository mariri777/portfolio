// 掲載作品のデータ。トップ（index.astro）と さくひんそうこ（all.astro）の両方で使う
export const BASE = import.meta.env.BASE_URL.replace(/\/$/, '');

// サービス・ツール
export const services = [
  {
    // いまは見られない状態なので、リンクなしで「おやすみ中」と表示する。再開したら URL を戻す
    href: null,
    title: '超!企業DB',
    sub: 'AI が掘る、日本株の発見。',
    kind: 'Webサービス',
    summary:
      '東証上場企業の有報・決算資料・適時開示を AI が読み込み、「ひとことで言うと何の会社か」「似たビジネスの会社」「市場が見落としていそうな論点」を銘柄ごとに一枚で見せる、個人投資家向けの銘柄分析サービス。業界マップ、スクリーニング、当たりも外れも公開する AI 予測トラッカーまで運営しています。',
    tags: ['Next.js', 'Cloudflare Workers', 'D1', 'AI 解析'],
    cover: null,
    cta: 'サービスを見る',
  },
  {
    href: 'https://mariri777.github.io/language-practice/',
    title: '日々.',
    sub: 'ことばを、すこしずつ、毎日。',
    kind: '語学ツール集',
    summary:
      '中国語・韓国語・日本語を学ぶためのツール集。作文ドリル、書写と音読のジャーナル、聞き取り4択、AI による読解補助と作文添削、手書きの漢字検索まで、母国語ごとのチャンネルに揃えました。記録は端末に保存され、オフラインでも使えます。',
    tags: ['3言語対応', 'HSK / TOPIK / JLPT', 'オフライン対応'],
    cover: `${BASE}/covers/hibi.png`,
    cta: 'ツールを使う',
  },
  {
    href: `${BASE}/tools/kikketsusui.html`,
    title: '気血水カルテ',
    sub: '中医学のものさしで、いまの体をみる。',
    kind: 'セルフチェックツール',
    summary:
      '中医学の問診と舌診から、いまかたよっている「証」と、今日からできる養生法を出すセルフチェック。二十四節気と時刻に合わせた一言も自動で入ります。1枚のHTMLだけで動きます。',
    tags: ['中医学', '問診・舌診', '単体HTML'],
    cover: `${BASE}/covers/kikketsusui.png`,
    cta: 'チェックしてみる',
  },
];

// ゲーム
export const games = [
  {
    href: 'https://sono-hantei.pages.dev/',
    title: 'その判定、言うか。',
    sub: 'サッカー監督シミュレーション',
    summary:
      '2部リーグのクラブの監督になって、1シーズンで昇格を目指すゲーム。敵は相手チームだけでなく、ときどき起きる「怪しい判定」。怒るのか、飲み込むのか。1プレイ約15分、結末は何通りもあります。',
    tags: ['3D', 'マルチエンディング', '約15分'],
    cover: `${BASE}/covers/soccer-og.jpg`,
  },
  {
    href: 'https://mariri777.github.io/eiketsu-tairan/',
    title: '英傑大乱',
    sub: 'WORLD HEROES RAMPAGE',
    summary:
      '世界史の英雄になって史実の合戦に乱入する、一人称視点の一騎当千アクション。第1ステージはワーテルローの戦い。実際の戦闘経過がそのままゲームの進行になっていて、遊ぶほど世界史に詳しくなります。',
    tags: ['一人称アクション', '世界史', 'Three.js'],
    cover: `${BASE}/covers/eiketsu.png`,
  },
  {
    href: `${BASE}/100days/day5.html`,
    title: 'うさぎマジカルレース',
    sub: 'うさぎのレースゲーム',
    summary:
      'うさぎになって、3周のレースで1位をめざすゲーム。かわいい魔法アイテムを使って、ライバルを妨害できます。',
    tags: ['レース', '魔法アイテム', '3周勝負'],
    cover: `${BASE}/covers/mini/day5.jpg`,
  },
];

// ちいさな作品。本体は public/100days/dayN.html、サムネイルは public/covers/mini/dayN.jpg
export const minis = [
  { n: 1, cat: 'tool', title: "Clock & List", desc: "時計と、今日やることのリスト" },
  { n: 2, cat: 'tool', title: "Breathe", desc: "4-7-8 呼吸法のガイド" },
  { n: 4, cat: 'game', title: "Catch Me If You Can", desc: "にげる相手を追いかけてタッチ。つかまえるまでの時間を競う" },
  { n: 6, cat: 'tool', title: "BEAUTÉ", desc: "肌質や悩みから、おすすめのコスメを5つ提案する診断" },
  { n: 8, cat: 'tool', title: "10-MIN KITCHEN", desc: "10分献立メーカー" },
  { n: 10, cat: 'game', title: "うさぎでGO", desc: "うさぎ電車を、停止線にぴったり止める運転ゲーム" },
  { n: 11, cat: 'game', title: "ドットすけっち", desc: "お絵かき＆おだいチャレンジ" },
  { n: 12, cat: 'game', title: "うさぎのすごろく", desc: "にんじん人生ゲーム" },
  { n: 13, cat: 'tool', title: "よぞらダイアリー", desc: "きぶん日記" },
  { n: 15, cat: 'game', title: "ことばシューター", desc: "レトロタイピングゲーム" },
  { n: 16, cat: 'tool', title: "今日の七十二候", desc: "一年を七十二の季節に" },
  { n: 17, cat: 'tool', title: "見えるデータベース", desc: "さわって学ぶ、しくみの話" },
  { n: 18, cat: 'tool', title: "見えるサーバー", desc: "さわって学ぶ、しくみの話" },
  { n: 19, cat: 'tool', title: "見えるAPI", desc: "さわって学ぶ、しくみの話" },
  { n: 20, cat: 'tool', title: "見えるHTTP", desc: "さわって学ぶ、しくみの話" },
  { n: 21, cat: 'tool', title: "配色をツクル", desc: "ニュアンスカラー・パレット" },
  { n: 22, cat: 'tool', title: "文字を、数える。", desc: "原稿用紙の文字数カウンター" },
  { n: 23, cat: 'game', title: "一枚絵ガチャ", desc: "静かな和の景色" },
  { n: 24, cat: 'tool', title: "たてかえ精算メモ", desc: "誰が誰にいくら返す？" },
  { n: 25, cat: 'tool', title: "今月、あといくら？", desc: "1日あたり使える額がわかる家計電卓" },
  { n: 26, cat: 'tool', title: "セール価格電卓", desc: "二重割引も税込もすぐ計算" },
  { n: 27, cat: 'tool', title: "眠りの逆算", desc: "何時に寝ると気持ちよく起きられる？" },
  { n: 28, cat: 'tool', title: "記念日カウンター", desc: "あと何日、今日で何日目" },
  { n: 29, cat: 'tool', title: "これ決めて！ルーレット", desc: "迷ったら回して決める" },
  { n: 31, cat: 'tool', title: "今日、三つだけ", desc: "やることを3つに絞るミニToDo" },
  { n: 32, cat: 'tool', title: "おくる言葉", desc: "送別・お祝いの一言メーカー" },
  { n: 33, cat: 'tool', title: "わすれもの帖", desc: "持ち物チェックリスト" },
  { n: 34, cat: 'tool', title: "まどろみタイマー", desc: "仮眠・休憩タイマー" },
  { n: 35, cat: 'tool', title: "かしかり帖", desc: "貸し借りの台帳" },
  { n: 36, cat: 'tool', title: "体調メモ帳", desc: "今日のからだを一行で" },
  { n: 37, cat: 'tool', title: "時間の家計簿", desc: "24時間の使いみちを、色で見る" },
  { n: 38, cat: 'tool', title: "きろく献立帳", desc: "今週すでにカレー2回、に気づく" },
  { n: 39, cat: 'tool', title: "わりかん計算", desc: "1人あたり、いくら？" },
  { n: 40, cat: 'tool', title: "サブスク棚卸し", desc: "実は年間いくら払ってる？" },
  { n: 41, cat: 'tool', title: "あと何日カウント", desc: "待ち遠しい日を、紙に貼っておく" },
  { n: 42, cat: 'tool', title: "お買い物メモ", desc: "よく買うものは、ワンタップで" },
  { n: 43, cat: 'tool', title: "何食べる？ルーレット", desc: "決められない夜に、クルクル" },
  { n: 44, cat: 'game', title: "余白の度胆テスト", desc: "どこまで、ふちへ寄せられる？" },
  { n: 46, cat: 'tool', title: "冷蔵庫のこよみ", desc: "賞味期限リマインダー" },
  { n: 47, cat: 'tool', title: "さじかげん", desc: "レシピの単位変換" }
];
export const miniTools = minis.filter((m) => m.cat === 'tool');
export const miniGames = minis.filter((m) => m.cat === 'game');

// Webデザイン
export const designs = [
  {
    slug: 'kodo-gym',
    pick: true,
    href: `${BASE}/lp/gym.html`,
    no: '06',
    title: 'パーソナルジム ランディングページ',
    sub: '鼓動 KODO',
    role: 'デザイン + 実装',
    year: '2026',
    tags: ['フィットネス', 'ダーク×ブラス', 'モーション豊富'],
    summary:
      '「変わる、を確かに。」をコンセプトにしたパーソナルトレーニングジムのLP試作。チャコール × くすんだブラス（琥珀）の落ち着いた配色で、鼓動（heartbeat）をモチーフに構成。マウス追従ブロブ、3Dティルトのプログラムカード、ドラッグできるトレーナーカルーセル、数字カウントアップ、料金プラン比較まで作り込んだ試作案件。',
    cover: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1600&q=80&auto=format&fit=crop',
    accent: 'from-[#D9AD57] via-[#5A4A28] to-[#121316]',
  },
  {
    slug: 'day9-tsumugi',
    href: `${BASE}/100days/day9.html`,
    no: '05',
    title: 'お取り寄せ食品 ブランドサイト',
    sub: 'TSUMUGI',
    role: 'デザイン + 実装',
    year: '2026',
    tags: ['お取り寄せ食品', '和モダン', 'モーション豊富'],
    summary:
      '全国47都道府県の作り手から、旬の味覚を届けるお取り寄せブランドのLP。テラコッタ × クリームの和モダンな配色で、産地と食卓を結ぶ静かな物語を表現。マウス追従グラデーション、3Dティルトカード、ドラッグできる作り手カルーセル、数字カウントアップなど、しっとりとした動きを織り込んだ構成。',
    cover: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=1600&q=80&auto=format&fit=crop',
    accent: 'from-[#F4D4B8] via-[#C54C2C] to-[#5A2A3A]',
  },
  {
    slug: 'beauty-clinic',
    pick: true,
    href: `${BASE}/works/beauty-clinic`,
    no: '04',
    title: '美容クリニック ランディングページ',
    sub: 'Lume Aesthetic Clinic',
    role: 'デザイン + 実装',
    year: '2026',
    tags: ['美容医療', '韓国系ミニマル', 'LP'],
    summary:
      '韓国系ナチュラル × 高級感をテーマにした美容クリニック向けLP。二重整形・肌管理・小顔・医療脱毛・美容注射の5施術を訴求。Before/Afterスライダー、症例・料金・予約導線まで実装。',
    cover: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=1600&q=80&auto=format&fit=crop',
    accent: 'from-[#E6D3C4] via-[#D9B6A2] to-[#7B5E4B]',
  },
  {
    slug: 'rabbit-clinic',
    pick: true,
    href: `${BASE}/works/rabbit-clinic`,
    no: '03',
    title: 'うさぎ専門病院 ブランドサイト',
    sub: 'Rabbit Specialty Clinic',
    role: 'デザイン + 実装',
    year: '2026',
    tags: ['動物医療', 'エディトリアル', 'Astro + GSAP'],
    summary:
      'うさぎのためだけに設計された専門医療チームのブランドサイト。エディトリアル組版、GSAPによるリビールアニメーション、Lenisスムーススクロール、マグネティックボタンを採用。',
    cover: 'https://images.unsplash.com/photo-1535241749838-299277b6305f?w=1600&q=80&auto=format&fit=crop',
    accent: 'from-[#F9D9D4] via-[#E8A3A3] to-[#6B1F3D]',
  },
  {
    slug: 'day7-patisserie',
    href: `${BASE}/100days/day7.html`,
    no: '02',
    title: 'パティスリー ブランドサイト',
    sub: 'Pâtisserie Hidamari',
    role: 'デザイン + 実装',
    year: '2026',
    tags: ['パティスリー', '手仕事', 'ナチュラル'],
    summary:
      '三軒茶屋の小さなケーキ工房のブランドサイト。地元素材を使った日々の手仕事を、ベージュとベリーカラーで温かく表現。',
    cover: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?w=1600&q=80&auto=format&fit=crop',
    accent: 'from-[#F4D4D4] via-[#D4A574] to-[#7A4A2D]',
  },
  {
    slug: 'day3-clinic',
    href: `${BASE}/100days/day3.html`,
    no: '01',
    title: '内科・皮膚科クリニック ランディングページ',
    sub: 'Aoyama Leaf Clinic',
    role: 'デザイン + 実装',
    year: '2026',
    tags: ['内科・皮膚科', 'クリーン', 'LP'],
    summary:
      '南青山の内科・皮膚科クリニックLP。淡いブルーグレーを基調にした清潔感あるデザインで、日々の不調から肌の悩みまで包括的に対応するクリニックの世界観を表現。',
    cover: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1600&q=80&auto=format&fit=crop',
    accent: 'from-[#D8E7F3] via-[#4A8DC7] to-[#2F6BA0]',
  },
  {
    slug: 'day14-coffee',
    href: `${BASE}/100days/day14.html`,
    no: '07',
    title: '珈琲焙煎所 ブランドサイト',
    sub: '黄昏珈琲焙煎所',
    role: 'デザイン + 実装',
    year: '2026',
    tags: ['コーヒー', 'ダーク', 'ブランドサイト'],
    summary: '「一日の終わりに、いちばん深い一杯を。」小さな焙煎所のブランドサイト。',
    cover: `${BASE}/covers/mini/day14.jpg`,
    accent: 'from-[#C9A26B] via-[#5A3B22] to-[#1A120B]',
  },
];

// トップにのせる代表作（Webデザインは pick: true の3つ。うさぎ → ジム → 美容クリニックの順）
const pickOrder = ['rabbit-clinic', 'kodo-gym', 'beauty-clinic'];
export const designPicks = pickOrder.map((slug) => designs.find((d) => d.slug === slug));

// 公開している作品の数
export const total = services.filter((w) => w.href).length + games.length + designs.length + minis.length;

// さくひんそうこ（/all/）にならべる、ぜんぶの作品
export const allWorks = [
  ...services.map((w) => ({ cat: 'tool', title: w.title, desc: w.sub, href: w.href, img: w.cover })),
  ...miniTools.map((m) => ({ cat: 'tool', title: m.title, desc: m.desc, href: `${BASE}/100days/day${m.n}.html`, img: `${BASE}/covers/mini/day${m.n}.jpg` })),
  ...games.map((w) => ({ cat: 'game', title: w.title, desc: w.sub, href: w.href, img: w.cover })),
  ...miniGames.map((m) => ({ cat: 'game', title: m.title, desc: m.desc, href: `${BASE}/100days/day${m.n}.html`, img: `${BASE}/covers/mini/day${m.n}.jpg` })),
  ...[...designPicks, ...designs.filter((d) => !d.pick)].map((w) => ({ cat: 'design', title: w.sub, desc: w.title, href: w.href, img: w.cover.replace('w=1600', 'w=480') })),
];
