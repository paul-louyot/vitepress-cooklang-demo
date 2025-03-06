<script setup>
const props = defineProps(["ingredients"]);
</script>

<template>
  <ul>
    <li v-for="{ name, quantity, units } of ingredients">
      {{ quantity }}
      {{ units }}
      of
      {{ name }}
    </li>
  </ul>
</template>
