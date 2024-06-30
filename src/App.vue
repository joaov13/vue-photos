<script setup>
import { RouterLink, RouterView } from 'vue-router'


</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="@/assets/photo-editing.png" width="125" height="125" />
    <p>PHOTOS API</p>
    <nav>
      <!-- Fazendo os links dos componentes-->
      <RouterLink to="/">Albuns</RouterLink>
      <RouterLink to="/users">Usuários</RouterLink>
      <RouterLink to="/about">Sobre</RouterLink>
    </nav>
  </header>

  <RouterView />
</template>

<style scoped>
header {
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  box-shadow: 0 20px 20px -10px rgba(0, 0, 0, 0.5);
  margin-bottom: 2rem;
  background-color: white;
  padding: 1rem;
  border-radius: 20px;
}
p {
  min-width: fit-content;
  font-size: xx-large;
  font-weight: bolder;
  color: darkblue;
}
nav {
  width: 100%;
  font-size: xx-large;
  text-align: center;
}

nav a {
  padding: 0 5rem;
  text-decoration: none;
}
a:active {
  color: aqua;
}
</style>
