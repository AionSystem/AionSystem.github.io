/**
 * ksc-nav.js
 * KSC Navigation Component
 * Owner: Kai Svensson
 * Changes require Red Team signoff before deployment.
 * Deploy to: /ksc/assets/ksc-nav.js
 *
 * ADDING A NEW TIER:
 * Add one entry to NAV_ITEMS below. That is the complete change set.
 * No other file requires modification.
 * Marcus Osei certifies at each tier addition.
 */

(function () {
  'use strict';

  /* ── NAV ITEMS REGISTRY ──────────────────────────────────────────
     To add a new tier: append one object to this array.
     Format: { label, href, id }
     id must match the page's <body id="..."> attribute.
     ────────────────────────────────────────────────────────────── */
  const NAV_ITEMS = [
    { label: 'Overview',   href: '/ksc/',              id: 'ksc-hub' },
    { label: 'Type 0',     href: '/ksc/type-0/',       id: 'ksc-type-0' },
    { label: 'Type I',     href: '/ksc/type-i/',       id: 'ksc-type-i' },
    { label: 'Type I.Ω',  href: '/ksc/type-i-omega/', id: 'ksc-type-i-omega' },
    { label: 'Type II',    href: '/ksc/type-ii/',      id: 'ksc-type-ii' },
    // ADD NEW TIERS HERE — one line per tier
    // { label: 'Type III', href: '/ksc/type-iii/', id: 'ksc-type-iii' },
  ];

  /**
   * Build and inject the KSC navigation bar.
   * Reads current page from <body id="..."> to set active state.
   * Called on DOMContentLoaded.
   */
  function buildNav() {
    const nav = document.querySelector('.ksc-nav');
    if (!nav) return;

    const currentId = document.body.id;
    const logo = nav.querySelector('.nav-logo');

    // Build nav items container
    let itemsHtml = '<div class="nav-items" id="nav-items">';

    NAV_ITEMS.forEach(item => {
      const isActive = currentId === item.id;
      itemsHtml += `<a href="${item.href}" class="nav-item${isActive ? ' active' : ''}"${isActive ? ' aria-current="page"' : ''}>${item.label}</a>`;
    });

    // Audit Log button (always last)
    const auditActive = document.querySelector('.audit-panel') !== null;
    if (auditActive) {
      itemsHtml += `<button class="nav-item audit-btn" id="audit-toggle" aria-expanded="false" aria-controls="audit-panel" onclick="toggleAudit()">Audit Log</button>`;
    }

    itemsHtml += '</div>';

    // Inject after logo (or append if no logo)
    if (logo) {
      logo.insertAdjacentHTML('afterend', itemsHtml);
    } else {
      nav.innerHTML += itemsHtml;
    }

    // Scroll active item into view (mobile nav)
    scrollActiveIntoView();
  }

  /**
   * Scroll the active nav item into the visible portion of the nav strip.
   * Handles the case where the active tier is off-screen on mobile.
   */
  function scrollActiveIntoView() {
    const active = document.querySelector('.nav-item.active');
    if (active) {
      // Small delay to ensure layout is complete
      setTimeout(() => {
        active.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
      }, 100);
    }
  }

  // Init
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', buildNav);
  } else {
    buildNav();
  }

})();

