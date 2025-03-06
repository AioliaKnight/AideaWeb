import Link from "next/link";

export const metadata = {
  title: "部落格 | Aidea:Med",
  description: "探索Aidea:Med的專業文章，了解牙醫診所數位行銷、患者經營、SEO優化和線上預約系統的最新趨勢與策略。",
};

// 模擬部落格文章數據
const blogPosts = [
  {
    id: "effective-dental-website",
    title: "打造有效率的牙醫診所網站：提升患者轉換率的9大要素",
    excerpt: "一個優秀的牙醫診所網站不僅能吸引新患者，還能有效降低行政負擔。本文分享9個關鍵要素，幫助您的診所網站脫穎而出。",
    category: "網站設計",
    date: "2023-12-15",
    author: "林詠晴",
    authorTitle: "資深網站設計師",
    readTime: "8 分鐘",
    thumbnail: "/blog/dental-website.jpg",
    featured: true
  },
  {
    id: "ai-dental-marketing",
    title: "AI如何革新牙醫診所行銷：案例分析與實施策略",
    excerpt: "人工智能正在改變牙醫診所的行銷方式。從智能聊天機器人到個性化行銷活動，了解AI如何幫助診所吸引更多患者。",
    category: "數位行銷",
    date: "2023-11-28",
    author: "王建宏",
    authorTitle: "AI行銷策略專家",
    readTime: "10 分鐘",
    thumbnail: "/blog/ai-marketing.jpg",
    featured: true
  },
  {
    id: "social-media-dental",
    title: "牙醫診所社群媒體經營全攻略：從0到100的實用指南",
    excerpt: "在數位時代，社群媒體是連接診所與患者的重要橋樑。本文提供完整指南，幫助您的診所在社群平台上建立專業形象。",
    category: "社群媒體",
    date: "2023-10-20",
    author: "陳美玲",
    authorTitle: "社群媒體顧問",
    readTime: "12 分鐘",
    thumbnail: "/blog/social-media.jpg",
    featured: false
  },
  {
    id: "online-booking-benefits",
    title: "線上預約系統如何為牙醫診所節省30%行政時間",
    excerpt: "透過實施高效的線上預約系統，牙醫診所可以大幅減少電話預約時間，提高預約效率，降低爽約率。",
    category: "預約系統",
    date: "2023-09-15",
    author: "張志明",
    authorTitle: "數位轉型顧問",
    readTime: "6 分鐘",
    thumbnail: "/blog/online-booking.jpg",
    featured: false
  },
  {
    id: "patient-loyalty",
    title: "建立患者忠誠度：數位工具如何幫助維繫長期關係",
    excerpt: "維繫現有患者比獲取新患者更具成本效益。本文探討如何利用數位工具和策略來增強患者忠誠度。",
    category: "患者關係",
    date: "2023-08-22",
    author: "林詠晴",
    authorTitle: "資深網站設計師",
    readTime: "9 分鐘",
    thumbnail: "/blog/patient-loyalty.jpg",
    featured: false
  },
  {
    id: "seo-dental-clinic",
    title: "牙醫診所SEO優化指南：如何在Google搜尋中排名第一",
    excerpt: "對於牙醫診所來說，在當地搜尋結果中名列前茅至關重要。了解關鍵的SEO策略，使您的診所在搜尋引擎中脫穎而出。",
    category: "SEO優化",
    date: "2023-07-10",
    author: "李智遠",
    authorTitle: "SEO專家",
    readTime: "11 分鐘",
    thumbnail: "/blog/seo-guide.jpg",
    featured: false
  }
];

// 將特色文章與普通文章分開
const featuredPosts = blogPosts.filter(post => post.featured);
const regularPosts = blogPosts.filter(post => !post.featured);

