import Link from "next/link";
import { Metadata } from "next";

export const metadata = {
  title: "關於我們 | Aidea:Med",
  description: "了解Aidea:Med團隊、我們的使命和願景，以及我們如何為台灣牙醫診所提供創新的數位行銷解決方案。",
};

export default function AboutPage() {
  return (
    <main className="flex-grow">
      {/* 頁面標題 */}
      <section className="bg-aideaMed-red text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">關於我們</h1>
          <p className="text-lg max-w-2xl mx-auto">
            Aidea:Med專注於為台灣牙醫診所提供專業的數位行銷與技術解決方案，協助診所在數位時代提升競爭力。
          </p>
        </div>
      </section>

      {/* 關於品牌 */}
      <section id="vision" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-6">我們的<span className="text-aideaMed-red">品牌理念</span></h2>
              <p className="text-aideaMed-darkGray mb-4">
                Aidea:Med的名稱源自AI（人工智能）、Idea（創意）和Med（醫療）的結合，代表我們致力於將AI技術與創意思維應用於醫療領域的使命。
              </p>
              <p className="text-aideaMed-darkGray mb-4">
                在台灣競爭激烈的牙醫市場中，我們了解牙醫診所需要更智能、更有效的方式來吸引並留住患者。透過Aidea:Med的專業服務，我們幫助診所打造獨特的數位形象，提升患者體驗，並增加診所收益。
              </p>
              <p className="text-aideaMed-darkGray mb-4">
                我們相信，科技與人文的結合是未來醫療服務的趨勢。Aidea:Med不僅提供技術解決方案，更致力於通過數位工具增強醫患關係，讓更多人獲得優質的牙科服務。
              </p>
            </div>
            <div className="md:w-1/2">
              <div className="aspect-video relative bg-aideaMed-offWhite rounded-lg overflow-hidden shadow-lg">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center p-8">
                    <h3 className="text-2xl font-bold text-aideaMed-red mb-4">我們的使命</h3>
                    <p className="text-aideaMed-black">
                      透過創新的數位解決方案，協助台灣牙醫診所提升形象與效率，讓醫療專業被更多人看見。
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 我們的價值觀 */}
      <section className="py-16 bg-aideaMed-offWhite">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">我們的<span className="text-aideaMed-red">核心價值</span></h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="w-12 h-12 flex items-center justify-center bg-aideaMed-red/10 text-aideaMed-red rounded-full mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">專業誠信</h3>
              <p className="text-aideaMed-darkGray">
                我們以最高的專業標準為客戶提供服務，確保每一個建議和解決方案都基於誠信和專業知識。
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="w-12 h-12 flex items-center justify-center bg-aideaMed-red/10 text-aideaMed-red rounded-full mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">創新思維</h3>
              <p className="text-aideaMed-darkGray">
                我們不斷探索新技術和創意方法，為牙醫診所提供前沿的數位行銷解決方案，幫助他們在市場中脫穎而出。
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="w-12 h-12 flex items-center justify-center bg-aideaMed-red/10 text-aideaMed-red rounded-full mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">客戶導向</h3>
              <p className="text-aideaMed-darkGray">
                我們深入了解每個客戶的獨特需求，提供量身定制的解決方案，確保我們的服務能真正幫助診所解決問題並實現目標。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 團隊介紹 */}
      <section id="team" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">我們的<span className="text-aideaMed-red">專業團隊</span></h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-40 h-40 mx-auto bg-aideaMed-offWhite rounded-full overflow-hidden flex items-center justify-center mb-4">
                <span className="text-aideaMed-red text-4xl font-bold">C</span>
              </div>
              <h3 className="text-xl font-semibold">陳建志</h3>
              <p className="text-aideaMed-red font-medium mb-2">創辦人 / 執行長</p>
              <p className="text-aideaMed-darkGray">
                擁有10年數位行銷經驗，專注於醫療行業的數位轉型與品牌建設。
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-40 h-40 mx-auto bg-aideaMed-offWhite rounded-full overflow-hidden flex items-center justify-center mb-4">
                <span className="text-aideaMed-red text-4xl font-bold">L</span>
              </div>
              <h3 className="text-xl font-semibold">林美玲</h3>
              <p className="text-aideaMed-red font-medium mb-2">技術總監</p>
              <p className="text-aideaMed-darkGray">
                AI技術專家，負責開發診所專用的數據分析和自動化行銷工具。
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-40 h-40 mx-auto bg-aideaMed-offWhite rounded-full overflow-hidden flex items-center justify-center mb-4">
                <span className="text-aideaMed-red text-4xl font-bold">W</span>
              </div>
              <h3 className="text-xl font-semibold">王俊傑</h3>
              <p className="text-aideaMed-red font-medium mb-2">創意總監</p>
              <p className="text-aideaMed-darkGray">
                前牙醫診所行銷主管，了解診所運營需求與患者心理，擅長設計吸引患者的行銷策略。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 聯絡CTA */}
      <section className="py-16 bg-aideaMed-black text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">想與我們合作嗎？</h2>
          <p className="text-lg max-w-2xl mx-auto mb-8">
            無論您是尋求數位行銷解決方案的牙醫診所，還是對我們的服務感興趣的合作夥伴，我們期待與您交流。
          </p>
          <Link 
            href="/contact" 
            className="bg-aideaMed-red text-white font-semibold px-8 py-4 rounded-lg hover:bg-aideaMed-darkRed transition-colors inline-block"
          >
            聯絡我們
          </Link>
        </div>
      </section>
    </main>
  );
} 