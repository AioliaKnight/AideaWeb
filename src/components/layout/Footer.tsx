import Link from 'next/link';
import { FOOTER_NAVIGATION } from '@/constants/navigation';
import { CONTACT_INFO } from '@/constants/contact';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100">
      <div className="mx-auto max-w-7xl overflow-hidden px-6 py-20 sm:py-24 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* 品牌區塊 */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-gray-900">Aidea:Med</h3>
            <p className="text-gray-600">
              專為台灣牙醫診所打造的數位行銷解決方案，結合AI、創意與醫療專業。
            </p>
          </div>

          {/* 服務項目 */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">服務項目</h4>
            <ul className="space-y-2">
              {FOOTER_NAVIGATION.services.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-gray-600 hover:text-red-600 transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 關於我們 */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">關於我們</h4>
            <ul className="space-y-2">
              {FOOTER_NAVIGATION.about.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-gray-600 hover:text-red-600 transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 聯絡資訊 */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">聯絡資訊</h4>
            <address className="not-italic text-gray-600 space-y-2">
              <p>{CONTACT_INFO.address}</p>
              <p>{CONTACT_INFO.email}</p>
              <p>{CONTACT_INFO.phone}</p>
            </address>
            <div className="flex gap-4 mt-4">
              {FOOTER_NAVIGATION.social.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-gray-400 hover:text-red-600 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="sr-only">{item.name}</span>
                  <item.icon className="h-6 w-6" aria-hidden="true" />
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* 底部區塊 */}
        <div className="mt-12 pt-8 border-t border-gray-100">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-500">
              © {new Date().getFullYear()} Aidea:Med. 保留所有權利。
            </p>
            <div className="flex gap-6">
              {FOOTER_NAVIGATION.legal.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-sm text-gray-500 hover:text-red-600 transition-colors"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
} 