import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

// 模擬文章數據
const article = {
  title: "牙醫診所數位轉型：如何運用AI提升患者體驗",
  excerpt: "探索AI技術如何改變牙醫診所的營運模式，從預約系統到治療計劃，全方位提升患者體驗。",
  content: `
    <h2>引言</h2>
    <p>在數位時代，牙醫診所的營運模式正在經歷重大轉變。AI技術的引入不僅提升了診所的營運效率，更大幅改善了患者的就醫體驗。本文將深入探討AI在牙醫診所的應用，以及如何透過數位轉型提升競爭力。</p>

    <h2>AI在牙醫診所的應用</h2>
    <h3>1. 智能預約系統</h3>
    <p>傳統的預約方式往往需要患者打電話或親自到診所預約，既耗時又容易造成溝通誤解。AI驅動的預約系統可以：</p>
    <ul>
      <li>24小時自動處理預約請求</li>
      <li>智能分析患者就醫時間偏好</li>
      <li>自動發送提醒和確認訊息</li>
      <li>預測並優化診所排程</li>
    </ul>

    <h3>2. 治療計劃模擬</h3>
    <p>AI技術可以幫助牙醫：</p>
    <ul>
      <li>生成3D治療計劃模擬</li>
      <li>預測治療效果</li>
      <li>提供個性化治療建議</li>
      <li>改善醫病溝通</li>
    </ul>

    <h2>數位轉型的關鍵步驟</h2>
    <p>成功的數位轉型需要系統性的規劃和執行：</p>
    <ol>
      <li>評估現有系統和流程</li>
      <li>制定清晰的轉型目標</li>
      <li>選擇合適的技術解決方案</li>
      <li>培訓團隊成員</li>
      <li>持續監測和優化</li>
    </ol>

    <h2>結論</h2>
    <p>AI技術正在重塑牙醫診所的營運模式，為患者帶來更好的就醫體驗。透過系統性的數位轉型，診所可以提升效率、改善服務品質，並在競爭激烈的市場中保持優勢。</p>
  `,
  category: "數位轉型",
  date: "2024-03-06",
  author: {
    name: "張醫師",
    role: "資深牙醫顧問",
    avatar: "/images/team/doctor-zhang.jpg"
  },
  readTime: "8 分鐘",
  thumbnail: "/images/blog/digital-transformation.jpg",
  relatedArticles: [
    {
      title: "牙醫診所網站設計趨勢：2024年最新指南",
      excerpt: "探索最新的牙醫診所網站設計趨勢，打造專業且吸引人的線上形象。",
      category: "網站設計",
      date: "2024-03-05",
      thumbnail: "/images/blog/web-design-trends.jpg"
    },
    {
      title: "如何運用社群媒體提升牙醫診所的知名度",
      excerpt: "學習有效的社群媒體策略，提升診所的線上曝光度和患者互動。",
      category: "社群媒體",
      date: "2024-03-04",
      thumbnail: "/images/blog/social-media-strategy.jpg"
    }
  ]
};

export const metadata: Metadata = {
  title: `${article.title} | Aidea:Med 部落格`,
  description: article.excerpt,
  openGraph: {
    title: article.title,
    description: article.excerpt,
    images: [
      {
        url: article.thumbnail,
        width: 1200,
        height: 630,
        alt: article.title,
      },
    ],
  },
};

