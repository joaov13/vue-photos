<template>
  <div class="container">
    <h1>Álbuns de fotos dos usuários</h1>

    <div class="container_albuns">
      <!-- percorre o array de albums para retornar todos os albums,
       e dentro desse for há outro for para retornar as fotos-->
      <div v-for="(album, index) in albums" :key="index" class="albums">
        <h3>Título: {{ album.title }}</h3>

        <div class="album">
          <div v-for="(photo, photoIndex) in album.photos" :key="photoIndex" class="photo">
            <img :src="photo.thumbnailUrl" alt="Photo" />

          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
  import { ref, onMounted } from 'vue'

  const albums = ref([])
  onMounted(async () => {

    // Cria uma variável e adiciona a resposta do fetch
    const albumsResponse = await fetch('https://jsonplaceholder.typicode.com/albums')
    // Passa a resposta do fetch como um json, criando vários objetos em albums
    const albumsData = await albumsResponse.json()

    const photosResponse = await fetch('https://jsonplaceholder.typicode.com/photos')
    const photosData = await photosResponse.json()

    // Agrupar as fotos por álbum (usando o ID)
    const groupedPhotos = photosData.reduce((acc, photo) => {
      if (!acc[photo.albumId]) {
        acc[photo.albumId] = []
      }
      acc[photo.albumId].push(photo)
      return acc
    }, {})

    // Mapear os álbuns com suas fotos correspondentes
    // Cria uma nova propriedade em albums que são as fotos já mapeadas pelo ID
    albums.value = albumsData.map((album) => ({
      ...album,
      photos: groupedPhotos[album.id] || []
    }))
  
});

  

</script>

<style scoped>
.container {
  margin-bottom: 2rem;
  background-color: white;
  padding: 1rem;
  border-radius: 20px;
  box-shadow: 0 20px 20px -10px rgba(0, 0, 0, 0.5);
}
.container_albuns {
  height: 80vh;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
}

.albums {
  display: flex;
  flex-direction: column;
}

.album {
  display: flex;
  flex-flow: row wrap;
}

.photo img {
  margin: 5px;
  width: 150px;
}

.container_albuns::-webkit-scrollbar {
  display: none;
}
</style>
