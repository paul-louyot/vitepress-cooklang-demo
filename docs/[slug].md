<script setup>
import { useData } from 'vitepress'
const { params } = useData()

const title = params.value.metadata.title || params.value.slug
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

# {{ title }}

## Ingredients

<ul>
  <li v-for="{ name, quantity, units } of params.recipe.ingredients">
    {{ quantity }}
    {{ units }}
    of
    {{ name }}
  </li>
</ul>

## Steps

<p v-for="step of params.recipe.steps">
  <template v-for="stepItem of step">
    {{ formatStepItem(stepItem) }}
  </template>
</p>
