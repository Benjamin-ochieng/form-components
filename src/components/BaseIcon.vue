<template>
  <div>
    <svg :class="iconClass">
      <use v-bind="{ 'xlink:href': `/icons-sprite.svg#${name}` }" />
    </svg>
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      default: '',
    },
    iconClass: {
      type: String,
      default: 'w-4 h-4',
    },
  },
};
</script>

<style lang="scss" scoped></style>
