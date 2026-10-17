import { DotLottieVue, setWasmUrl } from '@lottiefiles/dotlottie-vue';
import wasmUrl from '@lottiefiles/dotlottie-web/dotlottie-player.wasm?url';

// 与播放器使用同一版本的引擎，由 Vite 输出带哈希的站内资源。
// 首页和更新记录共用配置，首次播放优先从本站加载引擎。
setWasmUrl(wasmUrl);

export { DotLottieVue };