export default function BlogPage() {
  return (
    <main>
      {/* 頁面標題 */}
      <section className="bg-aideaMed-red text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">部落格</h1>
          <p className="text-lg max-w-2xl mx-auto">
            最新的牙醫診所數位行銷趨勢、策略和案例分析，幫助您的診所在數位時代脫穎而出。
          </p>
        </div>
      </section>

      {/* 特色文章 */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">精選<span className="text-aideaMed-red">文章</span></h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {featuredPosts.map((post) => (
              <div key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="relative h-64 w-full bg-aideaMed-lightGray">
                  {/* 在實際專案中，這裡應該顯示真實的文章特色圖片 */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <p className="text-aideaMed-darkGray text-center px-4">
                      文章特色圖片
                      <br />
                      <span className="text-sm">（實際部署時將顯示圖片）</span>
                    </p>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center mb-3">
                    <span className="bg-aideaMed-red/10 text-aideaMed-red text-sm font-medium px-3 py-1 rounded-full">
                      {post.category}
                    </span>
                    <span className="mx-2 text-aideaMed-lightGray">•</span>
                    <span className="text-sm text-aideaMed-darkGray">{post.date}</span>
                    <span className="mx-2 text-aideaMed-lightGray">•</span>
                    <span className="text-sm text-aideaMed-darkGray">{post.readTime}</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-3 hover:text-aideaMed-red transition-colors">
                    <Link href={`/blog/${post.id}`}>
                      {post.title}
                    </Link>
                  </h3>
                  <p className="text-aideaMed-darkGray mb-5">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="w-10 h-10 rounded-full bg-aideaMed-lightGray flex items-center justify-center mr-3">
                        <span className="text-sm font-medium text-aideaMed-darkGray">
                          {post.author.charAt(0)}
                        </span>
                      </div>
                      <div>
                        <p className="font-medium">{post.author}</p>
                        <p className="text-sm text-aideaMed-darkGray">{post.authorTitle}</p>
                      </div>
                    </div>
                    <Link 
                      href={`/blog/${post.id}`} 
                      className="text-aideaMed-red font-medium hover:text-aideaMed-darkRed transition-colors flex items-center"
                    >
                      閱讀更多
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 最新文章 */}
      <section className="py-16 bg-aideaMed-offWhite">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">最新<span className="text-aideaMed-red">文章</span></h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularPosts.map((post) => (
              <div key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="relative h-48 w-full bg-aideaMed-lightGray">
                  {/* 在實際專案中，這裡應該顯示真實的文章特色圖片 */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <p className="text-aideaMed-darkGray text-center px-4">
                      文章特色圖片
                      <br />
                      <span className="text-sm">（實際部署時將顯示圖片）</span>
                    </p>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center mb-3">
                    <span className="bg-aideaMed-red/10 text-aideaMed-red text-sm font-medium px-3 py-1 rounded-full">
                      {post.category}
                    </span>
                    <span className="mx-2 text-aideaMed-lightGray">•</span>
                    <span className="text-sm text-aideaMed-darkGray">{post.date}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-3 hover:text-aideaMed-red transition-colors">
                    <Link href={`/blog/${post.id}`}>
                      {post.title}
                    </Link>
                  </h3>
                  <p className="text-aideaMed-darkGray mb-5 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <Link 
                    href={`/blog/${post.id}`} 
                    className="text-aideaMed-red font-medium hover:text-aideaMed-darkRed transition-colors flex items-center"
                  >
                    閱讀更多
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* 部落格分類 */}
          <div className="mt-16">
            <h3 className="text-2xl font-bold mb-6 text-center">文章<span className="text-aideaMed-red">分類</span></h3>
            <div className="flex flex-wrap justify-center gap-4">
              <Link 
                href="/blog/category/website" 
                className="bg-white text-aideaMed-black hover:bg-aideaMed-red hover:text-white transition-colors px-6 py-3 rounded-lg shadow-sm"
              >
                網站設計
              </Link>
              <Link 
                href="/blog/category/marketing" 
                className="bg-white text-aideaMed-black hover:bg-aideaMed-red hover:text-white transition-colors px-6 py-3 rounded-lg shadow-sm"
              >
                數位行銷
              </Link>
              <Link 
                href="/blog/category/social" 
                className="bg-white text-aideaMed-black hover:bg-aideaMed-red hover:text-white transition-colors px-6 py-3 rounded-lg shadow-sm"
              >
                社群媒體
              </Link>
              <Link 
                href="/blog/category/booking" 
                className="bg-white text-aideaMed-black hover:bg-aideaMed-red hover:text-white transition-colors px-6 py-3 rounded-lg shadow-sm"
              >
                預約系統
              </Link>
              <Link 
                href="/blog/category/patient" 
                className="bg-white text-aideaMed-black hover:bg-aideaMed-red hover:text-white transition-colors px-6 py-3 rounded-lg shadow-sm"
              >
                患者關係
              </Link>
              <Link 
                href="/blog/category/seo" 
                className="bg-white text-aideaMed-black hover:bg-aideaMed-red hover:text-white transition-colors px-6 py-3 rounded-lg shadow-sm"
              >
                SEO優化
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
} 