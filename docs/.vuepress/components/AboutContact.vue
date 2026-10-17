<script setup>
import { onBeforeUnmount, onMounted, ref, useId } from 'vue';
import { ClientOnly } from '@vuepress/client';

const email = 'yepan1749@gmail.com';
const qrSrc = '/images/wechat-qr.svg';
const uid = useId();
const active = ref('');
const canHover = ref(false);
const dialog = ref(null);
const wechatButton = ref(null);
const copying = ref(false);
const toast = ref('');
const toastSuccess = ref(false);
let modeQuery;
let toastTimer;
let previousOverflow;
let disposed = false;

function syncMode() {
    canHover.value = modeQuery.matches;
    active.value = '';
    if (dialog.value?.open) dialog.value.close();
}
onMounted(() => {
    modeQuery = window.matchMedia('(min-width: 45.0625rem) and (hover: hover) and (pointer: fine)');
    syncMode();
    modeQuery.addEventListener('change', syncMode);
});
function reveal(kind, event) {
    if (canHover.value && event?.pointerType !== 'touch') active.value = kind;
}
function hide(kind) {
    if (active.value === kind) active.value = '';
}
function onFocusOut(kind, event) {
    const item = event.currentTarget;
    if (item.contains(event.relatedTarget) || item.matches(':hover')) return;
    hide(kind);
}
function notify(message, success) {
    if (disposed) return;
    clearTimeout(toastTimer);
    toast.value = message;
    toastSuccess.value = success;
    toastTimer = setTimeout(() => { toast.value = ''; }, 2800);
}
function fallbackCopy() {
    const previousFocus = document.activeElement;
    const input = document.createElement('textarea');
    input.value = email;
    input.setAttribute('readonly', '');
    input.style.cssText = 'position:fixed;left:-100rem;top:0;font-size:1rem';
    document.body.appendChild(input);
    try {
        input.select();
        if (!document.execCommand('copy')) throw new Error('Copy rejected');
    } finally {
        input.remove();
        previousFocus?.focus({ preventScroll: true });
    }
}
async function copyEmail() {
    if (copying.value) return;
    copying.value = true;
    try {
        if (window.isSecureContext && navigator.clipboard?.writeText) {
            await navigator.clipboard.writeText(email);
        } else {
            fallbackCopy();
        }
        notify('邮箱已复制到您的剪贴版', true);
    } catch {
        notify(`复制失败，请手动复制：${email}`, false);
    } finally {
        copying.value = false;
    }
}
function onEmailClick(event) {
    if (canHover.value && event.pointerType !== 'touch') {
        active.value = 'email';
        return;
    }
    return copyEmail();
}
function openWechat(event) {
    if (canHover.value && event.pointerType !== 'touch') {
        active.value = 'wechat';
        return;
    }
    if (!dialog.value || dialog.value.open) return;
    active.value = '';
    previousOverflow = document.body.style.overflow;
    dialog.value.showModal();
    document.body.style.overflow = 'hidden';
}
function unlockScroll() {
    if (previousOverflow !== undefined) {
        document.body.style.overflow = previousOverflow;
        previousOverflow = undefined;
    }
}
function onDialogClose() {
    unlockScroll();
    if (!disposed) wechatButton.value?.focus({ preventScroll: true });
}
function closeOutside(event) {
    if (event.target !== dialog.value) return;
    const rect = dialog.value.getBoundingClientRect();
    if (event.clientX < rect.left || event.clientX > rect.right ||
        event.clientY < rect.top || event.clientY > rect.bottom) dialog.value.close();
}
onBeforeUnmount(() => {
    disposed = true;
    clearTimeout(toastTimer);
    modeQuery?.removeEventListener('change', syncMode);
    dialog.value?.close();
    unlockScroll();
});
</script>

