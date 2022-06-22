<template>
  <article
    class="item"
  >
    <img
      v-bind="{
        src: image,
        alt: description,
        width,
        height,
        loading
      }"
      class="image"
    >
    <h2
      v-html="descriptionAndSearchPhrase"
    />
  </article>
</template>

<script>
export default {
  props: {
    description: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    width: {
      type: Number,
      default: null,
    },
    height: {
      type: Number,
      default: null,
    },
    loading: {
      type: String,
      default: 'lazy',
    },
  },

  computed: {
    descriptionAndSearchPhrase () {
      const searchPhrase = this.$route.query.q
      return this.description
        .replace(new RegExp('(\)(' + searchPhrase + ')(\)','ig'), '$1<b class="highlight">$2</b>$3')
    },
  },
}
</script>

<style scoped>
.item {
  text-align: center;
}

.image {
  display: block;
  max-width: 100%;
  height: auto;
  margin: auto;
  animation: positionOffset 60s linear infinite forwards;
  background: linear-gradient(90deg, #f1f1f1 8%, #e4e4e4 20%, #f1f1f1 37%);
}

@keyframes positionOffset {
  0% {
    background-position: 0 0
  }

  to {
    background-position: 10000px 0
  }
}

::v-deep(.highlight) {
  color: red;
}
</style>
