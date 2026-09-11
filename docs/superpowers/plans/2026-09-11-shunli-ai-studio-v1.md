# 順利 AI 製作 V1 Implementation Plan

**Goal:** 在 `rebrand/shunli-ai-studio` branch 將純靜態金融首頁改造成作品導向的「順利 AI 製作」影音工作室首頁。

**Architecture:** 保持 HTML5 + CSS + Vanilla JavaScript，不導入 framework、Node 或 npm。新版首頁使用一份外部 `assets/styles.css` 與一份 `assets/app.js`；舊的 4 個金融 SEO 頁原樣保留，另以文件記錄後續轉址策略。

**Tech Stack:** HTML5, CSS custom properties, Vanilla JavaScript, YouTube external links/thumbnails.

**Spec:** 使用者提供的「順利 AI 製作官網｜第二階段 V1 改版」規格（本次對話附件）。

## Global Constraints

- 不修改、刪除或重命名 4 個舊金融 SEO 頁。
- 不 merge `main`、不 push production、不部署。
- 不導入 React、Next.js、Vue、Vite、Node build system 或 npm dependencies。
- 不建立不存在的後端 API；詢價表單只能顯示建置中狀態。
- 不杜撰客戶名稱、觀看數、商業成果、合作數量或轉換率。
- 作品影片優先使用已確認的 YouTube 作品連結，其他位置保留明確待補狀態。
- 所有絕對路徑以 `/shunli-fenqi/` 為 GitHub Pages project path 基準。

### Task 1: 建立新版靜態首頁與樣式

**Files:**
- Modify: `index.html`
- Create: `assets/styles.css`

- [ ] 建立新的 metadata、品牌導覽、Hero、作品、服務、房產專區、流程、價格、FAQ、詢價與 footer。
- [ ] 使用已確認的 5 個 YouTube 作品連結；第 6 格顯示「作品素材待補」。
- [ ] 使用 `/shunli-fenqi/assets/styles.css`，確保 GitHub Pages project path 不失效。
- [ ] 加入 dark/silver design tokens、focus-visible、RWD、reduced-motion、影片 poster/fallback 規則。

### Task 2: 加入互動與前端詢價 UI

**Files:**
- Create: `assets/app.js`
- Modify: `index.html`

- [ ] 建立 mobile hamburger menu，可開啟、關閉、Escape 關閉並在導覽點擊後關閉。
- [ ] 建立作品 filter 與作品卡的 `data-category` 結構。
- [ ] 表單 submit 阻止真實送出，顯示「正式收件功能建置中」，不呼叫 API。
- [ ] 為表單提供 `aria-live` 狀態訊息與基本 required 欄位。

### Task 3: 保留舊頁並建立 SEO／變更文件

**Files:**
- Create: `legacy-seo-plan.md`
- Create: `rebrand-change-log.md`

- [ ] 記錄每個舊金融 URL、原用途、建議 301 目標與 Search Console 後續處理。
- [ ] 記錄實際修改／新增／刪除檔案與尚缺素材、聯絡資料、SEO 項目及已知問題。
- [ ] 不更動舊金融頁內容。

### Task 4: 本地驗證與差異檢查

- [ ] 驗證所有新檔案存在、HTML/CSS/JS 引用與 project path 正確。
- [ ] 驗證舊金融頁仍存在且 Git diff 沒有變更。
- [ ] 驗證沒有 npm/package/framework 引入、沒有 API call、沒有真實表單 submit。
- [ ] 使用本地 HTTP server 檢查首頁可載入、JS console 無錯誤，並檢查 1440、1024、768、430、390、375 寬度無水平溢出。
