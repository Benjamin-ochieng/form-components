<template>
  <base-radio
    v-for="radio in radios"
    :key="radio.value"
    :name="name"
    :value="radio.value"
    :label="radio.label"
    :modelValue="modelValue"
    @update:modelValue="$emit('update:modelValue', $event)"
  />
</template>

<script>
export default {
  props: {
    radios: {
      type: Array,
      required: true,
    },
    name: {
      type: [Number, String],
      default: '',
    },
    modelValue: {
      type: [Number, String],
      default: '',
    },
  },
};
</script>

<style lang="scss" scoped></style>