<template>
    <div class="contact-actions" @keydown.esc="active = ''">
        <div class="contact-item" @pointerenter="reveal('email', $event)" @pointerleave="hide('email')"
            @focusin="reveal('email')" @focusout="onFocusOut('email', $event)">
            <button type="button" class="contact-button" :aria-label="canHover ? '邮箱，查看邮箱地址' : '邮箱，点击复制邮箱地址'"
                :aria-describedby="active === 'email' ? `${uid}-email` : undefined" :aria-busy="copying"
                @click="onEmailClick">
                <span class="contact-icon icon-email" aria-hidden="true"></span><span>邮箱</span>
            </button>
            <div :id="`${uid}-email`" class="contact-popover" :class="{ 'is-open': active === 'email' }"
                :aria-hidden="active !== 'email'">
                <div class="popover-card email-card">
                    <span class="email-address">{{ email }}</span>
                    <button type="button" class="email-copy-button" aria-label="复制邮箱地址" title="复制邮箱地址"
                        :aria-busy="copying" @click="copyEmail">
                        <span class="copy-icon" aria-hidden="true"></span>
                    </button>
                </div>
            </div>
        </div>
        <div class="contact-item" @pointerenter="reveal('wechat', $event)" @pointerleave="hide('wechat')"
            @focusin="reveal('wechat')" @focusout="onFocusOut('wechat', $event)">
            <button ref="wechatButton" type="button" class="contact-button" aria-label="微信，查看二维码"
                :aria-haspopup="canHover ? undefined : 'dialog'"
                :aria-describedby="active === 'wechat' ? `${uid}-wechat` : undefined" @click="openWechat">
                <span class="contact-icon icon-wechat" aria-hidden="true"></span><span>微信</span>
            </button>
            <div :id="`${uid}-wechat`" class="contact-popover" :class="{ 'is-open': active === 'wechat' }"
                role="tooltip" :aria-hidden="active !== 'wechat'">
                <div class="popover-card qr-card"><img :src="qrSrc" width="248" height="248" alt="耶稣稣的微信二维码" /></div>
            </div>
        </div>
    </div>

    <dialog ref="dialog" class="wechat-dialog" aria-label="耶稣稣的微信二维码" :aria-describedby="`${uid}-instructions`"
        @click="closeOutside" @close="onDialogClose">
        <p :id="`${uid}-instructions`" class="contact-sr-only">使用微信扫一扫添加好友。点击弹窗外的空白区域或按 Escape 关闭。</p>
        <img :src="qrSrc" width="248" height="248" alt="耶稣稣的微信二维码" />
    </dialog>

    <ClientOnly>
        <Teleport to="body">
            <div class="contact-toast-region" role="status" aria-live="polite" aria-atomic="true">
                <Transition name="contact-toast">
                    <div v-if="toast" class="contact-toast-card">
                        <img v-if="toastSuccess" src="/images/success.svg" width="20" height="20" alt="" />
                        <span>{{ toast }}</span>
                    </div>
                </Transition>
            </div>
        </Teleport>
    </ClientOnly>
</template>

<style scoped>
.contact-actions {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 1.5rem;
}

.contact-item {
    position: relative;
    min-width: 0;
}

.contact-button {
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.75rem;
    width: 100%;
    height: 3.75rem;
    padding: 0 0.625rem;
    border: 0;
    border-radius: 0.625rem;
    background: var(--blog-c-surface);
    color: var(--vp-c-text);
    font: inherit;
    font-size: 1.0625rem;
    font-weight: 500;
    line-height: 1.75rem;
    cursor: pointer;
    transition: none;
}

.contact-button:focus-visible {
    outline: 0.125rem solid var(--vp-c-text);
    outline-offset: 0.25rem;
}

.contact-icon {
    display: block;
    flex: 0 0 auto;
    width: 1.5rem;
    height: 1.5rem;
    background: currentColor;
}

.icon-email {
    mask: url('/images/email.svg') center / contain no-repeat;
}

.icon-wechat {
    mask: url('/images/wechat.svg') center / contain no-repeat;
}

.contact-popover {
    position: absolute;
    z-index: 10;
    left: 50%;
    bottom: 100%;
    width: 18rem;
    padding-bottom: 2rem;
    visibility: hidden;
    opacity: 0;
    transform: translate(-50%, 0.5rem);
    transition: opacity 180ms ease, transform 180ms ease, visibility 180ms;
    pointer-events: none;
}

.contact-popover.is-open {
    visibility: visible;
    opacity: 1;
    transform: translate(-50%, 0);
    pointer-events: auto;
}

.popover-card {
    position: relative;
    box-sizing: border-box;
    width: 18rem;
    border-radius: 1rem;
    background: #fff;
    color: #3c3c44;
    box-shadow: 0 0.5rem 1.5rem rgb(0 0 0 / 12%);
}

.popover-card::after {
    content: '';
    position: absolute;
    left: calc(50% - 0.5rem);
    bottom: -0.5rem;
    width: 1rem;
    height: 0.5rem;
    background: inherit;
    clip-path: polygon(0 0, 100% 0, 50% 100%);
}

