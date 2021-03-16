<template>
  <label :for="label" class="container relative pl-8 cursor-pointer text-sm">
    {{ upperFirstLabel }}
    <input
      :checked="modelValue"
      @change="$emit('update:modelValue', $event.target.checked)"
      :id="label"
      type="checkbox"
      v-bind="$attrs"
      class="absolute w-0 h-0 opacity-0"
    />
    <span
      class="checkmark w-5 h-5 absolute top-0 left-0 border border-gray-900 cursor-pointer"
    ></span>
  </label>
</template>

<script>
import { upperFirst } from 'lodash';

export default {
  props: {
    label: {
      type: String,
      default: '',
      required: true,
    },
    modelValue: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    upperFirstLabel() {
      return upperFirst(this.label);
    },
  },
};
</script>

<style lang="scss" scoped></style>
