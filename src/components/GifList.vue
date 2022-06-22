<template>
  <section
    class="list"
  >
    <gif-item
      v-for="gift in gifs"
      :key="gift.id"
      :image="gift.image"
      :description="gift.description"
      :width="gift.width"
      :height="gift.height"
      loading="lazy"
      class="item"
    />
    <div
      v-for="id in [1, 2, 3, 4, 5]"
      :key="id"
      class="item"
    />
  </section>
</template>

<script setup>
import GifItem from '@/components/GifItem.vue'

const props = defineProps({
  gifs: {
    type: Object,
    required: true,
  },
})
</script>

<style scoped>
.list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: flex-end;
}

.item {
  min-width: 250px;
  max-width: 400px;
  text-align: center;
  padding: calc(var(--base-space) * 0.2);
}
</style>
