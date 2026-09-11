const works = [
  { title: '房子賣不動，不一定是市場不好，可能只是少了一個願意主動出擊的房仲。', youtubeUrl: 'https://www.youtube.com/shorts/I3rpcy-ociQ', videoId: 'I3rpcy-ociQ', thumbnail: 'https://i.ytimg.com/vi/I3rpcy-ociQ/hqdefault.jpg', categories: ['real-estate', 'brand', 'commercial', 'short'], label: '房仲／房產 · 房仲個人品牌 · 短影音', description: '以房仲個人品牌為核心的房產短影音。', featured: true },
  { title: '看屋不是亂看，是精準配屋。高雄買房，留言「配屋」我幫你飛', youtubeUrl: 'https://www.youtube.com/shorts/ecoE66EEans', videoId: 'ecoE66EEans', thumbnail: 'https://i.ytimg.com/vi/ecoE66EEans/hqdefault.jpg', categories: ['real-estate', 'commercial', 'short'], label: '房仲／房產 · 商業短影音', description: '以精準配屋服務為主題的房產短影音。', featured: true },
  { title: '被低估的高雄70期重劃區！緊鄰亞灣、205兵工廠，現在進場是接盤還是暴賺？', youtubeUrl: 'https://www.youtube.com/shorts/YA2uF6QWCwc', videoId: 'YA2uF6QWCwc', thumbnail: 'https://i.ytimg.com/vi/YA2uF6QWCwc/hqdefault.jpg', categories: ['real-estate', 'brand', 'short'], label: '房仲／房產 · 區域內容 · 短影音', description: '高雄重劃區與區域建設內容。', featured: true },
  { title: '片名：《長耳兔媽媽不租了！她決定把房租變成自己的家》', youtubeUrl: 'https://www.youtube.com/shorts/ijOjpwMHtYk', videoId: 'ijOjpwMHtYk', thumbnail: 'https://i.ytimg.com/vi/ijOjpwMHtYk/hqdefault.jpg', categories: ['real-estate', 'brand', 'creative', 'short'], label: '房仲／房產 · 品牌影片 · 創意短片', description: '以租屋與成家為題的房產情境短片。', featured: true },
  { title: '《小羽陪你找個家》MV', youtubeUrl: 'https://www.youtube.com/watch?v=K5b3x7yBO_w', videoId: 'K5b3x7yBO_w', thumbnail: 'https://i.ytimg.com/vi/K5b3x7yBO_w/hqdefault.jpg', categories: ['real-estate', 'mv', 'brand'], label: '房仲／房產 · AI MV · 品牌內容', description: '把找家的故事變成一支完整 MV。', featured: true },
  { title: '《順利陪你走》MV AI製作', youtubeUrl: 'https://www.youtube.com/watch?v=HaFmMfV1ScM', videoId: 'HaFmMfV1ScM', thumbnail: 'https://i.ytimg.com/vi/HaFmMfV1ScM/hqdefault.jpg', categories: ['mv', 'brand'], label: '品牌影片 · AI MV', description: '以情緒與故事為核心的品牌影像。', featured: true },
  { title: '《小資女上班日記》', youtubeUrl: 'https://www.youtube.com/watch?v=4pBuegCMWZ8', videoId: '4pBuegCMWZ8', thumbnail: 'https://i.ytimg.com/vi/4pBuegCMWZ8/hqdefault.jpg', categories: ['creative', 'short'], label: '劇情短片 · AI 短影音', description: '適合社群節奏的生活情境短片。', featured: true },
  { title: '《李煜 虞美人》', youtubeUrl: 'https://www.youtube.com/watch?v=UjoD8asD3po', videoId: 'UjoD8asD3po', thumbnail: 'https://i.ytimg.com/vi/UjoD8asD3po/hqdefault.jpg', categories: ['mv', 'creative'], label: 'AI 影像創作 · 中國風／敘事影像', description: '古典詩詞的影像化呈現。', featured: true },
  { title: '《好奇心真的會害死貓？不，是害慘了窗簾！》', youtubeUrl: 'https://www.youtube.com/watch?v=AXf7mNBRvls', videoId: 'AXf7mNBRvls', thumbnail: 'https://i.ytimg.com/vi/AXf7mNBRvls/hqdefault.jpg', categories: ['creative', 'short'], label: 'AI 創意短片 · 社群短影音', description: '用輕鬆劇情說出一個有記憶點的故事。', featured: true }
];

const worksGrid = document.querySelector('#works-grid');
if (worksGrid) {
  worksGrid.innerHTML = works.filter(work => work.featured).map(work => `
    <article class="work-card" data-category="${work.categories.join(' ')}">
      <button class="work-open" type="button" data-video-id="${work.videoId}" data-video-title="${work.title}" data-vertical="${work.youtubeUrl.includes('/shorts/') ? 'true' : 'false'}" aria-label="在網站內播放${work.title}">
        <div class="work-media"><img src="${work.thumbnail}" alt="${work.title}作品縮圖" loading="lazy" onerror="this.onerror=null;this.src='assets/posters/hero-poster.svg';"><span class="media-play" aria-hidden="true">▶</span></div>
        <div class="work-body"><p class="card-kicker">${work.label}</p><h3>${work.title}</h3><p>${work.description}</p><span class="text-link">網站內播放 ↗</span></div>
      </button>
      <a class="work-youtube-link" href="${work.youtubeUrl}" target="_blank" rel="noopener noreferrer">在 YouTube 開啟 ↗</a>
    </article>`).join('');
}

