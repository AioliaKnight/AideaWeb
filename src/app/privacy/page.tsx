import { Metadata } from "next";
import { PRIVACY_POLICY } from "@/constants/privacy";

export const metadata: Metadata = {
  title: "隱私政策 | Aidea:Med",
  description: "了解Aidea:Med如何保護您的個人資料，以及我們如何收集和使用您的資訊。",
  openGraph: {
    title: "隱私政策 | Aidea:Med",
    description: "了解Aidea:Med如何保護您的個人資料，以及我們如何收集和使用您的資訊。",
    images: [
      {
        url: "/images/privacy/privacy-policy-og.jpg",
        width: 1200,
        height: 630,
        alt: "Aidea:Med 隱私政策",
      },
    ],
  },
};

export default function Privacy() {
  return (
    <main className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-aideaMed-black mb-8">
            隱私政策
          </h1>
          <div className="prose prose-lg max-w-none">
            <p className="text-aideaMed-darkGray mb-8">
              最後更新日期：{PRIVACY_POLICY.lastUpdated}
            </p>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-aideaMed-black mb-4">
                1. 資料收集
              </h2>
              <p className="text-aideaMed-darkGray mb-4">
                我們收集的資料包括：
              </p>
              <ul className="list-disc pl-6 text-aideaMed-darkGray mb-4">
                <li>個人識別資料（姓名、電子郵件、電話號碼）</li>
                <li>診所資訊（診所名稱、地址、營業時間）</li>
                <li>網站使用資料（瀏覽記錄、點擊行為）</li>
                <li>通訊記錄（電子郵件、電話通話）</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-aideaMed-black mb-4">
                2. 資料使用
              </h2>
              <p className="text-aideaMed-darkGray mb-4">
                我們使用收集的資料用於：
              </p>
              <ul className="list-disc pl-6 text-aideaMed-darkGray mb-4">
                <li>提供和改善我們的服務</li>
                <li>與您進行溝通和聯繫</li>
                <li>發送服務更新和行銷資訊</li>
                <li>分析網站使用情況以優化用戶體驗</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-aideaMed-black mb-4">
                3. 資料保護
              </h2>
              <p className="text-aideaMed-darkGray mb-4">
                我們採取以下措施保護您的資料：
              </p>
              <ul className="list-disc pl-6 text-aideaMed-darkGray mb-4">
                <li>使用加密技術傳輸和儲存資料</li>
                <li>定期更新安全措施</li>
                <li>限制員工存取權限</li>
                <li>定期進行安全稽核</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-aideaMed-black mb-4">
                4. 資料分享
              </h2>
              <p className="text-aideaMed-darkGray mb-4">
                我們不會將您的資料出售或出租給第三方。僅在以下情況下可能分享資料：
              </p>
              <ul className="list-disc pl-6 text-aideaMed-darkGray mb-4">
                <li>經您同意</li>
                <li>法律要求</li>
                <li>保護我們的權益</li>
                <li>提供服務給您</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-aideaMed-black mb-4">
                5. 您的權利
              </h2>
              <p className="text-aideaMed-darkGray mb-4">
                您擁有以下權利：
              </p>
              <ul className="list-disc pl-6 text-aideaMed-darkGray mb-4">
                <li>存取您的個人資料</li>
                <li>更正不正確的資料</li>
                <li>要求刪除資料</li>
                <li>撤回同意</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-aideaMed-black mb-4">
                6. Cookie 使用
              </h2>
              <p className="text-aideaMed-darkGray mb-4">
                我們使用 Cookie 來改善您的使用體驗。您可以透過瀏覽器設定控制 Cookie。
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-aideaMed-black mb-4">
                7. 聯絡我們
              </h2>
              <p className="text-aideaMed-darkGray mb-4">
                如果您對我們的隱私政策有任何疑問，請聯絡我們：
              </p>
              <ul className="list-none pl-6 text-aideaMed-darkGray mb-4">
                <li>電子郵件：{PRIVACY_POLICY.contact.email}</li>
                <li>電話：{PRIVACY_POLICY.contact.phone}</li>
                <li>地址：{PRIVACY_POLICY.contact.address}</li>
              </ul>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
} 