<script setup>
import { computed, defineAsyncComponent, ref, watch } from 'vue';
import { ClientOnly, RouteLink, usePageData } from '@vuepress/client';
import { useDarkMode } from '@vuepress/theme-default/client';
import ParentLayout from '@vuepress/theme-default/layouts/Layout.vue';
import Footer from '../components/Footer.vue';
import { messageLines, linkSegments } from '../utils/updateText.js';

const page = usePageData();
const dark = useDarkMode();
const ready = ref(false);
const failed = ref(false);
const heroSrc = computed(() => dark.value
    ? page.value.frontmatter.animationDark || page.value.frontmatter.animation
    : page.value.frontmatter.animation);
watch(heroSrc, () => { ready.value = false; failed.value = false; }, { flush: 'sync' });

const Animation = defineAsyncComponent({
    loader: () => import('../components/UpdatesAnimation.vue'),
    suspensible: false,
    timeout: 60000,
    errorComponent: { render: () => null },
    onError(_error, _retry, fail) { failed.value = true; fail(); },
});

const records = computed(() => (page.value.updates || []).map((record) => ({
    ...record,
    lines: messageLines(record.message).map((line) =>
        linkSegments(line, record.links)
    ),
})));
</script>

<template>
    <ParentLayout>
        <template #page>
            <main class="updates-page">
                <h1 class="updates-sr-only">更新记录</h1>
                <div class="updates-hero" aria-hidden="true">
                    <div class="updates-hero-slot">
                        <!-- 设计稿静态画面：JS 尚未加载或动画失败时都可显示。 -->
                        <img v-if="!ready" src="/images/updates-cover.svg" alt="" width="144" height="128"
                            class="updates-cover" loading="eager" decoding="async" />
                        <ClientOnly>
                            <Animation v-if="heroSrc && !failed" :key="heroSrc" :src="heroSrc" class="updates-animation"
                                :class="{ 'is-loading': !ready }" @ready="ready = true"
                                @error="failed = true; ready = false" />
                        </ClientOnly>
                    </div>
                </div>
                <ul class="updates-timeline">
                    <li v-for="record in records" :id="`update-${record.sha}`" :key="record.sha" class="update-record">
                        <time class="update-date" :datetime="record.date">{{ record.date }}</time>
                        <div class="update-card">
                            <ul v-if="record.lines.length" class="update-items">
                                <li v-for="(segments, index) in record.lines" :key="index">
                                    <template v-for="(segment, segmentIndex) in segments" :key="segmentIndex">
                                        <RouteLink v-if="segment.path" :to="segment.path"
                                            class="update-link vp-external-link-icon">{{
                                                segment.text }}</RouteLink>
                                        <span v-else>{{ segment.text }}</span>
                                    </template>
                                </li>
                            </ul>
                            <p v-else class="update-no-message">该提交未填写说明。</p>
                        </div>
                    </li>
                </ul>
                <Footer />
            </main>
        </template>
    </ParentLayout>
</template>

<style scoped>
.updates-page {
    box-sizing: border-box;
    width: 100%;
    max-width: 50rem;
    margin: 0 auto;
    padding: 6rem 1.25rem 2rem;
    color: var(--vp-c-text);
}

.updates-page :deep(.my-footer) {
    margin-top: 3rem;
}

.updates-sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip-path: inset(50%);
    white-space: nowrap;
    border: 0;
}

.updates-hero {
    height: 180px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 35px;
}

.updates-hero-slot {
    position: relative;
    width: 144px;
    height: 128px;
}

.updates-cover,
.updates-animation {
    position: absolute;
    inset: 0;
    width: 144px;
    height: 128px;
    display: block;
}

.updates-cover {
    object-fit: contain;
}

.updates-animation.is-loading {
    opacity: 0;
}

.updates-timeline {
    list-style: none;
    padding: 0;
    margin: 0;
}

.update-record {
    position: relative;
    padding: 0 0 32px 32px;
    scroll-margin-top: 6rem;
}

.update-record::before {
    content: '';
    position: absolute;
    left: 0.5px;
    top: 4.5px;
    box-sizing: border-box;
    width: 13px;
    height: 13px;
    border: 2.5px solid var(--vp-c-text);
    border-radius: 50%;
    background: var(--vp-c-bg);
}

.update-record:not(:last-child)::after {
    content: '';
    position: absolute;
    left: 6.25px;
    top: 22px;
    bottom: 0;
    width: 1.5px;
    background: var(--blog-c-border);
}

.update-record:last-child {
    padding-bottom: 0;
}

.update-date {
    display: block;
    font-size: 1rem;
    line-height: 22px;
    font-weight: 600;
    margin-bottom: 16px;
}

.update-card {
    padding: 22px 16px;
    border-radius: 10px;
    background: var(--blog-c-surface);
}

.update-items {
    list-style: disc;
    margin: 0;
    padding-left: 1.5em;
    font-size: 0.875rem;
    line-height: 20px;
}

.update-items>li {
    margin: 0 0 8px;
    white-space: pre-wrap;
    overflow-wrap: anywhere;
}

.update-items>li:last-child {
    margin-bottom: 0;
}

.update-link {
    --external-link-c-icon: currentColor;
    color: inherit;
    font-weight: 500;
    text-decoration: underline;
    text-underline-offset: 3px;
    transition: color 0.15s;
}

.update-link:focus-visible {
    color: var(--blog-c-icon-hover);
    outline: 2px solid var(--vp-c-text);
    outline-offset: 3px;
}

.update-no-message {
    margin: 0;
    color: var(--blog-c-muted);
    font-size: 0.875rem;
}

@media (hover: hover) and (pointer: fine) {
    .update-link:hover {
        color: var(--blog-c-icon-hover);
    }
}

@media (prefers-reduced-motion: reduce) {
    .update-link {
        transition: none;
    }
}

@media (max-width: 720px) {
    .updates-page {
        padding-bottom: 1.25rem;
    }
}
</style>
