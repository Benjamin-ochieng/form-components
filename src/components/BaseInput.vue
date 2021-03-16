<template>
  <div class="relative border-b focus-within:border-blue-700">
    <input
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
      placeholder=" "
      v-bind="$attrs"
      class="block w-full appearance-none focus:outline-none bg-transparent text-sm"
    />
    <label for="username" class="absolute top-0 -z-1 duration-300 origin-0">{{ label }}</label>
  </div>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      default: 'label',
    },
    modelValue: {
      type: [String, Number],
      default: '',
    },
  },
};
</script>

<style lang="scss" scoped></style>
