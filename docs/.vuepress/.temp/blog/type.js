export const typesMap = {"articles":{"/":{"path":"/articles/","indexes":[0,1,2,3,4,5]}},"projects":{"/":{"path":"/projects/","indexes":[6,7,8,9,10]}}};

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept();
  if (__VUE_HMR_RUNTIME__.updateBlogType)
    __VUE_HMR_RUNTIME__.updateBlogType(typesMap);
}

if (import.meta.hot)
  import.meta.hot.accept(({ typesMap }) => {
    __VUE_HMR_RUNTIME__.updateBlogType(typesMap);
  });

