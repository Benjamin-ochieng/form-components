<template>
  <div id="app" class="font-inter text-gray-900">
    <Header />
    <div class="flex w-full max-w-7xl mx-auto">
      <div id="navWrapper" class="h-full overflow-y-auto w-60">
        <Nav />
      </div>
      <div class="contentWrapper h-screen overflow-y-visible flex-grow">
        <Content />
      </div>
    </div>
  </div>
</template>

<script>
import Header from '@/components/Header.vue';
import Nav from '@/components/Nav.vue';
import Content from '@/components/Content.vue';

export default {
  components: {
    Header,
    Nav,
    Content,
  },
};
</script>

<style lang="scss" scoped></style>
