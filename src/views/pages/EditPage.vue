<template>
  <div class="row">
    <div class="col-12 d-flex">
      <h1>{{ page.title }}</h1>
    </div>
  </div>
  <div class="row">
    <div class="col-12 d-flex">
      <input v-model="page.title" placeholder="Insira aqui o nome da página">
    </div>
  </div>
  <div class="row">
    <div class="col-12 d-flex">
      <textarea v-model="page.content" name="" id="" cols="30" rows="10" placeholder="Insira aqui o conteúdo da página"></textarea>
    </div>
  </div>
  <div class="row">
    <div class="col-12 d-flex">
      <button class="btn btn-success">Guardar</button>
    </div>
  </div>
</template>

<script>
import store from '../../store/index'

export default {
  data(){
    return {
      pageID: this.$route.params.id
    }
  },
  computed: {
    page(){
      return store.state.pages.find(
        page => page.id === this.pageID
      )
    }
  }
}
</script>
<style scoped>
h1 {
  text-align: left;
}
</style>