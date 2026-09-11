# 順利 AI 製作 V1 改版紀錄

## 1. 修改檔案

- `index.html`：重建為作品導向的 AI 影音製作工作室首頁。

## 2. 新增檔案

- `assets/styles.css`：新版深色／銀白設計系統、RWD、focus-visible 與 reduced-motion。
- `assets/app.js`：作品資料陣列、作品卡生成、分類篩選、mobile menu、詢價表單前端狀態。
- `assets/images/brand-logo.png`：使用者提供的銀白品牌 Logo 備用資產，待確認正式使用版型。
- `legacy-seo-plan.md`：4 個舊金融 URL 的保留／301 評估計畫。
- `rebrand-change-log.md`：本次變更與後續清單。
- `docs/superpowers/plans/2026-09-11-shunli-ai-studio-v1.md`：實作計畫。

## 3. 刪除檔案

無。4 個舊金融 SEO 頁均保留未修改。

## 4. 首頁完成區塊

- Header、可操作 Hamburger Menu
- Hero Video／Poster 可替換預留區
- 6 個精選作品位置；前 5 個連至指定 YouTube 作品，第 6 個為 Coming Soon
- 作品分類篩選與 lazy thumbnail；沒有一次載入 YouTube iframe
- AI 可以幫你做什麼
- 8 項主要服務
- 房仲／房產影音專區
- 8 步製作流程
- 公開起價方案
- 為什麼選擇順利 AI 製作
- FAQ
- 正式 Google Form 估價區塊、四步流程與外開 fallback
- LINE 次要聯絡 CTA；Email 不顯示，待正式資料

## 5. 尚缺素材

- 正式 Hero Video／WebP Poster
- 正方形 favicon 輸出（目前先沿用寬版 Logo favicon 架構）
- 其餘可公開展示作品與案例資料
- 影片授權、肖像／商標／音樂使用資訊
- 團隊／工作室介紹素材

## 6. 尚缺聯絡資料

- Email 尚未提供，首頁不建立虛構 Email
- LINE 已保留為次要聯絡方式
- YouTube 頻道真實連結已加入；Facebook、Instagram 未提供，未放空連結

## 7. SEO 尚待處理項目

- 已建立新版 Logo-based `assets/images/og-image.svg`；正式品牌分享圖仍可後續替換
- 新服務／案例頁尚未建立
- GA4、GTM、Meta Pixel 尚未加入
- 需在正式網域確認後重新驗證 canonical、OG、sitemap 與 robots
- JSON-LD 目前只放首頁 ProfessionalService，後續案例頁需依真實資料補充

## 8. 舊 URL 尚待處理項目

- 依 `legacy-seo-plan.md` 逐頁檢查搜尋流量與反向連結
- 未在此 branch 執行 301、刪除或 Search Console 操作

## 9. 已知問題

- YouTube thumbnail 使用外部 `i.ytimg.com`，正式上線前需確認外部資源政策與載入穩定性。
- Hero MP4 尚未提供，現以安全 SVG poster fallback；沒有自行使用網路影片素材。
- 正式 Google Form 已接入；若 iframe 載入失敗，提供外開表單 fallback。
- Email 與 Facebook／Instagram 連結尚未提供。
- 本階段已完成本地 Desktop 預覽與 Console 核對；指定多 viewport 仍建議人工再看一次。

## 10. 建議下一步

1. 人工預覽 Desktop 1440px 與 Mobile 375／390／430px。
2. 確認正式 Logo、Hero poster、作品授權與 Email／社群資料。
3. 確認影片託管策略與是否加入正式詢價流程。
4. 再建立作品／服務詳頁與正式 SEO URL。
5. 完成分析事件與隱私文件後，才評估正式部署。

本 branch 未 merge、未 push production、未部署。

## 第三階段：正式 Google 估價表單接入

- 正式 Google Form 已接入：iframe 使用 `https://docs.google.com/forms/d/e/1FAIpQLSfaMP4wm0V_s7RRmuZicc9sSZs1631nOnfOWYWJKEF1689PfQ/viewform?embedded=true`。
- 新增 `#quote` 估價區塊、四步估價流程與「另開估價表單」按鈕。
- 舊假表單已移除，不再保留無法真正送出的前端詢價流程。
- Hero、服務、房產影音、價格方案、FAQ 後 CTA、頁尾 CTA 已統一導向 `#quote`。
- LINE 保留為次要聯絡方式，並預留 `line_click` 事件。
- 預留 `quote_cta_click`、`google_form_open`、`line_click` 事件；目前未設定 GA4 Measurement ID。
- 尚缺 Hero Video／Poster。
- 尚缺部分 Facebook／Instagram 等社群連結。

## 第四階段：首頁首屏與上線前收尾

