/**
 * ksc-timestamps.js
 * KSC Triple-Seal Timestamp System
 * Owner: Rabbi Dr. Yonatan Blum
 * Changes require Red Team signoff before deployment.
 * Deploy to: /ksc/assets/ksc-timestamps.js
 *
 * Three calendars. One sealed moment. Every page carries all three.
 * Hebrew date: live fetch from hebcal.com — never calculated, never cached stale.
 * Dreamspell: local calculation — cannot fail.
 * Gregorian: browser-native.
 *
 * Certified by Yonatan Blum against Dreamspell calendar standard.
 */

(function () {
  'use strict';

  /* ── DREAMSPELL MOON NAMES ── */
  const MOON_NAMES = [
    '',           // index 0 unused
    'Magnetic',   // Moon 1
    'Lunar',      // Moon 2
    'Electric',   // Moon 3
    'Self-Existing', // Moon 4
    'Overtone',   // Moon 5
    'Rhythmic',   // Moon 6
    'Resonant',   // Moon 7
    'Galactic',   // Moon 8
    'Solar',      // Moon 9
    'Planetary',  // Moon 10
    'Spectral',   // Moon 11
    'Crystal',    // Moon 12
    'Cosmic'      // Moon 13
  ];

  /**
   * Calculate Dreamspell date for a given Gregorian date.
   *
   * Algorithm (certified by Yonatan Blum):
   * - Anchor: Magnetic Moon (Moon 1) begins July 26 each year
   * - Each moon: exactly 28 days
   * - 13 moons × 28 days = 364 days per Dreamspell year
   * - Day Out of Time: July 25 (day 365, not in any moon)
   * - Leap years: Feb 29 maps to same position as non-leap March 1 would
   *   (Dreamspell uses fixed 365-day year — no adjustment needed)
   *
   * @param {Date} [date] — defaults to current date
   * @returns {Object} { moon, moonName, day } or { special: 'Day Out of Time' }
   */
  function getDreamspell(date) {
    date = date || new Date();

    const year = date.getFullYear();
    const anchorThisYear = new Date(year, 6, 26); // July 26
    const anchor = date >= anchorThisYear
      ? anchorThisYear
      : new Date(year - 1, 6, 26);

    // Day Out of Time: July 25 of the current Dreamspell year
    const dayOutOfTime = new Date(anchor.getFullYear(), 6, 25);
    if (date.toDateString() === dayOutOfTime.toDateString()) {
      return { special: 'Day Out of Time' };
    }

    // Days since Magnetic Moon start (0-indexed)
    const daysSince = Math.floor((date - anchor) / 86400000);

    const moon = Math.floor(daysSince / 28) + 1; // 1–13
    const day  = (daysSince % 28) + 1;           // 1–28

    return {
      moon,
      moonName: MOON_NAMES[moon] || '?',
      day
    };
  }

  /**
   * Generate session storage cache key for Hebrew date.
   * Includes day/evening period to account for Hebrew day
   * beginning at sunset (~18:00 local time approximation).
   *
   * Note: sunset is approximated at 18:00 local time.
   * Hebrew date may briefly reflect prior day until fetch refreshes.
   *
   * @returns {string} cache key
   */
  function getHebCacheKey() {
    const now = new Date();
    const dateStr = now.toISOString().split('T')[0]; // YYYY-MM-DD
    const period = now.getHours() >= 18 ? 'eve' : 'day';
    return `ksc-hebrew-${dateStr}-${period}`;
  }

  /**
   * Fetch Hebrew date from hebcal.com.
   * Caches in sessionStorage to reduce API calls across page navigations.
   * Cache invalidates at sunset transition (18:00 approximation).
   *
   * @param {Date} [date] — defaults to current date
   * @returns {Promise<Object|null>} hebcal JSON or null on failure
   */
  async function fetchHebrewDate(date) {
    date = date || new Date();
    const key = getHebCacheKey();

    // Check session cache
    try {
      const cached = sessionStorage.getItem(key);
      if (cached) return JSON.parse(cached);
    } catch (e) { /* sessionStorage unavailable — proceed to fetch */ }

    // Live fetch
    const url = `https://www.hebcal.com/converter?gd=${date.getDate()}&gm=${date.getMonth() + 1}&gy=${date.getFullYear()}&g2h=1&cfg=json`;

    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 5000);

      const response = await fetch(url, { signal: controller.signal });
      clearTimeout(timeoutId);

      if (!response.ok) throw new Error(`HTTP ${response.status}`);

      const data = await response.json();
      try { sessionStorage.setItem(key, JSON.stringify(data)); } catch (e) {}
      return data;

    } catch (e) {
      return null; // caller handles failure state
    }
  }

  /**
   * Render all three timestamps to the page.
   * Targets elements: #ts-gregorian, #ts-hebrew, #ts-dreamspell
   * Called on DOMContentLoaded.
   */
  async function renderTimestamps() {
    const now = new Date();

    // ── Gregorian (synchronous) ──
    const tsGreg = document.getElementById('ts-gregorian');
    if (tsGreg) {
      tsGreg.textContent = now.toLocaleDateString('en-US', {
        month: 'long',
        day: 'numeric',
        year: 'numeric'
      });
    }

    // ── Dreamspell (synchronous) ──
    const tsDream = document.getElementById('ts-dreamspell');
    if (tsDream) {
      const ds = getDreamspell(now);
      tsDream.textContent = ds.special
        ? ds.special
        : `Day ${ds.day}, ${ds.moonName} Moon ${ds.moon}`;
    }

    // ── Hebrew (async — live fetch) ──
    const tsHeb = document.getElementById('ts-hebrew');
    if (tsHeb) {
      const data = await fetchHebrewDate(now);
      if (data && data.hebrew) {
        tsHeb.textContent = data.hebrew;
      } else {
        tsHeb.textContent = '[date unavailable]';
        tsHeb.classList.add('fail');
      }
    }
  }

  /**
   * Staleness check for manually maintained data nodes.
   * After 18 months from build date, adds amber "· verify current" warning
   * to source labels on manual nodes (excluding staleness-exempt nodes).
   */
  function checkStaleness() {
    const meta = document.querySelector('meta[name="ksc-build-date"]');
    if (!meta || !meta.content) return;

    const buildDate = new Date(meta.content);
    const monthsElapsed = (new Date() - buildDate) / (1000 * 60 * 60 * 24 * 30);

    if (monthsElapsed > 18) {
      document.querySelectorAll(
        '[data-manual-node]:not([data-staleness-exempt]) .data-source'
      ).forEach(el => {
        el.textContent += ' · verify current';
        el.classList.add('stale');
      });
    }
  }

  /**
   * Audit log toggle.
   * Called by onclick on the Audit Log nav button.
   * Declared on window so inline onclick can find it.
   */
  window.toggleAudit = function () {
    const panel = document.getElementById('audit-panel');
    const btn   = document.getElementById('audit-toggle');
    if (!panel) return;

    const open = panel.classList.toggle('visible');
    panel.setAttribute('aria-hidden', String(!open));
    if (btn) {
      btn.setAttribute('aria-expanded', String(open));
      btn.classList.toggle('active', open);
    }
    if (open) {
      panel.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
  };

  /* ── EXPORTS ── */
  window.KSCTimestamps = {
    getDreamspell,
    fetchHebrewDate,
    renderTimestamps,
    checkStaleness
  };

  /* ── AUTO-INIT ── */
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      renderTimestamps();
      checkStaleness();
    });
  } else {
    renderTimestamps();
    checkStaleness();
  }

})();

