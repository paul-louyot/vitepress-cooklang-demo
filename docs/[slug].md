<script setup>
import IngredientsRenderer  from "./IngredientsRenderer.vue"
import StepsRenderer from "./StepsRenderer.vue"
</script>

# {{$params.metadata.title || $params.slug}}

## Ingredients

<IngredientsRenderer :ingredients="$params.recipe.ingredients" />

## Steps

<StepsRenderer :steps="$params.recipe.steps" />
