const PROJECTS = [
  {
    name: 'cartograph-mcp',
    url: 'https://github.com/benteigland11/cartograph-mcp',
    language: 'Python',
    featured: true,
    description:
      'MCP server for Cartograph. Gives agents structured access to widget search, validation, checkin, and registry orchestration.',
    tags: ['mcp', 'agents', 'ai'],
  },
  {
    name: 'pypeeker',
    url: 'https://github.com/benteigland11/pypeeker',
    language: 'Python',
    description:
      'Agent first CLI and MCP tool for efficient Python codebase search that surfaces technical debt to agents.',
    tags: ['static analysis', 'mcp', 'python'],
  },
];

function renderProjects() {
  const grid = document.getElementById('project-grid');
  if (!grid) return;

  grid.innerHTML = PROJECTS.map((p) => `
    <a class="project-card reveal" href="${p.url}" target="_blank" rel="noopener">
      ${p.image ? `<div class="project-thumb"><img src="${p.image}" alt="" loading="lazy"></div>` : ''}
      <div class="project-meta">
        <span class="project-lang">${p.language}</span>
        ${p.featured ? '<span class="project-featured">Featured</span>' : ''}
      </div>
      <h3 class="project-title">${p.name}</h3>
      <p class="project-desc">${p.description}</p>
      ${p.tags?.length ? `
        <ul class="project-tags">
          ${p.tags.map((t) => `<li>${t}</li>`).join('')}
        </ul>
      ` : ''}
      <span class="project-link">
        ${p.linkLabel || 'View on GitHub'}
        <svg viewBox="0 0 16 16" fill="none" aria-hidden="true">
          <path d="M4 12L12 4M12 4H6M12 4V10" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </span>
    </a>
  `).join('');

  observeReveals(grid.querySelectorAll('.reveal'));
}

function observeReveals(elements) {
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduced) {
    elements.forEach((el) => el.classList.add('visible'));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const delay = entry.target.dataset.delay || 0;
          setTimeout(() => entry.target.classList.add('visible'), Number(delay));
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
  );

  elements.forEach((el) => observer.observe(el));
}

function initNav() {
  const nav = document.querySelector('.nav');
  const toggle = document.querySelector('.nav-toggle');
  const links = document.querySelector('.nav-links');

  window.addEventListener('scroll', () => {
    nav?.classList.toggle('scrolled', window.scrollY > 20);
  }, { passive: true });

  toggle?.addEventListener('click', () => {
    const open = links?.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(open));
  });

  links?.querySelectorAll('a').forEach((a) => {
    a.addEventListener('click', () => {
      links.classList.remove('open');
      toggle?.setAttribute('aria-expanded', 'false');
    });
  });
}

document.addEventListener('DOMContentLoaded', () => {
  renderProjects();
  observeReveals(document.querySelectorAll('.reveal'));
  initNav();
});
