<template>
  <div class="about-view">
    <h1>Projeto de Front-end Vue3</h1>
    <p>Este projeto é um front-end desenvolvido em Vue.js 3 para consumir uma API pública que fornece dados de usuários, posts, comentários, álbuns, fotos e listas de tarefas (to-do lists). O objetivo é criar uma interface amigável para explorar e interagir com esses dados.
    </p>
    
    <h2>Integrantes:</h2>
    <ul class="integrantes-list">
      <li>
        <h3>João</h3>
        <p>Email: joaovcarlotto@gmail.com</p>
        <p>GitHub: <a :href="'https://github.com/joaov13'">joaov13</a></p>
      </li>
      <li>
        <h3>Edson</h3>
        <p>Email: edson.email@email.com</p>
        <p>GitHub: <a :href="'https://github.com/'">GithubEdson</a></p>
      </li>
    </ul>
  </div>
</template>

<script setup>
</script>

<style scoped>
.about-view {
  margin-bottom: 2rem;
  background-color: white;
  padding: 1rem;
  border-radius: 20px;
  box-shadow: 0 20px 20px -10px rgba(0, 0, 0, 0.5);
}

h1 {
  margin-bottom: 0.5rem;
}

p {
  margin: 0.5rem 0;
}

h2 {
  margin-top: 1rem;
}

.integrantes-list {
  list-style: none;
  padding: 0;
}

.integrantes-list li {
  margin-bottom: 1rem;
  padding: 1rem;
  background-color: #f9f9f9;
  border-radius: 10px;
  box-shadow: 0 5px 10px -5px rgba(0, 0, 0, 0.2);
}

.integrantes-list li h3 {
  margin-bottom: 0.5rem;
}

.integrantes-list li a {
  color: #007BFF;
  text-decoration: none;
}

.integrantes-list li a:hover {
  text-decoration: underline;
}
</style>