const filterLabels = [['all', '全部'], ['real-estate', '房仲／房產'], ['commercial', '商業影片'], ['voice', 'AI 口播'], ['digital-human', 'AI 數位人'], ['mv', 'AI MV'], ['brand', '品牌影片'], ['creative', '創意短片']];
const workFilters = document.querySelector('.work-filters');
if (workFilters) workFilters.innerHTML = filterLabels.map(([value, label], index) => `<button class="filter${index === 0 ? ' is-active' : ''}" type="button" data-filter="${value}">${label}</button>`).join('');

const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('#primary-nav');
const closeMenu = () => { if (!nav || !menuButton) return; nav.classList.remove('is-open'); menuButton.setAttribute('aria-expanded', 'false'); };
if (menuButton && nav) {
  menuButton.addEventListener('click', () => { const open = nav.classList.toggle('is-open'); menuButton.setAttribute('aria-expanded', String(open)); });
  nav.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
  document.addEventListener('keydown', event => { if (event.key === 'Escape') closeMenu(); });
}

document.querySelectorAll('.filter').forEach(filter => filter.addEventListener('click', () => {
  const category = filter.dataset.filter;
  document.querySelectorAll('.filter').forEach(item => item.classList.toggle('is-active', item === filter));
  document.querySelectorAll('.work-card').forEach(card => card.classList.toggle('is-hidden', category !== 'all' && !card.dataset.category.split(' ').includes(category) && !card.dataset.category.includes('coming-soon')));
}));

const openWorkModal = trigger => {
  const videoId = trigger.dataset.videoId;
  const title = trigger.dataset.videoTitle;
  if (!videoId || document.querySelector('#work-modal')) return;
  const modal = document.createElement('div');
  modal.id = 'work-modal';
  modal.className = 'work-modal';
  modal.setAttribute('role', 'dialog');
  modal.setAttribute('aria-modal', 'true');
  modal.setAttribute('aria-labelledby', 'work-modal-title');
  modal.innerHTML = `<div class="work-modal-backdrop" data-modal-close="true"><div class="work-modal-panel" role="document"><div class="work-modal-head"><h2 id="work-modal-title">${title}</h2><button class="work-modal-close" type="button" aria-label="關閉作品播放視窗">×</button></div><div class="modal-player${trigger.dataset.vertical === 'true' ? ' is-vertical' : ''}"></div></div></div>`;
  document.body.append(modal);
  const player = modal.querySelector('.modal-player');
  const iframe = document.createElement('iframe');
  iframe.src = `https://www.youtube.com/embed/${encodeURIComponent(videoId)}?autoplay=1&rel=0`;
  iframe.title = title;
  iframe.loading = 'eager';
  iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share';
  iframe.allowFullscreen = true;
  player.append(iframe);
  const closeButton = modal.querySelector('.work-modal-close');
  const focusable = () => [...modal.querySelectorAll('button, [href], iframe')].filter(el => !el.hasAttribute('disabled'));
  const previousFocus = document.activeElement;
  const handleDocumentKeydown = event => {
    if (event.key === 'Escape' && document.querySelector('#work-modal') === modal) {
      event.preventDefault();
      close();
    }
  };
  const close = () => {
    document.removeEventListener('keydown', handleDocumentKeydown, true);
    iframe.removeAttribute('src');
    iframe.remove();
    modal.remove();
    document.body.classList.remove('modal-open');
    previousFocus?.focus();
  };
  modal.addEventListener('click', event => { if (event.target.dataset.modalClose === 'true') close(); });
  closeButton.addEventListener('click', close);
  modal.addEventListener('keydown', event => {
    if (event.key === 'Escape') { event.preventDefault(); close(); return; }
    if (event.key !== 'Tab') return;
    const elements = focusable();
    if (!elements.length) return;
    const first = elements[0];
    const last = elements[elements.length - 1];
    if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
    else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
  });
  document.addEventListener('keydown', handleDocumentKeydown, true);
  document.body.classList.add('modal-open');
  closeButton.focus();
};

document.querySelectorAll('.work-open').forEach(trigger => trigger.addEventListener('click', () => openWorkModal(trigger)));

document.querySelectorAll('[data-track]').forEach(element => element.addEventListener('click', () => {
  element.dataset.trackReady = 'true';
  window.dispatchEvent(new CustomEvent('shunli:track', { detail: { event: element.dataset.track } }));
}));

const googleForm = document.querySelector('#google-form');
const quoteFallback = document.querySelector('#quote-fallback');
if (googleForm && quoteFallback) googleForm.addEventListener('error', () => { quoteFallback.classList.add('is-visible'); });

const heroVideo = document.querySelector('.hero-video');
if (heroVideo) {
  const heroFrame = heroVideo.closest('.hero-frame');
  heroVideo.addEventListener('loadeddata', () => heroFrame?.classList.add('is-video-ready'));
  heroVideo.addEventListener('error', () => heroFrame?.classList.remove('is-video-ready'));
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) heroVideo.pause();
}