- Hero 已整理為可替換 `<video>` 結構：`assets/videos/hero-desktop.mp4`、`assets/videos/hero-mobile.mp4` 預留，使用 `autoplay muted loop playsinline preload="metadata"` 與 poster fallback。
- 新增安全的 `assets/posters/hero-poster.svg`，影片素材缺失時不顯示 broken video icon。
- 加入深色 overlay，確保 Hero 文案與 CTA 清楚；`prefers-reduced-motion: reduce` 時停用 Hero video 播放並顯示 poster 背景。
- 新增首屏能力標籤：腳本企劃、分鏡設計、AI 影像生成、後期剪輯、9:16／16:9、AI 口播／數位人。
- 新增品牌 Logo 於 Header、Footer、Mobile 使用；Logo 原始檔未重新設計。
- 新增新版 Logo-based `assets/images/og-image.svg`，更新 OG／Twitter metadata，尺寸 1200×630。
- 新增 favicon 使用架構 `assets/icons/favicon.png`；目前沿用寬版 Logo，後續建議提供正方形 favicon 輸出以改善小尺寸辨識度。
- Footer 保留真實 YouTube 作品頻道與 Google Form、LINE；Facebook／Instagram 尚未提供，因此未放空連結。
- Email 尚未提供，因此 Contact 不再顯示虛構 Email。
- 尚缺 Hero Video／正式 WebP poster，現階段使用安全 SVG poster fallback。

## 第五階段：HuYuHome 作品加入首頁

- 已確認正確作品來源為 `https://www.youtube.com/@HuYuHome`。
- 依使用者確認，將 `I3rpcy-ociQ`、`YA2uF6QWCwc`、`ijOjpwMHtYk` 三支 Shorts 加入首頁 Featured Works。
- 首頁精選作品目前共 9 支，移除 Coming Soon 卡位；未刪除任何檔案。
- `assets/app.js` 的作品資料維持陣列結構，補齊 `youtubeUrl`、`videoId`、`thumbnail`、`categories` 欄位。
- 作品分類擴充為全部、房仲／房產、商業影片、AI 口播、AI 數位人、AI MV、品牌影片、創意短片；沒有作品的分類仍不會顯示內容。
- 三支新增作品使用 YouTube Shorts URL、lazy thumbnail 與品牌 poster fallback。
- 未宣稱客戶名稱、合作關係、AI 製作方式或任何成效資料。
- 本次未 merge `main`、未部署正式站。
- 依使用者去重確認，新增 `ecoE66EEans`；已存在的 `I3rpcy-ociQ`、`YA2uF6QWCwc` 未重複加入。

## Release Candidate 修正驗收

- Hero 切換為 Static Hero Mode，移除不存在 MP4 的 `<source>`，避免瀏覽器發出 Hero video 404 request。
- Hero 現階段以 `assets/posters/hero-poster.svg` 作為完整主視覺，不再顯示「待補」或 Coming Soon 文案。
- Featured Works 實際數量校正為 9 支；房仲／房產作品實際數量校正為 5 支。
- 第 04 支作品 URL 記錄確認為 `https://www.youtube.com/shorts/ijOjpwMHtYk`。
- CTA 視覺權重保留現況，標記 `CTA_PRIORITY_REVIEW` 供人工後續決定。

## Featured Works：網站內 Modal 播放

- 作品卡改為 Thumbnail／作品資訊／播放按鈕，點擊後才動態建立 YouTube iframe。
- 初始載入不預載 YouTube 播放 iframe；iframe 統一使用 `https://www.youtube.com/embed/{videoId}` 格式，包含 Shorts。
- 橫式作品使用 16:9 播放容器；Shorts／直式作品使用 9:16 播放容器。
- Modal 支援關閉按鈕、背景點擊、Escape 與鍵盤 focus trap；關閉時移除 iframe 及其 `src`，停止播放並恢復原焦點。
- 保留「在 YouTube 開啟」次要外部連結，未改動作品資料中的 `videoId`、`youtubeUrl`、`thumbnail`、`categories`、`featured`。

## Final Release Candidate 驗收

- Hero 正式採用 `STATIC_HERO_MODE`，首頁未輸出 `hero-desktop.mp4` 或 `hero-mobile.mp4` source，因此不會產生 Hero MP4 request 或 404。
- 確認首頁 Featured Works 為 9 支，房仲／房產分類為 5 支，作品陣列與既有排序未變更。
- 完成 1920×1080、1440×900、1280×800、1024×768 與 430×932、390×844、375×812 的本地預覽檢查；補強 Mobile Hero 內容收縮、長標題換行與頁面水平溢位防護。
- Modal 驗證包含橫式 16:9、Shorts 9:16、關閉按鈕、Escape、背景關閉、focus trap 與關閉後 iframe 移除。
- 9 支 YouTube thumbnails、Google Form、LINE 與本地資產檢查均回應正常；初始 YouTube iframe 為 0。
- 首頁 title、description、canonical、OG、Twitter、JSON-LD、favicon、robots、sitemap 與 heading hierarchy 已確認；首頁金融舊關鍵字為 0。
- Final RC 判定：`RELEASE_CANDIDATE_WITH_STATIC_HERO`。尚缺 MP4、WebP poster、正方形 favicon、Facebook、Instagram、Email，均不阻擋上線。
- 本次未 merge `main`，未部署正式站。
