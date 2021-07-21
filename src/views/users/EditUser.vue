<template>
  <div class="row">
    <div class="col-12 d-flex">
      <h1>Editar utilizador - {{ user.username }}</h1>
    </div>
  </div>
  <div class="row">
    <div class="col-6 d-flex flex-column align-items-start">
      <label for="">Nome</label>
      <input class="form-control" v-model="user.name" placeholder="Insira aqui o novo nome de utilizador">
    </div>
  </div>
  <div class="row">
    <div class="col-6 d-flex flex-column align-items-start">
      <label for="">Nome de utilizador</label>
      <input class="form-control" v-model="user.username" placeholder="Insira aqui o novo nome de utilizador">
    </div>
  </div>
  <div class="row">
    <div class="col-6 d-flex flex-column align-items-start">
      <label for="">E-mail</label>
      <input class="form-control" v-model="user.email" placeholder="Insira aqui o novo e-mail">
    </div>
  </div>
  <div class="row">
    <div class="col-6 d-flex flex-column align-items-start">
      <label for="">Perfil</label>
      <select v-model="user.profile">
        <option disabled>Seleccione o perfil...</option>
        <option v-for="userProfile in userProfiles" :key="userProfile.id" :value="userProfile.name">
          {{ userProfile.name }}
        </option>
      </select>
    </div>
  </div>
  <div class="row">
    <div class="col-12 d-flex">
      <button @click="updateUser" class="btn btn-success">Guardar</button>
    </div>
  </div>
</template>

<script>
import store from '../../store/index'

export default {
  data(){
    return {
      userID: String(this.$route.params.id)
    }
  },
  methods: {
    updateUser: function(){
      setTimeout(() => {
        this.$router.push('/users');
      }, 100);
    }
  },
  computed: {
    user(){
      return store.state.users.find(
        user => String(user.id) === this.userID
      )
    },
    userProfiles() {
      return this.$store.getters.getUserProfiles;
    }
  }
};
</script>
<style scoped>
h1 {
  text-align: left;
}
</style>