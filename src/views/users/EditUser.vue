<template>
  <div class="row">
    <div class="col-12 d-flex">
      <h1>Editar utilizador - {{ user.username }}</h1>
    </div>
  </div>
  <div class="row">
    <div class="col-12 d-flex">
      <input v-model="user.username" placeholder="Insira aqui o novo nome de utilizador">
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
      userID: this.$route.params.id
    }
  },
  computed: {
    user(){
      return store.state.users.find(
        user => user.id === this.userID
      )
    }
  }
};
</script>
<style scoped>
h1 {
  text-align: left;
}
</style>