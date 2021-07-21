<template>
  <div class="row">
    <div class="col-12 d-flex">
      <h1>Editar perfil de utilizador - {{ userProfile.name }}</h1>
    </div>
  </div>
  <div class="row">
    <div class="col-12 d-flex">
      <input v-model="userProfile.name" placeholder="Insira aqui o nome da página">
    </div>
  </div>
  <div class="row">
    <div class="col-12 d-flex">
      <button @click="updateUserProfile" class="btn btn-success">Guardar</button>
    </div>
  </div>
</template>

<script>
import store from '../../store/index'

export default {
  data(){
    return {
      userProfileID: String(this.$route.params.id)
    }
  },
  methods: {
    updateUserProfile: function(){
      setTimeout(() => {
        this.$router.push('/user-profiles');
      }, 100);
    }
  },
  computed: {
    userProfile(){
      return store.state.userProfiles.find(
        userProfile => String(userProfile.id) === this.userProfileID
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