export const typesMap = JSON.parse("{\"blog\":{\"/\":{\"path\":\"/blog/article/\",\"indexes\":[0,1,2,3,4,5]}},\"experience\":{\"/\":{\"path\":\"/blog/experience/\",\"indexes\":[6,7]}},\"projects\":{\"/\":{\"path\":\"/projects/\",\"indexes\":[8,9]}}}");

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept();
  if (__VUE_HMR_RUNTIME__.updateBlogType)
    __VUE_HMR_RUNTIME__.updateBlogType(typesMap);
}

if (import.meta.hot)
  import.meta.hot.accept(({ typesMap }) => {
    __VUE_HMR_RUNTIME__.updateBlogType(typesMap);
  });

