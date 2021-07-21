<template>
  <div class="row">
    <div class="col-12">
      <h1>Adicionar utilizador</h1>
    </div>
  </div>
  <div class="row">
    <div class="col-6 d-flex">
      <input class="form-control" v-model="name" placeholder="Insira aqui o nome">
    </div>
  </div>
  <div class="row">
    <div class="col-6 d-flex">
      <input class="form-control" v-model="username" placeholder="Insira aqui o nome de utilizador">
    </div>
  </div>
  <div class="row">
    <div class="col-6 d-flex">
      <input class="form-control" v-model="email" placeholder="Insira aqui o e-mail">
    </div>
  </div>
  <div class="row">
    <div class="col-6 d-flex">
      <select v-model="profile">
        <option value="">Seleccione o perfil...</option>
        <option v-for="userProfile in userProfiles" :key="userProfile.id" :value="userProfile.name">
          {{ userProfile.name }}
        </option>
      </select>
    </div>
  </div>
  <div class="row">
    <div class="col-6 d-flex">
      <button @click="addUser" class="btn btn-success">Guardar</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      id: Number(this.$store.state.users[0].id) + 1,
      username: '',
      name: '',
      email: '',
      profile: ''
    };
  },
  methods: {
    addUser: function() {
      const { id, username, name, email, profile } = this;
      this.id = id;
      this.username = username;
      this.name = name;
      this.email = email;
      this.profile = profile;

      this.$store.commit("addUser", { id, username, name, email, profile });

      setTimeout(() => {
        this.$router.push('/users');
      }, 100);
    }
  },
  computed: {
    users: function() {
      return this.$store.state.users;
    },
    userProfiles() {
      return this.$store.getters.getUserProfiles;
    }
  }
}
</script>

<style scoped>
  h1 {
    text-align: left;
  }
</style>