<template>
  <div class="flex items-center relative border-b text-sm">
    <select
      :value="modelValue"
      @change="$emit('update:modelValue', $event.target.value)"
      class="w-full appearance-none focus:outline-none bg-transparent"
    >
      <option value="" disabled selected>{{ label }}</option>
      <option v-for="option in options" :key="option" :value="option">
        {{ option }}
      </option>
    </select>
    <div class="flex items-center absolute inset-y-0 right-0 pointer-events-none text-gray-900">
      <base-icon name="dropdown" iconClass="w-3 h-3 fill-current" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    modelValue: {
      type: [Number, String],
      default: '',
    },
    label: {
      type: String,
      default: '',
    },
    options: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped></style>
