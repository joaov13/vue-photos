<script setup>
import { ref, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const user = ref(null)
const posts = ref([])
const topicos = ref([])

const route = useRoute()
const router = useRouter()

onMounted(async () => {
  try {
    const userId = route.params.id
    const userResponse = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
    user.value = await userResponse.json()

    const postsResponse = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
    posts.value = await postsResponse.json()

    const todosResponse = await fetch(`https://jsonplaceholder.typicode.com/todos?userId=${userId}`)
    topicos.value = await todosResponse.json()
  } catch (error) {
    console.error('Error fetching user details:', error)
  }
})

const goToPost = (postId) => {
  router.push(`/post/${postId}`)
}
</script>

<template>
  <div class="container" v-if="user">
    <h1>{{ user.name }}</h1>
    <p>Username: {{ user.username }}</p>
    <p>Email: {{ user.email }}</p>
    <p>Phone: {{ user.phone }}</p>
    <p>Website: {{ user.website }}</p>
    <p>Company: {{ user.company.name }}</p>

    <h3>Endereço:</h3>
    <p>
      {{ user.address.street }}, {{ user.address.suite }}, {{ user.address.city }},
      {{ user.address.zipcode }}
    </p>

    <div class="posts-container">
      <h3>Postagens:</h3>
      <ul class="posts">
        <li v-for="post in posts" :key="post.id" class="post-item">
          <h4 @click="goToPost(post.id)">{{ post.title }}</h4>
          <p>{{ post.body }}</p>
        </li>
      </ul>
    </div>

    <div class="topicos-container">
      <h3>Tópicos de interesse:</h3>
      <ul class="topicos">
        <li v-for="topico in topicos" :key="todosid" class="topicos-item">
          <p class="status">{{ topico.completed ? 'Ja fotografei' : 'Quero fotografar' }}</p>
          <p>{{ topico.title }}</p>
        </li>
      </ul>
    </div>
  </div>
  <div v-else>
    <p>Carregando dados do usuário...</p>
  </div>
</template>



<style scoped>
.container {
  margin-bottom: 2rem;
  background-color: white;
  padding: 0 5rem;
  border-radius: 20px;
  box-shadow: 0 20px 20px -10px rgba(0, 0, 0, 0.5);
}

h2 {
  margin-bottom: 0.5rem;
}

p {
  margin: 0.5rem 0;
}

h3 {
  margin-top: 1rem;
}

.posts-container,
.topicos-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 80vh;
  overflow-y: auto;
  margin-top: 2rem;
  padding: 1rem;
  border-radius: 20px;
  box-shadow: 0 20px 20px -10px rgba(0, 0, 0, 0.5);
  background-color: rgb(145, 196, 196);
}
.posts-container::-webkit-scrollbar, .topicos-container::-webkit-scrollbar {
  display: none;
}

.posts, .topicos {
  list-style-type: none;
  padding: 0;
  width: 50%;
  text-align: center
}

.post-item,
.topicos-item {
  margin-bottom: 1rem;
  padding: 1rem;
  background-color: #f9f9f9;
  border-radius: 10px;
  box-shadow: 0 5px 10px -5px rgba(0, 0, 0, 0.2);
}

.post-item h4,
.topicos-item p {
  margin-bottom: 0.5rem;
}

.post-item {
  cursor: pointer;
}

.status{
  font-weight: bolder;
}
</style>