.email-card {
    --blog-c-icon-hover: #000;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.625rem;
    height: 4.5rem;
    padding: 1.25rem;
    border: 0;
    font: inherit;
    font-size: 1.125rem;
    font-weight: 500;
    line-height: 1.5625rem;
}

.email-address {
    white-space: nowrap;
    user-select: text;
}

.email-copy-button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    flex: 0 0 auto;
    width: 1.5rem;
    height: 1.5rem;
    padding: 0;
    border: 0;
    border-radius: 0.25rem;
    background: transparent;
    color: inherit;
    cursor: pointer;
    transition: color 150ms ease;
}

.copy-icon {
    display: block;
    width: 1.5rem;
    height: 1.5rem;
    background: currentColor;
    mask: url('/images/copy.svg') center / contain no-repeat;
}

.email-copy-button:active,
.email-copy-button:focus-visible {
    color: var(--blog-c-icon-hover);
}

.email-copy-button:focus-visible {
    outline: 0.125rem solid #3c3c44;
    outline-offset: 0.25rem;
}

@media (hover: hover) and (pointer: fine) {
    .email-copy-button:hover {
        color: var(--blog-c-icon-hover);
    }
}

.qr-card {
    padding: 1.25rem;
}

.qr-card img,
.wechat-dialog img {
    display: block;
    width: 15.5rem;
    max-width: 100%;
    height: auto;
    background: #fff;
    border-radius: 0.125rem;
}

.wechat-dialog {
    box-sizing: border-box;
    width: 18rem;
    max-width: calc(100vw - 2rem);
    padding: 1.25rem;
    border: 0;
    border-radius: 1rem;
    background: #fff;
    color: #3c3c44;
    margin: auto;
    overflow: auto;
    max-height: calc(100dvh - 2rem);
}

.wechat-dialog::backdrop {
    background: rgb(0 0 0 / 60%);
}

.wechat-dialog[open],
.wechat-dialog[open]::backdrop {
    animation: wechat-fade-in 180ms ease-out;
}

@keyframes wechat-fade-in {
    from {
        opacity: 0;
    }

    to {
        opacity: 1;
    }
}

.contact-sr-only {
    position: absolute;
    width: 0.0625rem;
    height: 0.0625rem;
    margin: -0.0625rem;
    overflow: hidden;
    clip-path: inset(50%);
    white-space: nowrap;
}

.contact-toast-region {
    position: fixed;
    z-index: 2000;
    top: calc(6.5rem + env(safe-area-inset-top, 0rem));
    left: 1rem;
    right: 1rem;
    display: flex;
    justify-content: center;
    pointer-events: none;
}

.contact-toast-card {
    display: flex;
    align-items: center;
    gap: 0.625rem;
    box-sizing: border-box;
    max-width: 100%;
    min-height: 3rem;
    padding: 0.8125rem 0.9375rem;
    border: 1px solid var(--blog-c-divider);
    border-radius: 0.5rem;
    background: var(--vp-c-bg);
    color: var(--vp-c-text);
    box-shadow: 0 0.25rem 0.4375rem rgb(0 0 0 / 8%);
    font-size: 0.875rem;
    font-weight: 500;
    line-height: 1.25rem;
    overflow-wrap: anywhere;
}

.contact-toast-card img {
    flex: 0 0 auto;
    width: 1.25rem;
    height: 1.25rem;
}

.contact-toast-enter-active,
.contact-toast-leave-active {
    transition: opacity 180ms ease, transform 180ms ease;
}

.contact-toast-enter-from,
.contact-toast-leave-to {
    opacity: 0;
    transform: translateY(0.5rem);
}

@media (max-width: 45rem) {
    .contact-actions {
        gap: 1rem;
    }

    .contact-button {
        height: 3.25rem;
        font-size: 1rem;
        line-height: 1.375rem;
    }

    .contact-item:nth-child(2) .contact-button {
        gap: 0.625rem;
    }

    .contact-button:active {
        background: var(--blog-c-border);
        color: var(--blog-c-icon-hover);
    }

    .contact-popover {
        display: none;
    }
}

@media (prefers-reduced-motion: reduce) {

    .contact-button,
    .email-copy-button,
    .contact-popover,
    .contact-toast-enter-active,
    .contact-toast-leave-active {
        transition: none;
    }

    .wechat-dialog[open],
    .wechat-dialog[open]::backdrop {
        animation: none;
    }
}
</style>
