<script setup>
import { RouteLink } from '@vuepress/client'
</script>

<template>
  <footer class="my-footer">
    <div class="copyright">
      Copyright © 2026
      <RouteLink to="/">Yesusu</RouteLink>
    </div>
    <div class="social-media">
      <RouteLink to="/updates/" class="updates-entry">
        更新记录
      </RouteLink>
      <a href="https://github.com/ye-susu/susu-blog" target="_blank" rel="noopener noreferrer"
        aria-label="susu-blog 的 GitHub 项目（在新标签页打开）">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true" focusable="false">
          <path
            d="M8.00089 0.211793C3.58038 0.210005 0 3.7886 0 8.20554C0 11.6983 2.23975 14.6674 5.35895 15.7578C5.77902 15.8632 5.71467 15.5647 5.71467 15.3609V13.9756C3.28902 14.2598 3.19071 12.6546 3.02804 12.3865C2.69914 11.8252 1.92157 11.6822 2.15395 11.4141C2.70629 11.1299 3.26936 11.4856 3.9218 12.4491C4.3937 13.148 5.31427 13.03 5.78081 12.9138C5.88269 12.4938 6.10077 12.1184 6.40107 11.827C3.88783 11.3766 2.84035 9.84289 2.84035 8.01963C2.84035 7.13482 3.13172 6.3215 3.70372 5.66548C3.33907 4.58404 3.73768 3.65811 3.79131 3.52047C4.82985 3.42752 5.90951 4.26408 5.99352 4.33021C6.5834 4.17113 7.25729 4.08711 8.01162 4.08711C8.76952 4.08711 9.4452 4.1747 10.0404 4.33558C10.2424 4.18185 11.2434 3.46327 12.2087 3.55086C12.2605 3.6885 12.6502 4.59298 12.307 5.66012C12.8862 6.31793 13.1811 7.13839 13.1811 8.025C13.1811 9.85183 12.1265 11.3873 9.60608 11.8306C10.0261 12.2453 10.2871 12.8209 10.2871 13.4572V15.4682C10.3014 15.6291 10.2871 15.7882 10.5552 15.7882C13.7209 14.721 16 11.7305 16 8.20732C16 3.7886 12.4178 0.211793 8.00089 0.211793Z"
            fill="currentColor" />
        </svg>
      </a>
    </div>
  </footer>
</template>

<style scoped>
.my-footer {
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  align-items: center;
  gap: 0.5rem;
  width: 100%;
  margin: 3rem auto 0;
  padding: 1.25rem 0;
  border-top: 1px solid var(--blog-c-divider);
  font-size: 0.875rem;
  color: var(--blog-c-muted);
}

.my-footer .copyright,
.my-footer .social-media {
  white-space: nowrap;
}

.my-footer .copyright {
  min-width: 0;
}

.my-footer a {
  color: var(--blog-c-muted);
  font-weight: 400;
}

.my-footer a:hover {
  color: var(--blog-c-link-hover);
}

.my-footer .social-media {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.my-footer .social-media a {
  display: inline-flex;
  align-items: center;
  flex-shrink: 0;
}

.my-footer .updates-entry {
  text-decoration: none;
}

@media (max-width: 430px) {
  .my-footer {
    margin-top: 1rem;
    padding: 1rem 0;
    font-size: 0.8125rem;
  }
}
</style>
