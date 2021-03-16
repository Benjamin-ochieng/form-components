<template>
  <label :for="label" class="block relative cursor-pointer pl-8 text-sm mb-4">
    {{ upperFirstLabel }}
    <input
      :value="value"
      :checked="modelValue === value"
      @change="$emit('update:modelValue', value)"
      type="radio"
      :id="label"
      class="absolute w-5 h-5 opacity-0"
      v-bind="$attrs"
    />
    <span
      class="radio w-5 h-5 absolute top-0 left-0 cursor-pointer border border-gray-900 rounded-full"
    ></span>
  </label>
</template>

<script>
import { upperFirst } from 'lodash';

export default {
  props: {
    label: {
      type: [Number, String],
      default: '',
    },
    value: {
      type: [Number, String],
      default: '',
      required: true,
    },
    modelValue: {
      type: [Number, String],
      default: '',
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
