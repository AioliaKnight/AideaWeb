import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "服務項目 | Aidea:Med",
  description: "了解Aidea:Med為台灣牙醫診所提供的專業數位行銷服務，包括網站設計、數位行銷、社群媒體管理和線上預約系統。",
};

export default function ServicesPage() {
  return (
    <main className="flex-grow">
      {/* 頁面標題 */}
      <section className="bg-aideaMed-red text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">我們的服務</h1>
          <p className="text-lg max-w-2xl mx-auto">
            Aidea:Med提供全方位的數位解決方案，從網站設計到行銷策略，專為台灣牙醫診所打造專業的線上形象。
          </p>
        </div>
      </section>

      {/* 服務總覽 */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16">我們的<span className="text-aideaMed-red">專業服務</span></h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* 服務卡片 1 */}
            <div id="website" className="flex flex-col md:flex-row gap-6 items-center bg-aideaMed-offWhite p-6 rounded-lg">
              <div className="w-20 h-20 md:w-24 md:h-24 flex items-center justify-center bg-aideaMed-red/10 text-aideaMed-red rounded-full shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-10 h-10">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-3">專業網站設計</h3>
                <p className="text-aideaMed-darkGray mb-4">
                  為您的牙醫診所打造專業、現代的網站，展現診所特色並提升患者體驗。我們的網站設計不僅美觀，還針對搜索引擎優化，確保您的診所能被更多潛在患者找到。
                </p>
                <ul className="list-disc list-inside text-aideaMed-darkGray mb-4 space-y-1">
                  <li>響應式設計，在各種設備上完美顯示</li>
                  <li>專業的診所介紹和醫生團隊展示</li>
                  <li>SEO優化，提高搜索引擎排名</li>
                  <li>方便的聯繫表單和地圖整合</li>
                </ul>
              </div>
            </div>
            
            {/* 服務卡片 2 */}
            <div id="marketing" className="flex flex-col md:flex-row gap-6 items-center bg-aideaMed-offWhite p-6 rounded-lg">
              <div className="w-20 h-20 md:w-24 md:h-24 flex items-center justify-center bg-aideaMed-red/10 text-aideaMed-red rounded-full shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-10 h-10">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
                </svg>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-3">AI驅動數位行銷</h3>
                <p className="text-aideaMed-darkGray mb-4">
                  運用AI技術分析患者行為和市場趨勢，為您的診所制定精準的數位行銷策略。我們的AI系統能識別潛在患者，精準投放廣告，最大化您的行銷預算效益。
                </p>
                <ul className="list-disc list-inside text-aideaMed-darkGray mb-4 space-y-1">
                  <li>Google和社交媒體廣告投放</li>
                  <li>AI驅動的目標客戶分析</li>
                  <li>內容行銷策略與執行</li>
                  <li>行銷效果追蹤與優化</li>
                </ul>
              </div>
            </div>
            
            {/* 服務卡片 3 */}
            <div id="social" className="flex flex-col md:flex-row gap-6 items-center bg-aideaMed-offWhite p-6 rounded-lg">
              <div className="w-20 h-20 md:w-24 md:h-24 flex items-center justify-center bg-aideaMed-red/10 text-aideaMed-red rounded-full shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-10 h-10">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                </svg>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-3">社群媒體管理</h3>
                <p className="text-aideaMed-darkGray mb-4">
                  幫助您的診所在各大社群平台建立專業形象，增強與患者的互動。我們的社群媒體專家會定期發布高質量內容，提高診所知名度，建立患者信任。
                </p>
                <ul className="list-disc list-inside text-aideaMed-darkGray mb-4 space-y-1">
                  <li>專業社群帳號建立與優化</li>
                  <li>定期內容發布與互動管理</li>
                  <li>醫療專業知識圖文製作</li>
                  <li>社群廣告投放與成效分析</li>
                </ul>
              </div>
            </div>
            
            {/* 服務卡片 4 */}
            <div id="booking" className="flex flex-col md:flex-row gap-6 items-center bg-aideaMed-offWhite p-6 rounded-lg">
              <div className="w-20 h-20 md:w-24 md:h-24 flex items-center justify-center bg-aideaMed-red/10 text-aideaMed-red rounded-full shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-10 h-10">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-3">線上預約系統</h3>
                <p className="text-aideaMed-darkGray mb-4">
                  簡便易用的線上預約系統，讓患者隨時隨地預約，減輕您的行政負擔。我們的系統支持自動提醒功能，降低爽約率，提高診所運營效率。
                </p>
                <ul className="list-disc list-inside text-aideaMed-darkGray mb-4 space-y-1">
                  <li>整合至診所網站的預約界面</li>
                  <li>自動簡訊/Email預約提醒</li>
                  <li>診所行事曆管理系統</li>
                  <li>患者檔案資料庫整合</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 服務流程 */}
      <section className="py-16 bg-aideaMed-offWhite">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16">我們的<span className="text-aideaMed-red">服務流程</span></h2>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md text-center relative">
              <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-12 h-12 flex items-center justify-center bg-aideaMed-red text-white rounded-full font-bold text-xl">
                1
              </div>
              <h3 className="text-xl font-semibold mb-3 mt-4">需求評估</h3>
              <p className="text-aideaMed-darkGray">
                深入了解您診所的需求、目標和挑戰，制定適合的數位策略。
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md text-center relative">
              <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-12 h-12 flex items-center justify-center bg-aideaMed-red text-white rounded-full font-bold text-xl">
                2
              </div>
              <h3 className="text-xl font-semibold mb-3 mt-4">方案設計</h3>
              <p className="text-aideaMed-darkGray">
                根據診所的獨特需求，提供量身定制的解決方案和明確的執行計劃。
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md text-center relative">
              <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-12 h-12 flex items-center justify-center bg-aideaMed-red text-white rounded-full font-bold text-xl">
                3
              </div>
              <h3 className="text-xl font-semibold mb-3 mt-4">專業實施</h3>
              <p className="text-aideaMed-darkGray">
                我們的專業團隊負責執行並定期與您溝通，確保項目順利進行。
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md text-center relative">
              <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-12 h-12 flex items-center justify-center bg-aideaMed-red text-white rounded-full font-bold text-xl">
                4
              </div>
              <h3 className="text-xl font-semibold mb-3 mt-4">持續優化</h3>
              <p className="text-aideaMed-darkGray">
                定期分析數據，持續優化策略和內容，確保您的診所獲得最佳效果。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 常見問題 */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">常見<span className="text-aideaMed-red">問題</span></h2>
          
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="border border-aideaMed-lightGray rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-3">Aidea:Med的服務適合所有規模的牙醫診所嗎？</h3>
              <p className="text-aideaMed-darkGray">
                是的，我們的服務可以根據不同規模診所的需求進行調整。無論是單人診所還是多醫師聯合診所，我們都能提供符合您預算和目標的解決方案。
              </p>
            </div>
            
            <div className="border border-aideaMed-lightGray rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-3">數位行銷對牙醫診所有什麼具體好處？</h3>
              <p className="text-aideaMed-darkGray">
                數位行銷可以幫助您吸引更多新患者，提高現有患者的回診率，建立專業的診所形象，並在競爭激烈的市場中脫穎而出。根據我們的經驗，有效的數位行銷策略可以使診所的患者數量增加20-40%。
              </p>
            </div>
            
            <div className="border border-aideaMed-lightGray rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-3">服務的費用結構是怎樣的？</h3>
              <p className="text-aideaMed-darkGray">
                我們提供多種付費模式，包括一次性項目費用和月度服務費。具體費用取決於您選擇的服務範圍和診所的規模。我們會在初次諮詢後提供詳細的報價，確保透明且無隱藏費用。
              </p>
            </div>
            
            <div className="border border-aideaMed-lightGray rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-3">需要多長時間才能看到效果？</h3>
              <p className="text-aideaMed-darkGray">
                各項服務的見效時間不同。網站設計通常在4-8週內完成；社群媒體管理一般在1-3個月內開始建立起社群影響力；而全面的數位行銷策略通常在3-6個月內開始產生顯著的效果。我們會定期提供報告，讓您清楚了解進展和成效。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 聯絡CTA */}
      <section className="py-16 bg-aideaMed-black text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">準備好提升您的診所了嗎？</h2>
          <p className="text-lg max-w-2xl mx-auto mb-8">
            立即聯絡我們，獲取專屬於您診所的數位行銷方案。首次諮詢免費，幫助您了解如何通過數位工具吸引更多患者。
          </p>
          <Link 
            href="/contact" 
            className="bg-aideaMed-red text-white font-semibold px-8 py-4 rounded-lg hover:bg-aideaMed-darkRed transition-colors inline-block"
          >
            立即預約免費諮詢
          </Link>
        </div>
      </section>
    </main>
  );
} 