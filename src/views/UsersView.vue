<template>
  <div class="container">
    <h1>Página de Usuários</h1>
    <ul class="user-list">
      <li v-for="user in users" :key="user.id" @click="goToUserPage(user.id)">
        @{{ user.username }}
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'

const users = ref([])

const router = useRouter()

onMounted(async () => {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    users.value = await response.json()
  } catch (error) {
    console.error('Error fetching users:', error)
  }
})

const goToUserPage = (userId) => {
  router.push(`/user/${userId}`)
}
</script>

<style scoped>
.container {
  margin-bottom: 2rem;
  background-color: white;
  padding: 2rem 8rem;
  border-radius: 20px;
  box-shadow: 0 20px 20px -10px rgba(0, 0, 0, 0.5);
}

.user-list {
  list-style: none;
  padding: 0;
}

.user-list li {
  margin-bottom: 10px;
  padding: 10px;
  background-color: rgb(145, 196, 196);
  border-radius: 10px;
  box-shadow: 0 5px 10px -5px rgba(0, 0, 0, 0.2);
  transition: background-color 0.3s ease;
  cursor: pointer;
}

.user-list li:hover {
  background-color: #e0e0e0;
}
</style>
