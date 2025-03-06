import Image from "next/image";
import Link from "next/link";
import { Button } from '@/components/ui/Button';
import { CONTACT_INFO } from '@/constants/contact';

const services = [
  {
    title: '網站設計',
    description: '打造專業、現代化的診所網站，提供最佳用戶體驗',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: '數位行銷',
    description: '全方位的數位行銷策略，提升診所品牌知名度',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
      </svg>
    ),
  },
  {
    title: '社群媒體管理',
    description: '專業的社群媒體經營，建立與患者的互動連結',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
      </svg>
    ),
  },
  {
    title: '線上預約系統',
    description: '便捷的線上預約服務，提升患者就醫體驗',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
  },
];

const testimonials = [
  {
    content: 'Aidea:Med 為我們打造的網站不僅美觀，更重要的是提升了患者的預約意願，讓我們的工作效率大幅提升。',
    author: '陳醫師',
    role: '台北微笑牙醫診所',
    image: '/images/testimonials/testimonial-1.jpg',
    stats: {
      label: '預約率提升',
      value: '200%',
    },
  },
  {
    content: '他們的數位行銷策略非常專業，幫助我們在短時間內提升了品牌知名度，患者回饋也非常正面。',
    author: '林醫師',
    role: '新竹康橋牙醫診所',
    image: '/images/testimonials/testimonial-2.jpg',
    stats: {
      label: '品牌知名度',
      value: '180%',
    },
  },
  {
    content: '社群媒體管理團隊非常用心，內容既專業又有趣，讓我們的診所形象更加親民。',
    author: '王醫師',
    role: '台中陽光牙醫診所',
    image: '/images/testimonials/testimonial-3.jpg',
    stats: {
      label: '社群互動',
      value: '250%',
    },
  },
];

export default function Home() {
  return (
    <main className="flex-grow">
      {/* Hero Section */}
      <section className="relative bg-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-red-50 to-white" />
        <div className="absolute inset-0 bg-grid-pattern opacity-5" />
        <div className="relative mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <div className="mb-8 inline-flex items-center rounded-full bg-red-50 px-4 py-1 text-sm font-medium text-red-700 ring-1 ring-inset ring-red-600/10">
              專業交給專業的人做
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              為您的牙醫診所打造
              <span className="text-red-600">數位轉型</span>
              解決方案
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              結合 AI、創意與醫療專業，為您的診所提供全方位的數位行銷服務，提升品牌形象與營運效率。
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Button href="/contact" variant="primary" size="lg">
                免費諮詢
              </Button>
              <Button href="/services" variant="secondary" size="lg">
                了解更多
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-gray-50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              專業的數位服務
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              我們提供全方位的數位解決方案，幫助您的診所在數位時代脫穎而出。
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-4">
              {services.map((service) => (
                <div key={service.title} className="flex flex-col group">
                  <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-red-600 text-white group-hover:bg-red-700 transition-colors">
                      {service.icon}
                    </div>
                    {service.title}
                  </dt>
                  <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                    <p className="flex-auto">{service.description}</p>
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-xl text-center">
            <h2 className="text-lg font-semibold leading-8 tracking-tight text-red-600">客戶見證</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              聽聽他們怎麼說
            </p>
          </div>
          <div className="mx-auto mt-16 flow-root max-w-2xl sm:mt-20 lg:mx-0 lg:max-w-none">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {testimonials.map((testimonial) => (
                <div key={testimonial.author} className="flex flex-col justify-between bg-white p-8 shadow-lg ring-1 ring-gray-200 rounded-2xl hover:shadow-xl transition-shadow">
                  <div className="flex items-center gap-x-4">
                    <Image
                      className="h-12 w-12 rounded-full bg-gray-50"
                      src={testimonial.image}
                      alt={testimonial.author}
                      width={48}
                      height={48}
                    />
                    <div>
                      <h3 className="text-lg font-semibold leading-8 tracking-tight text-gray-900">
                        {testimonial.author}
                      </h3>
                      <div className="text-base leading-7 text-gray-600">{testimonial.role}</div>
                    </div>
                  </div>
                  <p className="mt-6 text-base leading-7 text-gray-600">{testimonial.content}</p>
                  <div className="mt-6 pt-6 border-t border-gray-100">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-red-600">{testimonial.stats.value}</div>
                      <div className="text-sm text-gray-600">{testimonial.stats.label}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-red-600">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
          <div className="relative isolate overflow-hidden bg-gray-900 px-6 py-24 text-center shadow-2xl sm:rounded-3xl sm:px-16">
            <div className="absolute inset-0 -z-10 h-full w-full bg-white [background:radial-gradient(125%_125%_at_50%_10%,#fff_40%,#63e_100%)]" />
            <h2 className="mx-auto max-w-2xl text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              準備好開始您的數位轉型之旅了嗎？
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-600">
              立即預約免費諮詢，讓我們為您的診所打造專屬的數位解決方案。
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Button href="/contact" variant="primary" size="lg">
                預約諮詢
              </Button>
              <Button href="/services" variant="secondary" size="lg">
                了解更多
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
