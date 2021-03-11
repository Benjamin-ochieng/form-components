<template>
  <div id="nav" class="overflow-y-auto py-10">
    <ul>
      <li class="text-sm text-gray-500 mb-5">
        <router-link :to="{ name: 'Form' }">Form</router-link>
      </li>
      <li class="text-sm text-gray-500 mb-5">
        <router-link :to="{ name: 'Buttons' }">Buttons</router-link>
      </li>
      <li class="text-sm text-gray-500 mb-5">
        <router-link :to="{ name: 'Inputs' }">Inputs</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped></style>
