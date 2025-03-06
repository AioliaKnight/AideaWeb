import { FacebookIcon, InstagramIcon, LineIcon } from '@/components/icons/SocialIcons';

export const FOOTER_NAVIGATION = {
  main: [
    { name: '服務項目', href: '/services' },
    { name: '關於我們', href: '/about' },
    { name: '成功案例', href: '/cases' },
    { name: '部落格', href: '/blog' },
    { name: '聯絡我們', href: '/contact' },
  ],
  services: [
    { name: '網站設計', href: '/services#website' },
    { name: '數位行銷', href: '/services#marketing' },
    { name: '社群媒體管理', href: '/services#social' },
    { name: '線上預約系統', href: '/services#booking' },
  ],
  about: [
    { name: '團隊介紹', href: '/about#team' },
    { name: '品牌願景', href: '/about#vision' },
    { name: '部落格', href: '/blog' },
    { name: '聯絡我們', href: '/contact' },
  ],
  social: [
    {
      name: 'Facebook',
      href: '#',
      icon: FacebookIcon,
    },
    {
      name: 'Instagram',
      href: '#',
      icon: InstagramIcon,
    },
    {
      name: 'Line',
      href: '#',
      icon: LineIcon,
    },
  ],
  legal: [
    { name: '隱私政策', href: '/privacy' },
    { name: '使用條款', href: '/terms' },
    { name: 'Cookie 政策', href: '/cookies' },
  ],
}; 