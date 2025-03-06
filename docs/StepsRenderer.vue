<script setup>
const props = defineProps(["steps"]);
const formatStepItem = (item) => {
  if (item.type === "text") {
    return item.value;
  }
  if (item.type === "cookware") {
    return item.name;
  }
  return [item.quantity, item.units, item.name].filter(Boolean).join(" ");
};
</script>

<template>
  <p v-for="step of steps">
    <template v-for="stepItem of step">
      {{ formatStepItem(stepItem) }}
    </template>
  </p>
</template>