export default function BlogPost() {
  return (
    <div className="min-h-screen bg-aideaMed-offWhite">
      {/* 導航欄 */}
      <nav className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <Link href="/" className="text-2xl font-bold text-aideaMed-red">
              Aidea:Med
            </Link>
            <div className="hidden md:flex space-x-8">
              <Link href="/services" className="text-aideaMed-darkGray hover:text-aideaMed-red">
                服務項目
              </Link>
              <Link href="/about" className="text-aideaMed-darkGray hover:text-aideaMed-red">
                關於我們
              </Link>
              <Link href="/blog" className="text-aideaMed-darkGray hover:text-aideaMed-red">
                部落格
              </Link>
              <Link href="/contact" className="text-aideaMed-darkGray hover:text-aideaMed-red">
                聯絡我們
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* 文章內容 */}
      <main className="container mx-auto px-4 py-12">
        <article className="max-w-4xl mx-auto">
          {/* 文章頭部 */}
          <header className="mb-12">
            <div className="flex items-center space-x-4 mb-4">
              <span className="px-3 py-1 bg-aideaMed-red/10 text-aideaMed-red rounded-full text-sm">
                {article.category}
              </span>
              <span className="text-aideaMed-darkGray text-sm">
                {article.date}
              </span>
              <span className="text-aideaMed-darkGray text-sm">
                {article.readTime}
              </span>
            </div>
            <h1 className="text-4xl font-bold text-aideaMed-black mb-6">
              {article.title}
            </h1>
            <div className="flex items-center space-x-4">
              <div className="relative w-12 h-12 rounded-full overflow-hidden">
                <Image
                  src={article.author.avatar}
                  alt={article.author.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <p className="font-medium text-aideaMed-black">
                  {article.author.name}
                </p>
                <p className="text-sm text-aideaMed-darkGray">
                  {article.author.role}
                </p>
              </div>
            </div>
          </header>

          {/* 文章封面圖 */}
          <div className="relative w-full h-[400px] mb-12 rounded-lg overflow-hidden">
            <Image
              src={article.thumbnail}
              alt={article.title}
              fill
              className="object-cover"
            />
          </div>

          {/* 文章內容 */}
          <div
            className="prose prose-lg max-w-none"
            dangerouslySetInnerHTML={{ __html: article.content }}
          />

          {/* 相關文章 */}
          <section className="mt-16 pt-8 border-t border-aideaMed-lightGray">
            <h2 className="text-2xl font-bold text-aideaMed-black mb-8">
              相關文章
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {article.relatedArticles.map((related) => (
                <Link
                  key={related.title}
                  href={`/blog/${related.title.toLowerCase().replace(/\s+/g, "-")}`}
                  className="group"
                >
                  <div className="relative w-full h-48 rounded-lg overflow-hidden mb-4">
                    <Image
                      src={related.thumbnail}
                      alt={related.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="flex items-center space-x-4 mb-2">
                    <span className="px-3 py-1 bg-aideaMed-red/10 text-aideaMed-red rounded-full text-sm">
                      {related.category}
                    </span>
                    <span className="text-aideaMed-darkGray text-sm">
                      {related.date}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-aideaMed-black group-hover:text-aideaMed-red transition-colors">
                    {related.title}
                  </h3>
                  <p className="text-aideaMed-darkGray mt-2">
                    {related.excerpt}
                  </p>
                </Link>
              ))}
            </div>
          </section>
        </article>
      </main>

      {/* 頁尾 */}
      <footer className="bg-white border-t border-aideaMed-lightGray">
        <div className="container mx-auto px-4 py-12">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold text-aideaMed-black mb-4">
                Aidea:Med
              </h3>
              <p className="text-aideaMed-darkGray">
                結合AI、創意與醫療專業，為台灣牙醫診所提供全方位數位營銷服務。
              </p>
            </div>
            <div>
              <h4 className="font-bold text-aideaMed-black mb-4">服務項目</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="/services" className="text-aideaMed-darkGray hover:text-aideaMed-red">
                    網站設計
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="text-aideaMed-darkGray hover:text-aideaMed-red">
                    數位行銷
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="text-aideaMed-darkGray hover:text-aideaMed-red">
                    社群經營
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="text-aideaMed-darkGray hover:text-aideaMed-red">
                    線上預約
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-aideaMed-black mb-4">關於我們</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="/about" className="text-aideaMed-darkGray hover:text-aideaMed-red">
                    公司介紹
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="text-aideaMed-darkGray hover:text-aideaMed-red">
                    團隊成員
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="text-aideaMed-darkGray hover:text-aideaMed-red">
                    成功案例
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-aideaMed-black mb-4">聯絡我們</h4>
              <ul className="space-y-2">
                <li className="text-aideaMed-darkGray">
                  台北市大安區信義路四段
                </li>
                <li className="text-aideaMed-darkGray">
                  contact@aideamed.com
                </li>
                <li className="text-aideaMed-darkGray">
                  (02) 2345-6789
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-aideaMed-lightGray text-center text-aideaMed-darkGray">
            <p>© 2024 Aidea:Med. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
} 