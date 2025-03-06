# Aidea:Med 網站專案

Aidea:Med 是一個專注於幫助台灣牙醫診所進行數位轉型的專業團隊。我們結合 AI、創意與醫療專業，為診所提供全方位的數位行銷解決方案。

## 技術棧

- **前端框架**: Next.js 14
- **樣式**: Tailwind CSS
- **表單處理**: React Hook Form + Zod
- **UI 組件**: Headless UI
- **圖標**: Heroicons
- **內容管理**: Sanity CMS
- **電子郵件**: SendGrid
- **分析工具**: Google Analytics
- **地圖服務**: Google Maps API

## 開始使用

1. 克隆專案：
   ```bash
   git clone https://github.com/your-username/aidea-med-web.git
   cd aidea-med-web
   ```

2. 安裝依賴：
   ```bash
   npm install
   ```

3. 複製環境變數文件：
   ```bash
   cp .env.example .env.local
   ```

4. 配置環境變數：
   - 在 `.env.local` 文件中填入必要的 API 密鑰和配置

5. 啟動開發服務器：
   ```bash
   npm run dev
   ```

6. 在瀏覽器中打開 [http://localhost:3000](http://localhost:3000)

## 專案結構

```
src/
├── app/                    # Next.js 應用路由
│   ├── api/               # API 路由
│   ├── about/             # 關於我們頁面
│   ├── blog/              # 部落格頁面
│   ├── cases/             # 成功案例頁面
│   ├── contact/           # 聯絡我們頁面
│   ├── privacy/           # 隱私政策頁面
│   └── services/          # 服務項目頁面
├── components/            # React 組件
│   ├── ui/               # UI 基礎組件
│   ├── forms/            # 表單相關組件
│   └── layout/           # 布局相關組件
├── lib/                   # 工具函數
│   ├── utils/            # 通用工具函數
│   ├── hooks/            # 自定義 Hooks
│   └── api/              # API 相關函數
├── types/                 # TypeScript 類型定義
├── styles/               # 樣式文件
└── constants/            # 常量定義
```

## 功能特點

- 響應式設計，支援所有設備
- SEO 優化，包含結構化資料
- 整合 Google Analytics 追蹤
- 表單驗證與自動回覆
- 部落格內容管理系統
- 成功案例展示
- 線上預約諮詢

## 開發指南

### 代碼風格

- 使用 ESLint 和 Prettier 進行代碼格式化
- 遵循 TypeScript 嚴格模式
- 使用函數組件和 Hooks
- 遵循 Next.js 最佳實踐

### 提交規範

提交訊息格式：
```
<type>(<scope>): <subject>

<body>

<footer>
```

類型（type）：
- feat: 新功能
- fix: 修復
- docs: 文檔
- style: 格式
- refactor: 重構
- test: 測試
- chore: 構建過程或輔助工具的變動

### 部署

專案使用 Vercel 進行部署，每次推送到 main 分支都會自動部署。

## 貢獻指南

1. Fork 專案
2. 創建特性分支
3. 提交變更
4. 推送到分支
5. 創建 Pull Request

## 授權

本專案採用 MIT 授權 - 詳見 [LICENSE](LICENSE) 文件

## 聯絡我們

- 網站：[https://aidea-med.com](https://aidea-med.com)
- 電子郵件：contact@aidea-med.com
- 電話：(02) XXXX-XXXX
