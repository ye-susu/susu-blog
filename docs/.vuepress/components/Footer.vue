<template #page-bottom>
  <footer class="my-footer">Copyright © 2025 <a href="/">Yesusu</a></footer>
</template>

<style scoped>
.my-footer {
  text-align: center;
  width: 100%;
  margin: 4.5rem auto auto;
  font-size: 0.875rem;
  color: #6e6e75;
  border-top: 1px solid #f0f0f0;
  padding-top: 1.25rem;
}
.my-footer a {
  color: #6e6e75;
  font-weight: 400;
}
.my-footer a:hover {
  color: #3c3c43;
  font-weight: 500;
}

@media (max-width: 430px) {
  .my-footer {
    margin-top: 2rem;
    font-size: 0.75rem;
    padding-top: 1rem;
  }
}
</style>