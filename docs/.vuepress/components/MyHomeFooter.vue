<script setup>
import { ref } from "vue";
const isQRCodeVisible = ref(false);
const showQRCode = () => {
  isQRCodeVisible.value = true;
};
const hideQRCode = () => {
  isQRCodeVisible.value = false;
};
defineExpose({ isQRCodeVisible, showQRCode, hideQRCode });
</script>
<template>
  <div class="my-home-footer">
    <div class="footer-nav">
      <a href="https://www.zcool.com.cn/u/1072459"
        ><img src="/images/zcool.webp" alt="zcool" class="image-item"
      /></a>
      <a href="#" @click.prevent="showQRCode"
        ><img src="/images/wechat.webp" alt="wechat" class="image-item"
      /></a>
      <a href="https://www.instagram.com/yepan3/"
        ><img src="/images/ins.webp" alt="ins" class="image-item"
      /></a>
      <a href="https://x.com/yesusu6"
        ><img src="/images/x.webp" alt="X" class="image-item"
      /></a>
    </div>
    <div class="line">
      <img src="/images/footerline.webp" alt="footerline" />
    </div>
    <div v-if="isQRCodeVisible" class="modal" @click.self="hideQRCode">
      <div class="modal-content">
        <span class="close-btn" @click="hideQRCode">&times;</span>
        <img
          src="/images/qrcode.webp"
          alt="WeChat QR Code"
          class="qrcode-img"
        />
      </div>
    </div>
  </div>
</template>
<style scoped>
.footer-nav {
  margin-top: 7.75rem;
  display: flex;
  justify-content: center;
  gap: 2rem;
}
.image-item {
  width: 2.625rem;
}
.my-home-footer {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.line img {
  width: 19.375rem;
}
.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.4);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
}
.modal-content {
  background: white;
  padding: 0.75rem;
  border-radius: 0.75rem;
  box-shadow: 0 0.25rem 1rem rgba(0, 0, 0, 0.1);
  position: relative;
  text-align: center;
}
.close-btn {
  position: absolute;
  top: 0.75rem;
  right: 1rem;
  font-size: 1.75rem;
  cursor: pointer;
}

.qrcode-img {
  max-width: 18rem;
  height: auto;
  display: block;
}

@media (max-width: 768px) {
  .footer-nav {
    margin-top: 2.5rem;
    gap: 1.5rem;
  }
  .image-item {
    width: 2.25rem;
  }
  .line img {
    width: 16rem;
  }
}
</style>