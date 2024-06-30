<template>
  <div class="container" v-if="post && comments.length">
    <h2>{{ post.title }}</h2>
    <p>{{ post.body }}</p>

    <h3>Comentários:</h3>
    <ul class="comments">
      <li v-for="comment in comments" :key="comment.id" class="comment-item">
        <h4>{{ comment.name }}</h4>
        <p>{{ comment.body }}</p>
        <p>Email: {{ comment.email }}</p>
      </li>
    </ul>
  </div>
  <div v-else>
    <p>Carregando dados do post...</p>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'

const post = ref(null)
const comments = ref([])

const route = useRoute()

onMounted(async () => {
  
  // Pega um post específico e todos os comentários do post
  
  const postId = route.params.id
  const postResponse = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
  post.value = await postResponse.json()

  const commentsResponse = await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`)
  comments.value = await commentsResponse.json()

})
</script>

<style scoped>
.container {
  margin-bottom: 2rem;
  background-color: white;
  padding: 1rem;
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

.comments {
  list-style-type: none;
  padding: 0;
}

.comment-item {
  margin-bottom: 1rem;
  padding: 1rem;
  background-color: #f9f9f9;
  border-radius: 10px;
  box-shadow: 0 5px 10px -5px rgba(0, 0, 0, 0.2);
}

.comment-item h4 {
  margin-bottom: 0.5rem;
}
</style>
