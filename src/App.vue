<script setup>
import { randomBgColorInit } from '@/services/randomBgColor'
import { RouterLink, RouterView } from 'vue-router'
import SearchForm from '@/components/SearchForm.vue'
import TopMenu from '@/components/TopMenu.vue'
randomBgColorInit()
</script>

<template>
  <div
    class="container"
  >
    <header
      class="header"
    >
      <router-link
        :to="{ name: 'home' }"
        class="logo"
      >
        Gifsland
      </router-link>

      <search-form
        class="search"
      />

      <top-menu />
    </header>

    <main
      class="content"
    >
      <router-view />
    </main>
  </div>
</template>

<style>
:root {
  --base-space: 30px;
  --base-color: blue;
  --base-radius: 20px;
}

body {
  font-family: sans-serif;
  transition: background-color 5s;
  margin: var(--base-space);
}

.container {
  position: relative;
  max-width: 2000px;
  margin: 0 auto;
  background: white;
  border-radius: var(--base-radius);
}

.header {
  position: sticky;
  top: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: var(--base-space);
  box-shadow: 0 2px 30px 0 var(--base-color);
  margin-bottom: var(--base-space);
  background: #fff;
  border-radius: var(--base-radius);
}

.logo {
  display: block;
  font-size: 40px;
  margin-right: auto;
  text-decoration: none;
  color: var(--base-color);
}

.search {
  margin: auto;
  width: 33%;
}

.content {
  padding: var(--base-space);
}
</style>
