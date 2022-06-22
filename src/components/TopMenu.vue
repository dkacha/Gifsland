<template>
  <nav
    class="menu"
  >
    <router-link
      v-for="menuItem in menuItems"
      :key="menuItem.route"
      :to="{ name: menuItem.route }"
      v-text="menuItem.title"
      class="item"
    />
  </nav>
</template>

<script setup>
const menuItems = [
  {
    route: 'home',
    title: 'Home',
  },
  {
    route: 'search',
    title: 'Search',
  },
  {
    route: 'about',
    title: 'About app',
  },
]
</script>

<style scoped>
.menu {
  font-size: 20px;
  display: inline-flex;
  flex-wrap: wrap;
  gap: 2em;
}

.item {
  color: var(--base-color);
  text-decoration: none;
}

.router-link-active {
  text-decoration: underline;
}
</style>
