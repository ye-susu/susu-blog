// 图片加载插件 ------------------------------------------------------------

export function imageLoadingPlugin() {
    return {
      name: 'blog-image-loading',
  
      extendsMarkdown(md) {
        const originalImageRule = md.renderer.rules.image;
  
        md.renderer.rules.image = (
          tokens,
          index,
          options,
          env,
          renderer
        ) => {
          const token = tokens[index];
  
          token.attrSet('v-image-loading', '');
  
          const imageHtml = originalImageRule(
            tokens,
            index,
            options,
            env,
            renderer
          );
  
          const width = Number(token.attrGet('width'));
          const height = Number(token.attrGet('height'));
  
          const hasSize =
            Number.isFinite(width) && width > 0 &&
            Number.isFinite(height) && height > 0;
  
          const style = hasSize
            ? ` style="width:${width}px;aspect-ratio:${width}/${height}"`
            : '';
  
          return `<span class="blog-image-frame"${style}>${imageHtml}</span>`;
        };
      },
    };
  }