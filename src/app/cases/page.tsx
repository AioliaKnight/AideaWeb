import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "成功案例 | Aidea:Med",
  description: "探索Aidea:Med如何協助牙醫診所提升線上形象、增加患者流量，並改善營運效率。",
  openGraph: {
    title: "成功案例 | Aidea:Med",
    description: "探索Aidea:Med如何協助牙醫診所提升線上形象、增加患者流量，並改善營運效率。",
    images: [
      {
        url: "/images/cases/case-studies-og.jpg",
        width: 1200,
        height: 630,
        alt: "Aidea:Med 成功案例",
      },
    ],
  },
};

// 模擬案例數據
const cases = [
  {
    title: "台北微笑牙醫診所",
    description: "透過完整的數位轉型方案，協助診所建立專業形象並提升患者預約率。",
    results: [
      "網站流量提升 200%",
      "線上預約率增加 150%",
      "社群粉絲成長 300%",
      "患者回診率提升 40%"
    ],
    image: "/images/cases/smile-dental.jpg",
    category: "網站設計",
    tags: ["網站設計", "社群經營", "線上預約"]
  },
  {
    title: "新竹康橋牙醫診所",
    description: "運用AI驅動的行銷策略，成功提升診所在當地的品牌知名度。",
    results: [
      "搜尋引擎排名提升 180%",
      "社群互動率增加 250%",
      "新患者預約成長 120%",
      "品牌知名度提升 160%"
    ],
    image: "/images/cases/kangqiao-dental.jpg",
    category: "數位行銷",
    tags: ["SEO優化", "社群媒體", "品牌建立"]
  },
  {
    title: "台中陽光牙醫診所",
    description: "整合線上預約系統與社群媒體，大幅提升診所營運效率。",
    results: [
      "預約處理時間減少 70%",
      "患者滿意度提升 85%",
      "營運成本降低 30%",
      "團隊效率提升 50%"
    ],
    image: "/images/cases/sunshine-dental.jpg",
    category: "系統整合",
    tags: ["線上預約", "流程優化", "患者體驗"]
  }
];

export default function Cases() {
  return (
    <main>
      {/* 案例介紹區塊 */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h1 className="text-4xl font-bold text-aideaMed-black mb-6">
              成功案例
            </h1>
            <p className="text-xl text-aideaMed-darkGray">
              探索我們如何協助牙醫診所提升線上形象、增加患者流量，並改善營運效率。
              每個案例都展現了Aidea:Med的專業能力與創新思維。
            </p>
          </div>

          {/* 案例列表 */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {cases.map((caseStudy) => (
              <div
                key={caseStudy.title}
                className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow"
              >
                <div className="relative h-48">
                  <Image
                    src={caseStudy.image}
                    alt={caseStudy.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center space-x-4 mb-4">
                    <span className="px-3 py-1 bg-aideaMed-red/10 text-aideaMed-red rounded-full text-sm">
                      {caseStudy.category}
                    </span>
                    {caseStudy.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-aideaMed-lightGray text-aideaMed-darkGray rounded-full text-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h2 className="text-2xl font-bold text-aideaMed-black mb-4">
                    {caseStudy.title}
                  </h2>
                  <p className="text-aideaMed-darkGray mb-6">
                    {caseStudy.description}
                  </p>
                  <div className="space-y-2">
                    {caseStudy.results.map((result) => (
                      <div
                        key={result}
                        className="flex items-center space-x-2 text-aideaMed-darkGray"
                      >
                        <svg
                          className="w-5 h-5 text-aideaMed-red"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        <span>{result}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 客戶見證區塊 */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold text-aideaMed-black mb-6">
              客戶見證
            </h2>
            <p className="text-xl text-aideaMed-darkGray">
              聽聽我們的客戶如何評價Aidea:Med的服務
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* 客戶見證卡片 */}
            <div className="bg-aideaMed-offWhite p-6 rounded-lg">
              <div className="flex items-center space-x-4 mb-4">
                <div className="relative w-12 h-12 rounded-full overflow-hidden">
                  <Image
                    src="/images/testimonials/doctor-1.jpg"
                    alt="王醫師"
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="font-medium text-aideaMed-black">王醫師</p>
                  <p className="text-sm text-aideaMed-darkGray">
                    台北微笑牙醫診所
                  </p>
                </div>
              </div>
              <p className="text-aideaMed-darkGray">
                "Aidea:Med協助我們建立專業的網站形象，並透過社群媒體提升品牌知名度。
                現在我們的線上預約系統非常順暢，患者回饋也很好。"
              </p>
            </div>

            <div className="bg-aideaMed-offWhite p-6 rounded-lg">
              <div className="flex items-center space-x-4 mb-4">
                <div className="relative w-12 h-12 rounded-full overflow-hidden">
                  <Image
                    src="/images/testimonials/doctor-2.jpg"
                    alt="李醫師"
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="font-medium text-aideaMed-black">李醫師</p>
                  <p className="text-sm text-aideaMed-darkGray">
                    新竹康橋牙醫診所
                  </p>
                </div>
              </div>
              <p className="text-aideaMed-darkGray">
                "透過Aidea:Med的AI驅動行銷策略，我們的診所在搜尋引擎上的排名大幅提升，
                新患者的預約量也顯著增加。"
              </p>
            </div>

            <div className="bg-aideaMed-offWhite p-6 rounded-lg">
              <div className="flex items-center space-x-4 mb-4">
                <div className="relative w-12 h-12 rounded-full overflow-hidden">
                  <Image
                    src="/images/testimonials/doctor-3.jpg"
                    alt="張醫師"
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="font-medium text-aideaMed-black">張醫師</p>
                  <p className="text-sm text-aideaMed-darkGray">
                    台中陽光牙醫診所
                  </p>
                </div>
              </div>
              <p className="text-aideaMed-darkGray">
                "Aidea:Med的線上預約系統整合方案，讓我們能夠更有效率地管理患者預約，
                大幅提升了診所的營運效率。"
              </p>
            </div>
          </div>

          <div className="text-lg text-gray-600">
            <p className="mb-4">
              &ldquo;自從使用 Aidea:Med 的服務後，我們的網站流量增加了 200%，線上預約率也提升了 150%。&rdquo;
            </p>
            <p className="mb-4">
              &ldquo;搜尋引擎排名提升了 180%，社群媒體互動也增加了 250%。&rdquo;
            </p>
            <p className="mb-4">
              &ldquo;預約處理時間減少了 70%，病患滿意度提升了 85%。&rdquo;
            </p>
            <p className="mb-4">
              &ldquo;網站轉換率提升了 120%，新病患預約增加了 90%。&rdquo;
            </p>
            <p>
              &ldquo;整體營運效率提升了 60%，病患回診率也提升了 40%。&rdquo;
            </p>
          </div>
        </div>
      </section>
    </main>
  );
} 